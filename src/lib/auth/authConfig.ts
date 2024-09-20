import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import client from "../db";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  // adapter: MongoDBAdapter(client),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
        if (user) { 
            return {
                ...token,
                id: user.id,
            }
        }
        return token
    },
    async session({ session, token }) {
        console.log("session callback", {session, token})
        return {
            ...session,
            user: {
                ...session.user,
                id: token.id as string,
            },
        }
    }
  }
});
