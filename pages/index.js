import Button from "../components/common/Button";
import DiscordBlackIcon from "../components/icons/DiscordBlackIcon";
import InvertedDiscordIcon from "../components/icons/InvertedDiscordIcon";
import InvertedInstagramIcon from "../components/icons/InvertedInstagramIcon";
import InvertedTwitterIcon from "../components/icons/InvertedTwitterIcon";
import MintIcon from "../components/icons/MintIcon";
import Carousel from "../components/landing/Carousel";
import Layout from "../components/layout/Layout";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col gap-6 justify-center items-center px-4 md:px-8 lg:px-16 py-4">
        <div className="font-semibold text-xl md:text-3xl text-center">
          GRAND ESCAPE MEMBERS CLUB NFT
        </div>
        <div className="font-semibold text-black bg-[#ffe817] w-fit px-2 py-1 rounded text-center">
          The new #1 Solana NFT Community
        </div>
      </div>

      <div className="my-8 grid gap-4 transform -rotate-3">
        <Carousel id={1} />
        <Carousel id={2} reverse />
      </div>

      <div className="px-4 md:px-8 lg:px-16 mb-8 md:mb-16 lg:mb-32">
        <div className="flex flex-col md:flex-row items-center justify-center py-8 gap-4 md:gap-8 lg:gap-16">
          <Button label="Minting soon" icon={<MintIcon />} />
          <Button label="Join our Discord" icon={<DiscordBlackIcon />} />
        </div>

        <div className="text-center">
          GEMC is a private members collective of 10,000 dedicated NFT&apos;s.
          Created by our famous artist! GEMC is doing Epic stuff for the NFT
          community.
          <br />
          <br />
          We are trying something different bringing Modern Digital Art to the
          NFT world.
        </div>

        <div className="mt-8 md:mt-12 lg:mt-24 border-y py-12 grid md:grid-cols-3 justify-center gap-8">
          <div className="flex flex-col items-center">
            <InvertedTwitterIcon />
            <div className="mt-4 text-center">
              Join, Retweet and follow us on Twitter
            </div>
          </div>
          <div className="flex flex-col items-center">
            <InvertedDiscordIcon />
            <div className="mt-4 text-center">
              Join the Club and conversation on Discord today
            </div>
          </div>
          <div className="flex flex-col items-center">
            <InvertedInstagramIcon />
            <div className="-translate-y-1 mt-4 text-center">
              Follow us on Instagram and repost our mission
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <Layout noPadding>{page}</Layout>;
};
