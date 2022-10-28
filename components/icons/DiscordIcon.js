import Image from "next/image";
import Link from "next/link";

const DiscordIcon = () => {
  return (
    <Link href="https://discord.com">
      <Image alt="Discord" src="/social/discord.png" width={16} height={16} />
    </Link>
  );
};

export default DiscordIcon;
