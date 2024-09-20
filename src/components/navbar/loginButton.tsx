"use client";

import { useRouter } from "next/navigation";

const LoginButton = (props: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const router = useRouter();

  return (
    <button
      className={props.className}
      style={{ cursor: "pointer" }}
      onClick={() => {
        router.push("/login");
      }}
    >
      {props.children || "Login"}
    </button>
  );
};

export default LoginButton;
