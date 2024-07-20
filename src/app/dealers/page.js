import "../mainPage.scss";
import "./dealersPage.scss";

import DealerHero from "@/components/dealers/hero";
import Line from "@/components/shared/line/line";
import DealerAdvantages from "@/components/dealers/advantages";
import DealerForm from "@/components/dealers/form";
import Footer from "@/components/footer/footer";

export default function Dealers() {
  return (
    <main>
      <DealerHero />
      <Line text="dealers" />
      <DealerAdvantages />
      <div className="footer-together">
        <DealerForm />
        <Footer />
      </div>
    </main>
  );
}
