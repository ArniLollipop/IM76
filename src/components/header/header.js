"use client";

import Link from "next/link";
import "./header.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header container">
      <Image src="/Logo.png" width={80} height={30} alt="logo" />

      <nav>
        <ul className="header-list">
          <li>
            <Link className={pathname == "/" && "active"} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={pathname == "/dealers" && "active"}
              href="/dealers">
              dealers
            </Link>
          </li>

          <li>
            <Link
              className={pathname == "/law-inforcement" && "active"}
              href="/law-inforcement">
              law inforcement
            </Link>
          </li>

          <li>
            <Link className={pathname == "/about" && "active"} href="/about">
              about us
            </Link>
          </li>

          <li>
            <Link
              className={pathname == "/contact" && "active"}
              href="/contact">
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
