import Image from "next/image";
import Link from "next/link";
export default function TokenEnomics() {
  return (
    <div className=" py-14 md:pt-32 pb-0  text-yellow-600 text-center flex flex-col items-center">
      <h2 className=" text-4xl uppercase md:text-6xl font-bold">TOKENOMICS</h2>
      <p className="text-white text-2xl max-w-[45rem]  mt-8 ">
        {/* Anita Wynnn The Gambling Addicted Fairy Made 995,839,139.61 Tokens.{" "}
        <span className="font-sans font-bold">{"She's"}</span> not a{" "}
        <span className="text-red-600">greedy son of a Bitch</span> like her
        Brother 👀 <span className="font-sans font-bold">{"She's"}</span> Ready
        to Share them all */}
        KONKO made 999.999.999 Tokens. And He {"doesn’t"} know what to do with
        Them 👀
      </p>
      <div className="flex  w-full gap-10  mt-20">
        <div className=" ">
          <Image
            className="animate-pulse"
            src={"/dog-bubble1.jpg"}
            width={1920}
            height={1080}
            alt="trading"
          />
        </div>
      </div>
      {/* <div className="flex w-full flex-col space-y-14 md:space-y-0 mt-14 md:flex-row  space-x-7 justify-center items-center">
        <div className=" w-auto ">
          <div className="w-full mb-5 px-14 text-2xl xl:text-4xl py-5 bg-yellow text-black">
            <p>TOTAL SUPPLY</p>
            <p>
              999.999.999 <span className="font-sans font-bold">$</span>KONKO
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
