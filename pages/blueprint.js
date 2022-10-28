import Image from "next/image";
import Layout from "../components/layout/Layout";
import blueprints from "../data/blueprint";

const BlueprintPage = () => {
  return (
    <div className="text-center md:px-8 lg:px-16 py-4">
      <div className="uppercase text-3xl md:text-5xl lg:text-6xl font-bold">
        Blueprint
      </div>
      <div className="my-8 uppercase text-lg md:text-xl lg:text-2xl font-semibold">
        A bright future is ahead for us
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8 uppercase">
        {blueprints.map((bp) => (
          <div
            key={bp.name}
            className="px-4 md:px-8 py-12 bg-white text-black rounded-lg flex flex-col items-center justify-center gap-2"
          >
            <Image alt="Blueprint" src={bp.img} width={186} height={186} />
            <div className="font-semibold text-2xl">{bp.name}</div>
            <div className="text-sm">{bp.description}</div>
          </div>
        ))}
      </div>

      <div className="my-8 uppercase text-lg md:text-xl lg:text-2xl font-semibold">
        Our blueprint is not blue but it works
      </div>
    </div>
  );
};

BlueprintPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default BlueprintPage;
