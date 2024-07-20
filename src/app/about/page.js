import Line from "@/components/shared/line/line";
import "../mainPage.scss";
import "./aboutPage.scss";

import AboutHero from "@/components/about/hero";
import AboutSector from "@/components/about/sector";
import Footer from "@/components/footer/footer";
import Numbers from "@/components/shared/numbers/numbers";
import Trusted from "@/components/shared/trusted/trusted";
import AboutAdvantages from "@/components/about/advantages";
import FormSection from "@/components/shared/form/formSection";

export default function About() {
  return (
    <main>
      <AboutHero />
      <Line text="About us" />
      <AboutSector />
      <FormSection />
      <AboutAdvantages />
      <Numbers />
      <Trusted />
      <Footer />
    </main>
  );
}
