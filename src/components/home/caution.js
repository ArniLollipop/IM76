export default function MainCaution() {
  return (
    <div className="main-caution flex">
      {Array.from({ length: 15 }).map((_, i) => (
        <p key={i} className="main-caution__text">
          caution
        </p>
      ))}
    </div>
  );
}
