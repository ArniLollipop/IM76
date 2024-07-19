import Line from "@/components/line/line";
import "../mainPage.scss";
import "./aboutPage.scss";

import AboutHero from "@/components/about/hero";
import AboutSector from "@/components/about/sector";
import Form from "@/components/form/form";
import Footer from "@/components/footer/footer";
import Numbers from "@/components/numbers/numbers";
import Trusted from "@/components/trusted/trusted";
import AboutAdvantages from "@/components/about/advantages";

export default function About() {
  return (
    <main>
      <AboutHero />
      <Line text="About us" />
      <AboutSector />
      <Form />
      <AboutAdvantages />
      <Numbers />
      <Trusted />
      <Footer />
    </main>
  );
}
