import "./mainPage.scss";

import MainHero from "@/components/home/hero";
import Advantages from "@/components/shared/advantages/advantages";
import MainFeatures from "@/components/home/features";
import MainPrices from "@/components/home/prices";
import MainFeedback from "@/components/home/feedback";
import MainMap from "@/components/home/map";
import MainSectors from "@/components/home/sectors";
import Footer from "@/components/footer/footer";
import Line from "@/components/shared/line/line";
import Numbers from "@/components/shared/numbers/numbers";
import FormSection from "@/components/shared/form/formSection";

export default function Home() {
  return (
    <main>
      <MainHero />
      <Line text="caution" />
      <Advantages img="/advantage.png" />
      <MainFeatures />
      <MainPrices />
      <MainFeedback />
      <Line text="caution" />
      <MainMap />
      <FormSection />
      {/* <MainSectors />
      <div className="footer-together">
        <Numbers />
        <Footer />
      </div> */}
    </main>
  );
}
