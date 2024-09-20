"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { link: { url: string; title: string } };

const NavLink = (props: Props) => {
  const { link } = props;
  const pathName = usePathname();
  return (
    <Link
      className={`text-md md:text-md text-gray-800 py-2 px-4 md:px-4 rounded-full hover:bg-gray-200 transition ease-in-out duration-200 transform hover:scale-105 ${
        pathName === link.url && "bg-black text-white"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
