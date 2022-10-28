import Image from "next/image";
import Layout from "../components/layout/Layout";
import members from "../data/about";

const AboutPage = () => {
  return (
    <div className="text-center px-4 md:px-8 lg:px-16 py-4">
      <div className="md:px-16 lg:px-32 xl:px-48">
        <div className="uppercase text-lg md:text-2xl lg:text-4xl font-bold">
          A CULTURE SHIFT IN THE NFT WORLD
        </div>
        <div className="my-8 md:text-lg lg:text-xl font-light tracking-wider">
          An extraordinary brand built by brand builders and designers.
          <br />
          <br /> In a fast paced world of winners and losers, artists and
          builders, investors and whales the middle ground has been left out. We
          want to bring back the ability to grow your collection.
          <br />
          <br />
          An well crafted collection of 10,000 diverse Rhinos that grant you
          exclusive access to nesting and an immerse community and future
          options in the metaworld.
          <br />
          <br />
          Through meaningful member-only merch drops, outdoor campaigns,
          exclusive live events and collaborations with indie businesses and
          world-renowned brands, we create a community-centric, globally
          recognised brand that is a force for the better.
        </div>

        <div className="mt-8 md:mt-16 uppercase text-lg md:text-2xl lg:text-4xl font-semibold">
          The Team building the #1 Community on Solana
        </div>
      </div>

      <div className="md:px-8 xl:px-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-16 mt-8 md:mt-12 lg:mt-20">
        {members.map((member, index) => (
          <div key={index}>
            <div className="relative aspect-square md:w-full">
              <Image alt="NFT" src={member.image} fill={true} />
            </div>

            <div className="text-start mt-4">
              <div className="font-semibold text-2xl">{member.name}</div>
              <div className="font-semibold text-lg">{member.role}</div>
            </div>

            <div className="text-start mt-4">{member.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

AboutPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AboutPage;
