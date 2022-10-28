import Image from "next/image";
import Link from "next/link";

const InstagramIcon = () => {
  return (
    <Link href="https://www.instagram.com" className="-translate-y-0.5">
      <Image
        alt="Instagram"
        src="/social/instagram.png"
        width={16}
        height={16}
      />
    </Link>
  );
};

export default InstagramIcon;
