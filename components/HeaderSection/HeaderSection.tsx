import Image from "next/image";
import Link from "next/link";

export default function HeaderSection() {
  return (
    <div className="mx-auto text-black">
      <div className="bg-[#E5A220] max-h-fit md:min-h-[100vh] w-full overflow-hidden  flex flex-col items-center  relative pt-10">
        <div className="relative text-white  mb-16 text-center px-9 md:w-[600px]  w-[100vw]   ">
          <p className=" text-7xl md:text-[140px] text-white font-bold">
            <span className="font-sans">$</span>BABYBOSS
          </p>
        </div>
        <div className="flex px-[5%] flex-col md:flex-row  gap-20 items-center">
          <div className="order-2 md:order-1 max-w-[60vw] mb-9 md:mb-0  relative h-full   ">
            <Image
              className="scale-150 md:scale-110  mx-auto   md:mt-40 "
              src={"/dog.svg"}
              width={1920}
              height={1080}
              alt="ponkey"
            />
          </div>

          <div className=" order-1 text-white   flex  flex-col  mb-5  items-start gap-y-14">
            <p className=" text-5xl lg:text-7xl ml-3  ">
              {/* <span  text-7xl ">Anita</span> is a
              Degenerate Fairy That loves to Gamble */}
              Normal Dog by Day <span className="text-red-600">Degen</span> at
              Night
            </p>

            <div className="flex w-full  flex-col items-center gap-9">
              <Link
                target="_blank"
                href={
                  "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=EnH4JEqqzD9gYHkAkBDBy8Tjx9YHhfXHuYQeYjZi1v8g&inputAmount=0.2&fixed=in"
                }
                className="bg-red order-2 hover:scale-110  uppercase px-3 py-2 text-xl md:text-4xl text-white rotate-6 border-[4px] border-black"
              >
                Buy konko
              </Link>

              <div className="flex order-1 mt-2 gap-4">
                <Link
                  target="_blank"
                  href={"http://twitter.com/konko_sol"}
                  className="w-16 h-16 hover:scale-110 cursor-pointer -rotate-3 bg-black flex items-center justify-center"
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
                  className="w-16 h-16 rotate-3 hover:scale-110 cursor-pointer bg-black flex items-center justify-center"
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
          </div>
        </div>
      </div>
    </div>
  );
}
