import Image from "next/image";
import Link from "next/link";
export default function TokenEnomics() {
  return (
    <div className="  pb-0  text-yellow-600 text-center flex flex-col items-center">
      {/* <h2 className=" text-4xl uppercase md:text-8xl font-bold">TOKENOMICS</h2>
      <p className="text-white text-2xl md:text-5xl max-w-[70rem]  mt-8 ">
        KONKO made 999.999.999 Tokens. And He {"doesn’t"} know what to do with
        Them 👀
      </p> */}
      {/* <div className="flex w-full flex-col space-y-14  mt-14   space-x-7 justify-center items-center">
        <div className=" w-auto ">
          <div className="w-full mb-5 px-20 text-2xl xl:text-6xl py-5 bg-yellow text-black">
            <p>TOTAL SUPPLY</p>
            <p>
              999.999.999 <span className="font-sans font-bold">$</span>KONKO
            </p>
          </div>
        </div>
        <div className="animate-bounce">
          <Link
            target="_blank"
            href={
              "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=6LRrSLtw3KpqAxDzbXJRq9yDr9fUTm6N3345kvb1BeLb&fixed=in"
            }
            className="bg-red uppercase   animate-bounce lg:mr-auto text-white py-3 px-5 text-3xl "
          >
            BUY Konko here
          </Link>
        </div>
      </div> */}
      <div className="flex md:flex-row flex-col w-full gap-[.5%]  amt-20">
        <Image
          className="animate-pulse w-full md:w-[49.75%]"
          src={"/dog-bubble1.jpg"}
          width={1920}
          height={1080}
          alt="trading"
        />
        <Image
          className="md:w-[49.75%] w-full"
          src={"/dog-bubble2.jpg"}
          width={1920}
          height={1080}
          alt="trading"
        />
      </div>
    </div>
  );
}
