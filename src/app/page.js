import MainHero from "@/components/home/hero";
import MainCaution from "@/components/home/caution";
import "./mainPage.scss";
import MainAdvantages from "@/components/home/advantages";
import MainFeatures from "@/components/home/features";
import MainPrices from "@/components/home/prices";
import MainFeedback from "@/components/home/feedback";

export default function Home() {
  return (
    <main className="content-grid">
      <MainHero />
      <MainCaution />
      <MainAdvantages />
      <MainFeatures />
      <MainPrices />
      <MainFeedback />
    </main>
  );
}
