import "./header.scss";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header container">
      <Image src="/Logo.png" width={80} height={30} />

      <nav>
        <ul className="header-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">dealers</a>
          </li>

          <li>
            <a href="/about">law inforcement</a>
          </li>

          <li>
            <a href="/about">about us</a>
          </li>

          <li>
            <a href="/about">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
