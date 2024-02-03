import React from "react";
import Link from "next/link";
import Image from "next/image";

import ig from "../assets/images/ig.png";
import x from "../assets/images/x.png";
import telegram from "../assets/images/telegram.png";
import linkedin from "../assets/images/LinkedIn.png";
import discord from "../assets/images/discord.png";
import medium from "../assets/images/medium.png";

const socialLink = [
  {
    title: "ig",
    link: "https://Instagram.com/pepperlyl",
    src: ig,
  },
  {
    title: "x",
    link: "https://twitter.com/PepperlyI",
    src: x,
  },
  {
    title: "telegram",
    link: "https://t.me/+JsIi44AsIAk1MTU0",
    src: telegram,
  },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/company/pepperlyl/",
    src: linkedin,
  },
  {
    title: "discord",
    link: "https://discord.gg/tvfm7jxhUk",
    src: discord,
  },
  {
    title: "medium",
    link: "https://medium.com/@pepperlyl",
    src: medium,
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-white text-opacity-70 text-base font-normal">
        Community is Power. Stay Connected
      </div>
      <div className="flex gap-3 mt-2">
        {socialLink.map((social, index) => (
          <Link key={index} href={social.link}>
            <Image
              src={social.src}
              alt={social.title}
              className="w-5 hover:scale-125 transition-transform duration-300 ease-in-out"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
