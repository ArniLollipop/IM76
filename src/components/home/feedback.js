import Image from "next/image";

export default function MainFeedback() {
  return (
    <section className="feedback section">
      <div className="container">
        <h3 className="transparent-text">what people </h3>
        <h3 className="feedback-right__h3">say about us</h3>
        <div className="feedback-info">
          <div className="feedback-info__one">
            <div className="feedback-info__top">
              <h4 className="">Roger Olsson</h4>
              <p>
                The service from MASADA HLS was fantastic. The Engineering and
                Production teams were efficient and brilliant. The communication
                with MASADA HLS during the years is great and make things move
                so smoothly. I would recommend MASADA HLS for any basic to
                sophisticated rubber or plastic parts production.
              </p>
            </div>
            <Image src="/volvo.png" width={48} height={47} alt="volvo.png" />
          </div>
          <div className="feedback-info__one">
            <div className="feedback-info__top">
              <h4 className="">Robert Greenhouse</h4>
              <p>
                We have nothing but praise for the Gosselin team, who from start
                to finish have been a delight to work with! With the Highest
                level of engineers and production teams and on time supply.
              </p>
            </div>
            <Image src="/man.png" width={139} height={40} alt="volvo.png" />
          </div>
        </div>
        <div className="section">
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
                alt="trusted1.png"
              />
              <p>magen david adom</p>
            </li>
            <li>
              <Image
                src="/trusted3.png"
                width={90}
                height={87}
                alt="trusted1.png"
              />
              <p>israel ministry of health</p>
            </li>
            <li>
              <Image
                src="/trusted4.png"
                width={90}
                height={87}
                alt="trusted1.png"
              />
              <p>israel police</p>
            </li>
            <li>
              <Image
                src="/trusted5.png"
                width={90}
                height={87}
                alt="trusted1.png"
              />
              <p>israel defense forces</p>
            </li>
            <li>
              <Image
                src="/trusted6.png"
                width={90}
                height={87}
                alt="trusted1.png"
              />
              <p>mossad</p>
            </li>
            <li>
              <Image
                src="/trusted7.png"
                width={90}
                height={87}
                alt="trusted1.png"
              />
              <p>usa department of defense</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
