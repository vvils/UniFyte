import { checkIsAuthenticated } from "@/lib/auth/checkIsAuthenticated";
import { DashboardPage } from "./dashboard"
import { redirect } from "next/navigation";

const Dashboard: React.FC = async () => {
    const isAuthenticated = await checkIsAuthenticated();

  if (!isAuthenticated) {
    redirect("/login");
  } else {
    return <DashboardPage />;
  }
}

export default Dashboard