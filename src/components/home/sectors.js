import Image from "next/image";
import Products from "../products/products";

export default function MainSectors() {
  const sectorsList = [
    { svg: `/sectors1.png`, text: "biological virus protection" },
    { svg: `/sectors2.png`, text: "emergency management" },
    { svg: `/sectors3.png`, text: "military masks" },
    { svg: `/sectors4.webp`, text: "medical team equipment" },
    { svg: `/sectors5.webp`, text: "industrial contamination kit" },
    { svg: `/sectors6.webp`, text: "civilians respiratory protection" },
    { svg: `/sectors7.png`, text: "covid-19 personal protection equipment" },
    { svg: `/sectors8.webp`, text: "hazmat suits" },
  ];

  return (
    <section className="sectors section container">
      <div className="sectors-title">
        <h3>
          <span className="text-justify">
            {" "}
            <span className="outlined-text"> Safety </span> products{" "}
          </span>
          <span className="text-justify">
            tailored
            <span className="outlined-text"> for </span>{" "}
          </span>
          <span className="text-justify">
            <span className="outlined-text"> multiple </span> sectors{" "}
          </span>
          and
          <span className="outlined-text"> industries </span>
        </h3>
        <Image src="/sectors.png" alt="Sectors" width={415} height={415} />
      </div>
      <Products sectorsList={sectorsList} colCount={4} />
    </section>
  );
}
