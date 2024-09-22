import { getServerSession } from "next-auth";

export const checkIsAuthenticated = async () => {
  const session = await getServerSession();
  if (session) {
    return true;
  } else {
    return false;
  }
};
