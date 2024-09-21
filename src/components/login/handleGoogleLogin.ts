import { signIn } from "next-auth/react";

export const handleGoogleLogin = async () => {
  try {
    await signIn("google", { redirect: true, callbackUrl:"/" });
  } catch (error) {
    console.error("Error during Google sign-in:", error);
  }
};
