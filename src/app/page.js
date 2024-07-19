import "./mainPage.scss";

import MainHero from "@/components/home/hero";
import MainCaution from "@/components/home/caution";
import MainAdvantages from "@/components/home/advantages";
import MainFeatures from "@/components/home/features";
import MainPrices from "@/components/home/prices";
import MainFeedback from "@/components/home/feedback";
import MainMap from "@/components/home/map";
import MainForm from "@/components/home/form";
import MainSectors from "@/components/home/sectors";
import AboutUs from "@/components/home/aboutUs";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main className="content-grid">
      <MainHero />
      <MainCaution />
      <MainAdvantages />
      <MainFeatures />
      <MainPrices />
      <MainFeedback />
      <MainCaution />
      <MainMap />
      <MainForm />
      <MainSectors />
      <div className="footer-together">
        <AboutUs />
        <Footer />
      </div>
    </main>
  );
}
