import Link from "next/link";
import { useState } from "react";
import Logo from "../common/Logo";
import DiscordIcon from "../icons/DiscordIcon";
import InstagramIcon from "../icons/Instagram";
import SocialIcon1 from "../icons/SocialIcon1";
import SocialIcon2 from "../icons/SocialIcon2";
import TwitterIcon from "../icons/TwitterIcon";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div
      className={`bg-black text-white flex justify-between p-8 gap-8 ${
        isOpen ? "inset-0 fixed z-10 flex-col" : ""
      }`}
    >
      <div
        className={`flex w-full md:w-fit items-start gap-16 ${
          isOpen ? "flex-col" : ""
        }`}
      >
        <div className="flex w-full md:w-fit justify-between">
          <Logo onClick={close} />
          <button
            className="md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
        <div
          className={`gap-6 uppercase font-semibold ${
            isOpen ? "flex flex-col" : "hidden md:flex"
          }`}
        >
          <Link href="/club" onClick={close}>
            The club
          </Link>
          <Link href="#" onClick={close}>
            Mint a GEMC
          </Link>
          <Link href="#" onClick={close}>
            Nesting
          </Link>
          <Link href="/blueprint" onClick={close}>
            Blueprint
          </Link>
          <Link href="/about" onClick={close}>
            About us
          </Link>
        </div>
      </div>
      <div
        className={`font-semibold items-center justify-center ${
          isOpen ? "flex gap-3" : "hidden md:flex gap-6"
        }`}
      >
        <TwitterIcon />
        <DiscordIcon />
        <InstagramIcon />
        <SocialIcon1 />
        <SocialIcon2 />
      </div>
    </div>
  );
};

export default Navbar;
