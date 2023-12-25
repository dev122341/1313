import Image from "next/image";
import Link from "next/link";
export default function HeaderSection() {
  return (
    <div className="mx-auto text-black">
      <div className="bg-yellow md:h-[100vh] w-full overflow-hidden  flex flex-col items-center  relative pt-10">
        <div className="relative text-black  mb-16 text-center px-9 md:w-[600px]  w-[100vw]   ">
          <p className="text-7xl !text-black font-bold">WYNNN</p>
          <p className="mt-10 text-xl md:text-4xl">Powered by solana</p>
        </div>

        <div className="flex flex-col md:flex-row gap-9 items-start">
          <div className=" order-2 md:order-1 w-full md:w-[48.5vw] mb-10  relative h-full   ">
            <Image
              className=" scale-150 md:scale-110 mx-auto md:ml-[30rem] md:mb-48 bg-inherit"
              src={"/anita1.svg"}
              width={1920}
              height={1080}
              alt="ponkey"
            />
          </div>

          <div className=" order-1 flex flex-0 flex-col mx-6 mb-5 md:mx-[30rem] items-start gap-y-20">
            <p className="text-3xl mt-16 ">
              Anita is a Degenerate Fairy That loves to Gamble
            </p>

            <div className="flex items-center gap-9">
              <Link
                target="_blank"
                href={
                  "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=6LRrSLtw3KpqAxDzbXJRq9yDr9fUTm6N3345kvb1BeLb&fixed=in"
                }
                className="bg-red hover:scale-110 uppercase px-3 py-2 text-xl md:text-3xl text-white rotate-6 border-[4px] border-black"
              >
                Buy wynnn
              </Link>
              <div className="flex mt-2 gap-4">
                <Link
                  target="_blank"
                  href={"https://twitter.com/wynnn_sol"}
                  className="w-14 h-14 hover:scale-110 cursor-pointer -rotate-3 bg-black flex items-center justify-center"
                >
                  <Image
                    className="w-10"
                    src={"/x.webp"}
                    width={100}
                    height={100}
                    alt="logo"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={"https://t.me/AnitaMaxWynnnSolchannel"}
                  className="w-14 h-14 rotate-3 hover:scale-110 cursor-pointer bg-black flex items-center justify-center"
                >
                  <Image
                    className="w-10"
                    src={"/telegram.webp"}
                    width={100}
                    height={100}
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
