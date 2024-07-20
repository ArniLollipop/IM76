import "../mainPage.scss";
import "./lawInforcement.scss";

import LawHero from "@/components/law-inforcement/hero";
import Line from "@/components/shared/line/line";
import LawAdvantages from "@/components/law-inforcement/advantages";
import Advantages from "@/components/shared/advantages/advantages";
import Trusted from "@/components/shared/trusted/trusted";
import Footer from "@/components/footer/footer";
import FormSection from "@/components/shared/form/formSection";

export default function LowInforcement() {
  return (
    <main>
      <LawHero />
      <Line text="Law inforcement" />
      <LawAdvantages />
      <FormSection />
      <Advantages img="/advantage2.png" />
      <Trusted />
      <Footer />
    </main>
  );
}
