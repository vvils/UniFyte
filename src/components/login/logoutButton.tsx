"use client";

import { useRouter } from "next/navigation";
import { handleGoogleLogout } from "./handleGoogleLogout"

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
        handleGoogleLogout();
      }}
    >
      {props.children || "Logout"}
    </button>
  );
};

export default LogoutButton;
