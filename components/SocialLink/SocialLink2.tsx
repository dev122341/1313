import Link from "next/link";
import Image from "next/image";
import DogsLayOut from "../DogsLayOut";
export default function SocialLink2() {
  return (
    <div className="bg-[#E5A220]  pt-14  text-white  max-h-[55rem] ">
      <div className="col-start-1 w-full flex flex-col  items-center ">
        <p className="text-7xl relative z-10 font-bold">SOCIALS</p>
        <p className="text-3xl font-semibold">
          Join <span className="font-sans font-bold">$</span>
          {"KONKO’S"} WORLD
        </p>
      </div>
      <div className="flex  justify-center  items-center  mt-7  gap-4">
        <div className="flex mt-2 gap-4">
          <Link
            target="_blank"
            href={"http://twitter.com/konko_sol"}
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
            href={"https://t.me/Konkochannel"}
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
      <div className="flex lg:flex-row flex-col  mt-10 gap-[5%] lg:gap-[2%] justify-center ">
        <div className="flex w-full bg-[#E5A220] order-2 lg:order-1 lg:max-w-[30%] px-2 lg:-ml-48 mr-20 ">
          <Image
            className="col-start-7  w-full row-start-3 order-4  row-end-3 col-end-7"
            src={"/water-dog.svg"}
            width={120}
            height={120}
            alt="dog-1"
          />
        </div>
        <div className="lg:order-1 w-full flex mt-10 md:mt-28 flex-col items-center mb-16 lg:mb-7 lg:w-auto">
          <div className="animate-pulse rotate-3 md:-rotate-3">
            <Link
              target="_blank"
              href={
                "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=EnH4JEqqzD9gYHkAkBDBy8Tjx9YHhfXHuYQeYjZi1v8g&inputAmount=0.2&fixed=in"
              }
              className="text-white md:text-3xl text-2xl bg-red-600 border-4 rounded-0  border-black rotate-[3deg] shadow px-5 py-3 md:hover:scale-105 md:rotate-[-5deg]"
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
                  "https://birdeye.so/token/EnH4JEqqzD9gYHkAkBDBy8Tjx9YHhfXHuYQeYjZi1v8g?chain=solana"
                }
                className=" text-white md:text-3xl text-2xl bg-red-600 border-4 rounded-0 animate-pulse border-black rotate[-3deg] shadow px-5 py-3 md:hover:scale-105 md:rotate[-3deg]"
              >
                Chart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
