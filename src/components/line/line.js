import "./line.scss";

export default function Line(props) {
  return (
    <div className="main-caution flex">
      <div className="main-caution__container">
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i} className="main-caution__text">
            {props.text}
          </p>
        ))}
      </div>
    </div>
  );
}
