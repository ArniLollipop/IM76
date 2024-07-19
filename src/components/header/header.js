import Link from "next/link";
import "./header.scss";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header container">
      <Image src="/Logo.png" width={80} height={30} alt="logo" />

      <nav>
        <ul className="header-list">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">dealers</Link>
          </li>

          <li>
            <Link href="/about">law inforcement</Link>
          </li>

          <li>
            <Link href="/about">about us</Link>
          </li>

          <li>
            <Link href="/about">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
