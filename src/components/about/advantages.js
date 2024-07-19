import Image from "next/image";

export default function AboutAdvantages() {
  return (
    <section className="section container about-advantages">
      <div className="about-advantages__title">
        <h2>
          highly <span className="outlined-text">capable</span> <br />
          <span className="outlined-text"> highly </span> committed
        </h2>
        <Image
          src="/aboutAdvantages.png"
          alt="about advantages"
          width={155}
          height={185}
        />
      </div>
      <ul className="about-advantages__list">
        <li>
          <h5>Engineering</h5>
          <p>
            The MASADA HLS group collaborates with our clients both in our own
            manufacturing plant and in their facilities, providing guidance at
            every stage of the process.
          </p>
        </li>
        <li>
          <h5>100% Quality Control</h5>
          <p>
            We manufacture mission-critical equipment and life-saving medical
            devices for use by millions of people worldwide, all in accordance
            with global quality standards.
          </p>
        </li>
        <li>
          <h5>
            Military Respiratory <br /> & Skin Protection
          </h5>
          <p>
            MASADA HLS equipment is relied upon by military personnel operating
            in difficult conditions and dealing with life-threatening CBRN.
          </p>
        </li>
        <li>
          <h5>Civilian Respiratory Protection</h5>
          <p>
            Before COVID-19, MASADA HLS had state-of-the-art respirators, masks
            and other Personal Protective Equipment ready for use in every
            situation.
          </p>
        </li>
      </ul>
    </section>
  );
}
