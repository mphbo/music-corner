import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "../../../utils/dbConnect";
import { verifyPassword } from "../../../utils/auth";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
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
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.url = user.url;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      session.id = token.id;
      session.username = token.username;
      session.email = token.email;
      session.url = token.url;
      return session;
    },
  },
});
