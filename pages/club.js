import Image from "next/image";
import Layout from "../components/layout/Layout";

const ClubPage = () => {
  return (
    <div className="text-center md:px-8 lg:px-32 xl:px-48 2xl:px-80 py-4">
      <div className="uppercase text-3xl md:text-5xl lg:text-6xl font-bold">
        YOU ARE THE
        <br />
        COMMUNITY
      </div>
      <div className="my-8 uppercase md:text-lg lg:text-xl font-semibold">
        ExcLusive access to the club
      </div>

      <div className="flex flex-col gap-16 mt-16 md:mt-20 lg:mt-24">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-32">
          <div className="relative aspect-square md:w-64 md:h-64 lg:w-80 lg:h-80">
            <Image alt="NFT" src="/props/blueprint.png" fill={true} />
          </div>
          <div className="text-start">
            <div className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">
              NOT AN ALPHA GROUP
            </div>
            <div>
              GEMc gives you access to an exceptional network of collectors,
              builders, creators, makers, entrepreneurs, professionals, and
              degens who share advice, information, knowledge, and skills openly
              to help each other win. GEMc is not an “alpha group”. GEMC IS THE
              ALPHA!
              <br />
              <br />
              We will also be there to support you at all times, and we will do
              everything we can to assist you.
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-32">
          <div className="text-start order-2 md:order-1">
            <div className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">
              THE KEY TO OPPORTUNITY
            </div>
            <div>
              With GEMC, you have the first access and information to the
              projects and products we will drop, including new collections.
              <br />
              <br /> This premium membership includes private access to the GEMX
              lounge in GEMC Discord, preferential allowlist spots, NFT drops,
              IRL events, and other collaborations available exclusively for
              GEMC members.
            </div>
          </div>
          <div className="relative aspect-square md:w-64 md:h-64 lg:w-80 lg:h-80 order-1 md:order-2">
            <Image alt="NFT" src="/props/nfts/6.png" fill={true} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-32">
          <div className="relative aspect-square md:w-64 md:h-64 lg:w-80 lg:h-80">
            <Image alt="NFT" src="/props/blueprint.png" fill={true} />
          </div>
          <div className="text-start">
            <div className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">
              SUPERCHARGE NFT INVESTMENTS
            </div>
            <div>
              In the “Fast and Furious” movies, nitrous oxide or NOS is a
              magical substance that can make all your car troubles go away and
              make cars fly.
              <br />
              <br /> At GEMC, GEMC IS THE NOS! GEMC adds fuel and oxygen to your
              GEMC engine and turns on the turbo mode. It boosts every key
              utility of your GEMC NFTs, from weekly tickets to $GEMC staking
              and more!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ClubPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ClubPage;
