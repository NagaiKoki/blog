import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_ID,
    }),
  ],

  callbacks: {
    signIn: async (_, account, profile) => {
      if (
        account.provider === "google" &&
        profile.verified_email === true &&
        profile.email.endsWith("@gmail.com")
      ) {
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
