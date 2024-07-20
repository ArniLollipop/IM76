import Image from "next/image";
import Header from "../header/header";

export default function MainHero() {
  return (
    <section className="main-section">
      <Header />
      <Image
        src="/mainSectionLeft.png"
        height={920}
        width={1024}
        alt="mainSectionLeft"
        className="main-bg__left"
      />

      <Image
        src="/mainSectionRight.png"
        height={920}
        width={1024}
        alt="mainSectionRight"
        className="main-bg__right"
      />
      <div className="main-inner container">
        <Image
          src="/mainMask.png"
          width={586}
          height={611}
          className="main-bg__mask full-width"
          alt="mainMask"
        />

        <h1 className="main-title">Facing The future Of Defense</h1>
        <div className="main-offer">
          <div className="main-offer__left">
            <ul className="main-offer__list">
              <li>
                <h4>Panoramic Visor</h4>
                <p>
                  Provides ballistic protection, anti-glare, and anti-fog
                  coatings, compatible with eyeglasses.
                </p>
              </li>
              <li>
                <h4>CBRN Protection</h4>
                <p>
                  Effectively filters chemical, biological, radiological, and
                  nuclear threats.
                </p>
              </li>
              <li>
                <h4>Adjustable Fit</h4>
                <p>Six straps for precise size adjustment.</p>
              </li>
            </ul>
          </div>
          <div className="main-offer__right">
            <h4>The future of CBRN masks is here:</h4>
            <p>
              The IM76 is built to meet the challenges and withstand extreme
              conditions like never before!
            </p>
            <a
              href="https://buy.stripe.com/9AQ3dv3Nr5uXcsoaEE"
              className="main-offer__button">
              buy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
