import Image from "next/image";
import Form from "../shared/form/form";

export default function ContactForm() {
  return (
    <section className="contact container">
      <h1>
        <span className="block ">
          {" "}
          place <span className="outlined-text"> your </span> pre-launch
        </span>
        <span className="block ">
          {" "}
          order and <span className="outlined-text"> get 10% off</span>
        </span>
      </h1>
      <div action="" className="contact-form__flex">
        <Image src="/contact.png" width={376} height={595} alt="contact" />
        <div className="contact-form__right">
          <Form />
          <div className="contact-form__bottom">
            <ul>
              <h5>Impertech ind. LTD</h5>
              <li>
                <a href="#">
                  Phone number:{" "}
                  <span className="font-bold">+972 052 9274662</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Legal address:{" "}
                  <span className="font-bold">
                    24 Barkan st. Barkan. Israel
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  E-mail:{" "}
                  <span className="font-bold">www.impertechsafety.com</span>
                </a>
              </li>
            </ul>
            <ul>
              <h5>Contact</h5>
              <li>
                <a href="#">
                  Director: <span className="font-bold">Asaf Hazut</span>
                </a>
              </li>
              <li>
                <a href="#">
                  E-mail:{" "}
                  <span className="font-bold">asafh@supergum.co.il</span>
                </a>
              </li>
              <li>
                <a href="#">
                  E-mail:{" "}
                  <span className="font-bold">www.Impertechsafety.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
