import Link from "next/link";
import Image from "next/image";
import DogsLayOut from "../DogsLayOut";
export default function SocialLink2() {
  return (
    <div className="bg-[#29536B] py-14 text-white grid-cols-13 grid max-h-[55rem] grid-rows-3">
      <div className="col-start-1 w-full flex flex-col  items-center row-start-1  col-end-13">
        <p className="text-7xl relative z-10 font-bold">SOCIALS</p>
        <p className="text-3xl font-semibold">
          Join <span className="font-sans font-bold">$</span>
          {"KONKO’S"} WORLD
        </p>
      </div>
      <div className="flex col-start-1 col-end-13 justify-center  items-center row-start-1 mt-28 row-end-1 gap-4">
        <div className="flex mt-2 gap-4">
          <Link
            target="_blank"
            href={"https://twitter.com/wynnn_sol"}
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
      <div className="row-start-3 col-start-4 md:col-start-8 col-end-12 lg:mt-0">
        <div className="animate-pulse rotate-3 md:-rotate-3">
          <Link
            target="_blank"
            href={
              "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=6LRrSLtw3KpqAxDzbXJRq9yDr9fUTm6N3345kvb1BeLb&fixed=in"
            }
            className="text-white md:text-3xl text-2xl bg-yellow border-4 rounded-0  border-black rotate-[3deg] shadow px-5 py-3 md:hover:scale-105 md:rotate-[-5deg]"
          >
            CLICK TO APE IN
          </Link>
        </div>
        <div className="flex items-center  row-start-3 row-end-4 sm:flex-row flex-col mt-16 gap-7">
          <p className="text-5xl uppercase  lg:block hidden font-bold ">
            <span className="font-sans">$</span>Konko
          </p>
          <div className="-rotate-3 md:rotate-3">
            <Link
              target="_blank"
              href={
                "https://birdeye.so/token/6LRrSLtw3KpqAxDzbXJRq9yDr9fUTm6N3345kvb1BeLb/GiBBdSFEnuNLsSTCLjP7tCZvqKFYnegPqD1orSgb8Kar?chain=solana"
              }
              className=" text-white md:text-3xl text-2xl bg-yellow border-4 rounded-0 animate-pulse border-black rotate[-3deg] shadow px-5 py-3 md:hover:scale-105 md:rotate[-3deg]"
            >
              Chart
            </Link>
          </div>
        </div>
      </div>

      <Image
        className="col-start-4 w-52 row-start-2 row-end-2 col-end-4"
        src={"/dog-1.svg"}
        width={120}
        height={120}
        alt="dog-1"
      />
      <Image
        className="col-start-2 mt-14 w-52 col-end-4 row-start-3 row-end-3"
        src={"/dog-2.svg"}
        width={120}
        height={120}
        alt="dog-2"
      />
      <Image
        className="col-start-6 w-52   row-start-3 row-end-3 col-end-9"
        src={"/dog-3.svg"}
        width={120}
        height={120}
        alt="dog-3"
      />
      <Image
        className="col-start-11 w-52 col-end-12 row-start-2 sm:row-start-1 row-end-2 "
        src={"/dog-4.svg"}
        width={120}
        height={120}
        alt="dog-4"
      />
    </div>
  );
}
