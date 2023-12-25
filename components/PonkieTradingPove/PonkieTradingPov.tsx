import Image from "next/image";

export default function PonkieTradingPove() {
  return (
    <div className="bg-pov relative bg-center bg-[url('/trading-2.gif')] bg-cover py-36 px-24 bg-no-repeat md:min-h-[1200px] flex-1">
      <div className="border-3 uppercase text-black bg-yellow text-2xl md:text-4xl lg:text-7xl max-w-fit font-bold px-2 md:px-5 py-3 -rotate-6 border-black ">
        wynnn TRADING POV
      </div>
      <div className="max-w-[38.5rem] absolute bottom-1 right-5 lg:order-1">
        <Image
          className="max-w-[37.5rem]"
          src={"/anita2.svg"}
          alt=""
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
}
