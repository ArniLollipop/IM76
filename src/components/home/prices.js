import Image from "next/image";

export default function MainPrices() {
  const prices1 = [
    "Fits 4 sizes",
    "Side filters only (leftand right)",
    "Textile harnessing only",
    "No Speech Membrane and Sweat Drainage",
    "Communication Port",
    "Common safety advantages",
    "Panoramic visor",
    "Mask is heavy due to many parts Filters position can interfere with military operation",
  ];

  const prices2 = [
    "Better fitting to variety of facial shape and size, 3 sizes",
    "3 filter locations: front, left & right",
    "rubber / textile harnessing",
    "Speech Membrane and Sweat Drainage",
    "Communication Port",
    "Reduced use of glue that tend to breach, better adjustment to optic means",
    "Panoramic visor patented fastening system add safety and reduces costs.",
    "A modular mask that can be customized for each client’s needs while offering high level of cost effectiveness",
    "Unique neck-seal allowing operators to keep maintain short facial hair",
  ];

  const prices3 = [
    "Fits 3 sizes",
    "Central filter only",
    "Textile harnessing only",
    "Speech Membrane and Sweat Drainage",
    "No communication Port",
    "Common safety advantages",
    "Single lenses offer small field of vision",
  ];

  return (
    <section className="prices section container">
      <h3>
        <span className="outlined-text"> BE </span> STRONG.{" "}
        <span className="outlined-text"> BE </span> BOLD.{" "}
        <span className="outlined-text"> BE </span> SAFE.
      </h3>
      <p>
        <span className="font-bold"> High-quality </span> gas masks,{" "}
        <span className="font-bold"> advanced technology </span> and{" "}
        <span className="font-bold"> reliable protection </span> against all
        threats
      </p>
      <ul className="prices-list">
        <li className="prices-list__one">
          <Image src="/prices1.png" width={300} height={300} alt="prices1" />
          <h4>Avon FM50</h4>
          <ul className="prices-list__inner">
            {prices1.map((price, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none">
                  <g clip-path="url(#clip0_145_2488)">
                    <path
                      d="M6.9987 0.583984C5.7296 0.583984 4.48901 0.960315 3.43379 1.66539C2.37858 2.37046 1.55614 3.37261 1.07047 4.5451C0.584812 5.71759 0.45774 7.00777 0.705329 8.25248C0.952917 9.49719 1.56405 10.6405 2.46143 11.5379C3.35882 12.4353 4.50216 13.0464 5.74687 13.294C6.99158 13.5416 8.28176 13.4145 9.45425 12.9289C10.6267 12.4432 11.6289 11.6208 12.334 10.5656C13.039 9.51034 13.4154 8.26975 13.4154 7.00065C13.4154 5.29885 12.7393 3.66674 11.536 2.46338C10.3326 1.26002 8.70051 0.583984 6.9987 0.583984ZM10.3278 5.66307L6.24445 9.7464C6.13506 9.85576 5.98671 9.91719 5.83203 9.91719C5.67735 9.91719 5.52901 9.85576 5.41962 9.7464L3.66962 7.9964C3.56336 7.88638 3.50456 7.73903 3.50589 7.58608C3.50722 7.43314 3.56857 7.28683 3.67672 7.17867C3.78488 7.07052 3.93119 7.00917 4.08413 7.00784C4.23708 7.00651 4.38443 7.06531 4.49445 7.17157L5.83203 8.50915L9.50295 4.83823C9.61297 4.73198 9.76032 4.67318 9.91327 4.67451C10.0662 4.67584 10.2125 4.73719 10.3207 4.84534C10.4288 4.9535 10.4902 5.0998 10.4915 5.25275C10.4928 5.4057 10.434 5.55305 10.3278 5.66307Z"
                      fill="#061651"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_145_2488">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {price}
              </li>
            ))}
          </ul>
        </li>
        <li className="prices-list__one prices-list__special">
          <Image src="/prices2.png" width={300} height={300} alt="prices1" />
          <h4>Impertech IM76</h4>
          <ul className="prices-list__inner">
            {prices2.map((price, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none">
                  <g clip-path="url(#clip0_145_2488)">
                    <path
                      d="M6.9987 0.583984C5.7296 0.583984 4.48901 0.960315 3.43379 1.66539C2.37858 2.37046 1.55614 3.37261 1.07047 4.5451C0.584812 5.71759 0.45774 7.00777 0.705329 8.25248C0.952917 9.49719 1.56405 10.6405 2.46143 11.5379C3.35882 12.4353 4.50216 13.0464 5.74687 13.294C6.99158 13.5416 8.28176 13.4145 9.45425 12.9289C10.6267 12.4432 11.6289 11.6208 12.334 10.5656C13.039 9.51034 13.4154 8.26975 13.4154 7.00065C13.4154 5.29885 12.7393 3.66674 11.536 2.46338C10.3326 1.26002 8.70051 0.583984 6.9987 0.583984ZM10.3278 5.66307L6.24445 9.7464C6.13506 9.85576 5.98671 9.91719 5.83203 9.91719C5.67735 9.91719 5.52901 9.85576 5.41962 9.7464L3.66962 7.9964C3.56336 7.88638 3.50456 7.73903 3.50589 7.58608C3.50722 7.43314 3.56857 7.28683 3.67672 7.17867C3.78488 7.07052 3.93119 7.00917 4.08413 7.00784C4.23708 7.00651 4.38443 7.06531 4.49445 7.17157L5.83203 8.50915L9.50295 4.83823C9.61297 4.73198 9.76032 4.67318 9.91327 4.67451C10.0662 4.67584 10.2125 4.73719 10.3207 4.84534C10.4288 4.9535 10.4902 5.0998 10.4915 5.25275C10.4928 5.4057 10.434 5.55305 10.3278 5.66307Z"
                      fill="#061651"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_145_2488">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {price}
              </li>
            ))}
          </ul>
        </li>
        <li className="prices-list__one">
          <Image src="/prices3.png" width={300} height={300} alt="prices1" />
          <h4>Drager M20000</h4>
          <ul className="prices-list__inner">
            {prices3.map((price, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none">
                  <g clip-path="url(#clip0_145_2488)">
                    <path
                      d="M6.9987 0.583984C5.7296 0.583984 4.48901 0.960315 3.43379 1.66539C2.37858 2.37046 1.55614 3.37261 1.07047 4.5451C0.584812 5.71759 0.45774 7.00777 0.705329 8.25248C0.952917 9.49719 1.56405 10.6405 2.46143 11.5379C3.35882 12.4353 4.50216 13.0464 5.74687 13.294C6.99158 13.5416 8.28176 13.4145 9.45425 12.9289C10.6267 12.4432 11.6289 11.6208 12.334 10.5656C13.039 9.51034 13.4154 8.26975 13.4154 7.00065C13.4154 5.29885 12.7393 3.66674 11.536 2.46338C10.3326 1.26002 8.70051 0.583984 6.9987 0.583984ZM10.3278 5.66307L6.24445 9.7464C6.13506 9.85576 5.98671 9.91719 5.83203 9.91719C5.67735 9.91719 5.52901 9.85576 5.41962 9.7464L3.66962 7.9964C3.56336 7.88638 3.50456 7.73903 3.50589 7.58608C3.50722 7.43314 3.56857 7.28683 3.67672 7.17867C3.78488 7.07052 3.93119 7.00917 4.08413 7.00784C4.23708 7.00651 4.38443 7.06531 4.49445 7.17157L5.83203 8.50915L9.50295 4.83823C9.61297 4.73198 9.76032 4.67318 9.91327 4.67451C10.0662 4.67584 10.2125 4.73719 10.3207 4.84534C10.4288 4.9535 10.4902 5.0998 10.4915 5.25275C10.4928 5.4057 10.434 5.55305 10.3278 5.66307Z"
                      fill="#061651"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_145_2488">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {price}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
}
