import "./products.scss";
import Image from "next/image";

export default function Products(props) {
  return (
    <ul
      className="products-list"
      style={{
        gridTemplateColumns: `repeat(${props.colCount}, minmax(0, 1fr))`,
      }}>
      {props.sectorsList.map((sector, index) => (
        <li className="products-list__one" key={index}>
          <Image src={sector.svg} alt={sector.text} width={75} height={75} />
          <p>{sector.text}</p>
        </li>
      ))}
    </ul>
  );
}
