import Image from "next/image";
import Link from "next/link";

const SocialIcon1 = () => {
  return (
    <Link href="#">
      <Image alt="Social 1" src="/social/social1.png" width={16} height={16} />
    </Link>
  );
};

export default SocialIcon1;
