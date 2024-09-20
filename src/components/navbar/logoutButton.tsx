"use client";

import { useRouter } from "next/navigation";
import handleLogout from "../../lib/auth/logoutServerAction"

const LogoutButton = (props: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const router = useRouter();

  return (
    <button
      className={props.className}
      style={{ cursor: "pointer" }}
      onClick={() => {
        handleLogout();
      }}
    >
      {props.children || "Logout"}
    </button>
  );
};

export default LogoutButton;
