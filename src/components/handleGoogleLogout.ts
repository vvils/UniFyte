import { signOut } from "next-auth/react";

export const handleGoogleLogout = async () => {
  try {
    await signOut();
  } catch (error) {
    console.error("Error during Google sign-in:", error);
  }
};
