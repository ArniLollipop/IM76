import "./numbers.scss";

export default function Numbers() {
  const numbersList = [
    {
      title: "50k",
      text: "products manufactured each year",
    },
    {
      title: "45",
      text: "years of experience & growth",
    },
    {
      title: "150",
      text: "business partners worldwide",
    },
    {
      title: "5",
      text: "millon masks distributed to civillians",
    },
  ];

  return (
    <section className="feedback section numbers">
      <div className="container">
        <div className="numbers-title">
          <h3 className="transparent-text">MASADA HLS </h3>
          <h3 className="feedback-right__h3">in numbers</h3>
          <p>
            The IM76 delivers top-tier CBRN protection with its panoramic visor,
            versatile platform, and adaptable filters. Ready for the toughest
            challenges and extreme conditions, it's the ultimate shield for your
            defenders.
          </p>
        </div>
        <ul className="numbers-list">
          {numbersList.map((number, index) => (
            <li key={index} className="numbers-list__one">
              <h5>{number.title}</h5>
              <p>{number.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
