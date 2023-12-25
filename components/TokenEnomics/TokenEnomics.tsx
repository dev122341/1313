import Image from "next/image";
import Link from "next/link";
export default function TokenEnomics() {
  return (
    <div className="py-32 px-5 text-yellow-600 text-center flex flex-col items-center">
      <h2 className=" text-4xl md:text-6xl font-bold">TOKENOMICS</h2>
      <p className="text-white text-2xl w-96 mt-8 ">
        Wynnn made 555 Million tokens but hes{" "}
        <span className="text-red-500">a greedy son of a bitch</span> and wants
        to keep them all to himself.
      </p>
      <div className="flex md:flex-row flex-col gap-10 lg:gap-24 mt-20">
        <div className="max-w-[40rem] ">
          <Image
            className="animate-pulse"
            src={"/trading.jpg"}
            width={1920}
            height={1080}
            alt="trading"
          />
        </div>
        <div className="mt-2  w-full flex flex-col  flex-1 flex-shrink-0">
          <div className="max-w-[30rem] mb-20">
            <Image
              className="animate-pulse"
              src={"/atwork2.svg"}
              width={1920}
              height={1080}
              alt="artwork"
            />
          </div>
          <div className="w-full mb-5 px-1 text-2xl xl:text-4xl py-5 bg-yellow text-black">
            <p>TOTAL SUPPLY</p>
            <p>995,839,139.61 $Wynnn</p>
          </div>
          <div className="w-full px-2 text-2xl xl:text-4xl py-5 bg-yellow text-black">
            <p>TOKEN ADDRESS</p>
            <p className=" text-sm lg:text-xl">
              6LRrSLtw3KpqAxDzbXJRq9yDr9fUTm6N3345kvb1BeLb
            </p>
          </div>
        </div>
      </div>
      <Link
        target="_blank"
        href={
          "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=6LRrSLtw3KpqAxDzbXJRq9yDr9fUTm6N3345kvb1BeLb&fixed=in"
        }
        className="bg-red uppercase mx-auto lg:ml-96 mt-14 animate-bounce lg:mr-auto text-white py-3 px-5 text-3xl "
      >
        BUY Wynnn here
      </Link>
    </div>
  );
}
