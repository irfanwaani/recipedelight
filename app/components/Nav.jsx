import Image from "next/image";
import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <nav className="w-full bg-gray-100 p-1 shadow sticky top-0 z-50 flex justify-center items-center">
      <Link href="/">
        <Image
          src={"/logo.png"}
          alt="logo"
          height={1000}
          width={1000}
          className="h-[80px] w-auto hover:scale-110 duration-300 active:scale-90"
        />
      </Link>
    </nav>
  );
}

export default Nav;
