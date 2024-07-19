import Products from "../products/products";

export default function AboutSector() {
  const sectorsList = [
    { svg: `/sectors1.png`, text: "biological virus protection" },
    { svg: `/sectors2.png`, text: "emergency management" },
    { svg: `/sectors3.png`, text: "military masks" },
    { svg: `/sectors4.webp`, text: "medical team equipment" },
    { svg: `/sectors9.svg`, text: "CBRN Protection Solutions" },
    { svg: `/sectors5.webp`, text: "industrial contamination kit" },
    { svg: `/sectors6.webp`, text: "civilians respiratory protection" },
    { svg: `/sectors10.svg`, text: "First Responder Equipment" },
    { svg: `/sectors7.png`, text: "covid-19 personal protection equipment" },
    { svg: `/sectors8.webp`, text: "hazmat suits" },
  ];

  return (
    <section className="sectors section container">
      <h1>
        <span className="outlined-text">safety</span> products{" "}
        <span className="outlined-text"> for </span> multiple
        <span className="outlined-text">sectors</span>
      </h1>
      <Products sectorsList={sectorsList} colCount={5} />
    </section>
  );
}
