import Header from "../header/header";

export default function DealerHero() {
  return (
    <section className="main-section dealer-section">
      <Header />
      <div className="main-inner container">
        <div className="hero-title">
          <h1>
            grow Your Business by Partnering with <br /> masada hls Safety as{" "}
            <br /> a Dealer
          </h1>
        </div>
        <div className="hero-title__bottom">
          <p>
            Our vision is to provide Respiratory Systems & Personal Protective
            Equipment (PPE) solutions to meet the challenges presented by
            COVID-19 and other CBRN threats.
          </p>
        </div>
      </div>
    </section>
  );
}
