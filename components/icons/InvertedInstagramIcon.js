import Image from "next/image";
import Link from "next/link";

const InvertedInstagramIcon = () => {
  return (
    <Link href="https://www.instagram.com" className="-translate-y-0.5">
      <Image
        alt="Instagram"
        src="/social/instagram-inverted.png"
        width={32}
        height={32}
      />
    </Link>
  );
};

export default InvertedInstagramIcon;
