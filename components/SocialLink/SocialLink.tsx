import Link from "next/link";
import Image from "next/image";
export default function SocialLink() {
  return (
    <div className="bg-yellow lg:h-[100vh] pt-16 items-center overflow-hidden px-5 flex flex-col">
      <p className="text-7xl font-bold">SOCIALS</p>
      <p className="text-3xl font-semibold">Join the $PONKE community</p>

      <div className="flex mt-16 gap-4">
        <div className="flex mt-2 gap-4">
          <Link
            target="_blank"
            href={"https://t.me/AnitaMaxWynnnSolchannel"}
            className="w-20 h-20 hover:scale-110 cursor-pointer -rotate-3 bg-black flex items-center justify-center"
          >
            <Image
              className="w-16"
              src={"/x.webp"}
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
          <Link
            target="_blank"
            href={"https://t.me/AnitaMaxWynnnSolchannel"}
            className="w-20 h-20 rotate-3 hover:scale-110 cursor-pointer bg-black flex items-center justify-center"
          >
            <Image
              className="w-16"
              src={"/telegram.webp"}
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div className="flex px-5 lg:flex-row flex-col items-center gap-10">
        <div className="max-w-[41.5rem] order-2 lg:order-1">
          <Image
            className="max-w-[41rem]"
            src={"/ponke.gif"}
            alt=""
            width={1920}
            height={1080}
          />
        </div>
        <div className="order-1 mt-24 lg:mt-0">
          <Link
            target="_blank"
            href={
              "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=6LRrSLtw3KpqAxDzbXJRq9yDr9fUTm6N3345kvb1BeLb&fixed=in"
            }
            className="font-display text-white md:text-4xl text-2xl bg-red border-4 rounded-0 animate-pulse border-black rotate-[5deg] shadow px-5 py-3 md:hover:scale-105 md:rotate-[-10deg]"
          >
            CLICK TO APE IN
          </Link>

          <p className="text-5xl  lg:block hidden font-bold mt-16">wynnn</p>
        </div>
      </div>
    </div>
  );
}
