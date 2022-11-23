import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { db } from "../../../utils/dbConnect";
import { verifyPassword } from "../../../utils/auth";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;
        const user = (
          await db.query(`SELECT * FROM users WHERE email=$1`, [email])
        ).rows[0];
        if (!user) {
          throw new Error("Email does not exist.");
        }

        const isValid = await verifyPassword(password, user.passwordhash);

        if (!isValid) {
          throw new Error("Wrong password/email combination.");
        }
        // session.user = user;
        return {
          email: user.email,
          url: user.url,
          username: user.username,
          id: user.id,
        };
      },
    }),
  ],
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      if (profile) {
        token.id = profile.id;
        token.url = profile.url;
        token.username = profile.username;
      }
      return token;
    },
    async session(session, token) {
      session.id = token.id;
      session.username = token.username;
      session.email = token.email;
      session.url = token.url;
      return session;
    },
  },
});
