import Image from "next/image";
import Link from "next/link";

const InvertedTwitterIcon = () => {
  return (
    <Link href="https://twitter.com">
      <Image
        alt="Twitter"
        src="/social/twitter-inverted.png"
        width={32}
        height={32}
      />
    </Link>
  );
};

export default InvertedTwitterIcon;
