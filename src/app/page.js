import MainHero from "@/components/home/hero";
import MainCaution from "@/components/home/caution";
import "./mainPage.scss";
import MainAdvantages from "@/components/home/advantages";

export default function Home() {
  return (
    <main className="content-grid">
      <MainHero />
      <MainCaution />
      <MainAdvantages />
    </main>
  );
}
