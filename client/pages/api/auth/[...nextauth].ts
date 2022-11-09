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
      async authorize(credentials: { email: string; password: string }) {
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

        return { email: user.email, url: user.url, username: user.username };
      },
    }),
  ],
});
