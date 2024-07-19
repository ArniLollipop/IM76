import Image from "next/image";
import Header from "../header/header";

export default function AboutHero() {
  return (
    <section className="main-section about-section">
      <Header />
      <div className="main-inner container">
        <div className="about-title">
          <h1>masaDA HLS: Leading the Way in CBRN Protection</h1>
          <p>
            The gas masks currently in use were developed years ago and have not
            been updated to take advantage of recent technological advancements.
          </p>
        </div>
        <div className="about-title__bottom">
          <p>
            During the last decade, the perception of the threat from chemical,
            biological, radiological, and nuclear (CBRN) warfare agents has
            changed. The weapons, materials, and operating scenarios have
            evolved, but the protective gear has remained largely unchanged.
          </p>
        </div>
      </div>
    </section>
  );
}
