import Image from "next/image";
import Link from "next/link";
export default function TokenEnomics() {
  return (
    <div className="  pb-0  text-yellow-600 text-center flex flex-col items-center">
      <div className="flex md:flex-row flex-col w-full">
        <Image
          className="animate-pulse w-full md:w-[50%]"
          src={"/dog-bubble1.jpg"}
          width={1920}
          height={1080}
          alt="trading"
        />
        <Image
          className="md:w-[50%] w-full"
          src={"/dog-bubble2.jpg"}
          width={1920}
          height={1080}
          alt="trading"
        />
      </div>
      <h2 className=" text-4xl mt-9 uppercase md:text-8xl font-bold">
        TOKENOMICS
      </h2>
      <p className="text-white text-2xl md:text-5xl max-w-[70rem]  mt-8 ">
        KONKO made 999.999.999 Tokens. And He Does
        <span className="font-serif">{"'"}</span>nt know what to Do with them
        👀. Air droped 85 <span className="font-serif font-bold">%</span> of
        supply to the solana community
      </p>
      <div className="flex w-full mb-14 flex-col space-y-14  mt-14   space-x-7 justify-center items-center">
        <div className=" w-auto ">
          <div className="w-full mb-5 px-20 text-2xl xl:text-6xl py-5 bg-red text-white ">
            <p>TOTAL SUPPLY</p>
            <p>
              999.999.999 <span className="font-sans font-bold">$</span>KONKO
            </p>
          </div>
          <div className="w-full mb-5 px-2 text-2xl xl:text-6xl py-5 bg-red text-white ">
            <p>Contract adress</p>
            <p className=" text-sm sm:text-xl xl:text-3xl">
              EnH
              <span className="font-serif text-base sm:text-2xl xl:text-4xl font-semibold">
                4
              </span>
              JEqqzD9gYHkAkBDBy8Tjx9YHhfXHuYQeYjZi1v8g{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="animate-bounce">
            <Link
              target="_blank"
              href={
                "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=EnH4JEqqzD9gYHkAkBDBy8Tjx9YHhfXHuYQeYjZi1v8g&inputAmount=0.2&fixed=in"
              }
              className="bg-red uppercase   animate-bounce lg:mr-auto text-white py-3 px-5 text-3xl "
            >
              BUY Konko here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
