import Image from "next/image";

export default function MainMap() {
  return (
    <section className="section map">
      <div className="container">
        <h3>
          <span className="outlined-text">SERVING THE </span> BEST ARMIES{" "}
          <span className="outlined-text"> AND</span>
          CIVIL FORCES
          <span className="outlined-text">SUCH AS:</span>
        </h3>
      </div>
      <Image src="/map.png" width={1920} height={820} alt="map.png" />
    </section>
  );
}
