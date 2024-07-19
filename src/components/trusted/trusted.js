import Image from "next/image";

export default function Trusted() {
  return (
    <div className="section container">
      <h4 className="outlined">
        <span className="outlined-text"> we are </span> <br /> trusted
      </h4>
      <ul className="feedback-trusted">
        <li>
          <Image
            src="/trusted1.png"
            width={90}
            height={87}
            alt="trusted1.png"
          />
          <p>israel ministry of defense</p>
        </li>
        <li>
          <Image
            src="/trusted2.png"
            width={90}
            height={87}
            alt="trusted2.png"
          />
          <p>magen david adom</p>
        </li>
        <li>
          <Image
            src="/trusted3.png"
            width={90}
            height={87}
            alt="trusted3.png"
          />
          <p>israel ministry of health</p>
        </li>
        <li>
          <Image
            src="/trusted4.png"
            width={90}
            height={87}
            alt="trusted4.png"
          />
          <p>israel police</p>
        </li>
        <li>
          <Image
            src="/trusted5.png"
            width={90}
            height={87}
            alt="trusted5.png"
          />
          <p>israel defense forces</p>
        </li>
        <li>
          <Image
            src="/trusted6.png"
            width={90}
            height={87}
            alt="trusted6.png"
          />
          <p>mossad</p>
        </li>
        <li>
          <Image
            src="/trusted7.png"
            width={90}
            height={87}
            alt="trusted7.png"
          />
          <p>usa department of defense</p>
        </li>
      </ul>
    </div>
  );
}
