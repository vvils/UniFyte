"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { link: { url: string; title: string } };

const NavLink = (props: Props) => {
  const { link } = props;
  const pathName = usePathname();
  return (
    <Link
      className={`rounded p-2 text-xl hover:underline ${
        pathName === link.url && "bg-black text-white"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
