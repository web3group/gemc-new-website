import Link from "next/link";
import Logo from "../common/Logo";
import DiscordIcon from "../icons/DiscordIcon";
import InstagramIcon from "../icons/Instagram";
import SocialIcon1 from "../icons/SocialIcon1";
import SocialIcon2 from "../icons/SocialIcon2";
import TwitterIcon from "../icons/TwitterIcon";

const Footer = () => {
  return (
    <div className="bg-black text-white px-4 md:px-8 lg:px-16 py-4 flex flex-col items-center md:items-start gap-4">
      <Logo />
      <div className="flex flex-col md:flex-row justify-between text-sm text-center w-full">
        <div>© 2022 GEMCDAO, All rights reserved</div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
          <Link href="/privacy" className="mt-4 md:mt-0 text-sm underline">
            Privacy policy
          </Link>
          <Link href="/terms" className="text-sm underline">
            Terms & Conditions
          </Link>

          <div className="flex gap-3 items-center justify-center mt-4 md:mt-0">
            <TwitterIcon />
            <DiscordIcon />
            <InstagramIcon />
            <SocialIcon1 />
            <SocialIcon2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
