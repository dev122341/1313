import HeaderSection from "@/components/HeaderSection/HeaderSection";
import NewsTicker from "@/components/NewsTicker/NewsTicker";
import PonkieTradingPove from "@/components/PonkieTradingPove/PonkieTradingPov";
import SocialLink from "@/components/SocialLink/SocialLink";
import SocialLink2 from "@/components/SocialLink/SocialLink2";
import TokenEnomics from "@/components/TokenEnomics/TokenEnomics";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#1d1d1d] min-h-screen bg-cover bg-center relative">
      <HeaderSection />
      <TokenEnomics />
      {/* <PonkieTradingPove /> */}
      <SocialLink2 />
    </main>
  );
}
