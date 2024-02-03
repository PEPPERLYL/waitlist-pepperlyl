import React from "react";
import Logo from "../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <div>
      <div className="flex justify-start w-full lg:px-2">
        <Link href="/">
          <Image src={Logo} alt="Logo" className="w-[160px] lg:w-[180px]" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
