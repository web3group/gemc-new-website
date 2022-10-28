import Image from "next/image";
import Link from "next/link";

const InvertedDiscordIcon = () => {
  return (
    <Link href="https://discord.com">
      <Image
        alt="Discord"
        src="/social/discord-inverted.png"
        width={32}
        height={32}
      />
    </Link>
  );
};

export default InvertedDiscordIcon;
