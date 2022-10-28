import Image from "next/image";
import { useEffect, useState } from "react";

const Carousel = ({ id, reverse = false }) => {
  // get scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // add event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    // remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // handle scroll
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    if (!id) return;
    document.getElementById("carousel-" + id).style.transform = `translateX(${
      reverse ? scrollPosition * 0.5 + 600 : scrollPosition * -0.5
    }px)`;
  }, [scrollPosition, id, reverse]);

  return (
    <div className="overflow-hidden">
      <div
        id={`carousel-${id}`}
        className={`flex gap-4 ${reverse && "flex-row-reverse"}`}
      >
        <Image
          alt="NFT"
          src="/props/nfts/1.png"
          width={500}
          height={500}
          className="h-32 md:h-48 lg:h-64"
        />
        <Image
          alt="NFT"
          src="/props/nfts/2.png"
          width={500}
          height={500}
          className="h-32 md:h-48 lg:h-64"
        />
        <Image
          alt="NFT"
          src="/props/nfts/4.png"
          width={500}
          height={500}
          className="h-32 md:h-48 lg:h-64"
        />
        <Image
          alt="NFT"
          src="/props/nfts/6.png"
          width={500}
          height={500}
          className="h-32 md:h-48 lg:h-64"
        />
        <Image
          alt="NFT"
          src="/props/nfts/8.png"
          width={500}
          height={500}
          className="h-32 md:h-48 lg:h-64"
        />
        <Image
          alt="NFT"
          src="/props/nfts/9.png"
          width={500}
          height={500}
          className="h-32 md:h-48 lg:h-64"
        />
        <Image
          alt="NFT"
          src="/props/nfts/10.png"
          width={500}
          height={500}
          className="h-32 md:h-48 lg:h-64"
        />
        <Image
          alt="NFT"
          src="/props/nfts/11.png"
          width={500}
          height={500}
          className="h-32 md:h-48 lg:h-64"
        />
        <Image
          alt="NFT"
          src="/props/nfts/1.png"
          width={500}
          height={500}
          className="h-32 md:h-48 lg:h-64"
        />
        <Image
          alt="NFT"
          src="/props/nfts/2.png"
          width={500}
          height={500}
          className="h-32 md:h-48 lg:h-64"
        />
        <Image
          alt="NFT"
          src="/props/nfts/4.png"
          width={500}
          height={500}
          className="h-32 md:h-48 lg:h-64"
        />
        <Image
          alt="NFT"
          src="/props/nfts/6.png"
          width={500}
          height={500}
          className="h-32 md:h-48 lg:h-64"
        />
        <Image
          alt="NFT"
          src="/props/nfts/8.png"
          width={500}
          height={500}
          className="h-32 md:h-48 lg:h-64"
        />
        <Image
          alt="NFT"
          src="/props/nfts/9.png"
          width={500}
          height={500}
          className="h-32 md:h-48 lg:h-64"
        />
        <Image
          alt="NFT"
          src="/props/nfts/10.png"
          width={500}
          height={500}
          className="h-32 md:h-48 lg:h-64"
        />
        <Image
          alt="NFT"
          src="/props/nfts/11.png"
          width={500}
          height={500}
          className="h-32 md:h-48 lg:h-64"
        />
      </div>
    </div>
  );
};

export default Carousel;
