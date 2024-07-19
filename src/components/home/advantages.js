import Image from "next/image";

export default function MainAdvantages() {
  return (
    <section className="advantages container section">
      <div className="advantages-flex">
        <h3>
          <span className="outlined-text"> All in one</span> multi <br />{" "}
          featured <br /> platform
        </h3>
        <Image src="/glass.png" width={231} height={119} alt="glass" />
      </div>
      <div className="advantages-flex">
        <Image src="/advantage.png" width={537} height={356} alt="advantage" />
        <ul className="advantages-list">
          <li className="advantages-list__one">
            <p className="advantages-list__count">01</p>
            <p>
              Mouth-nose cup provides{" "}
              <span className="font-bold">
                {" "}
                efficient breathing and ventilation{" "}
              </span>{" "}
              without compromising clear vision
            </p>
          </li>
          <li className="advantages-list__one">
            <p className="advantages-list__count">02</p>
            <p>
              A voice membrane interface allows{" "}
              <span className="font-bold">communication with team</span> members
            </p>
          </li>
          <li className="advantages-list__one">
            <p className="advantages-list__count">03</p>
            <p>
              Communication system includes inner microphone unit and{" "}
              <span className="font-bold">outgoing connector</span> to
              communication devices (radio / electronic / cellular / Bluetooth)
            </p>
          </li>
          <li className="advantages-list__one">
            <p className="advantages-list__count">04</p>
            <p>
              A drinking tube allows for{" "}
              <span className="font-bold"> safe refreshment </span> without
              having to remove the mask
            </p>
          </li>
          <li className="advantages-list__one">
            <p className="advantages-list__count">05</p>
            <p>
              An exhaust system to drain fluids (sweat and saliva){" "}
              <span className="font-bold"> prevents body fluids </span> from
              accumulating in the mask.
            </p>
          </li>
          <li className="advantages-list__one">
            <p className="advantages-list__count">06</p>
            <p>
              <span className="font-bold"> Made in Israel, </span> renowned for
              its <span className="font-bold"> high-quality </span>{" "}
              manufacturing standards
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
