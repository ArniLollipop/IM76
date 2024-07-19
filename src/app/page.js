import "./mainPage.scss";

import MainHero from "@/components/home/hero";
import MainAdvantages from "@/components/home/advantages";
import MainFeatures from "@/components/home/features";
import MainPrices from "@/components/home/prices";
import MainFeedback from "@/components/home/feedback";
import MainMap from "@/components/home/map";
import MainSectors from "@/components/home/sectors";
import Footer from "@/components/footer/footer";
import Line from "@/components/line/line";
import Form from "@/components/form/form";
import Numbers from "@/components/numbers/numbers";

export default function Home() {
  return (
    <main>
      <MainHero />
      <Line text="caution" />
      <MainAdvantages />
      <MainFeatures />
      <MainPrices />
      <MainFeedback />
      <Line text="caution" />
      <MainMap />
      <Form />
      <MainSectors />
      <div className="footer-together">
        <Numbers />
        <Footer />
      </div>
    </main>
  );
}
