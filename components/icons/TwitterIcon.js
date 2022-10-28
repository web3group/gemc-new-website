import Image from "next/image";
import Link from "next/link";

const TwitterIcon = () => {
  return (
    <Link href="https://twitter.com">
      <Image alt="Twitter" src="/social/twitter.png" width={16} height={16} />
    </Link>
  );
};

export default TwitterIcon;
