import Image from "next/image";
import Trusted from "../shared/trusted/trusted";

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
        <Trusted />
      </div>
    </section>
  );
}
