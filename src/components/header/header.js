"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link href="/" className="header__logo">
            <img src="/img/logo.svg" alt="logo" />
          </Link>
          <div className="header__menu menu">
            <button type="button" className="menu__icon icon-menu">
              <span></span>
            </button>
            <nav className="menu__body">
              <ul className="menu__list">
                <li className="menu__item">
                  <Link href="/" className="menu__link active">
                    home
                  </Link>
                </li>
                <li className="menu__item">
                  <Link href="/dealers" className="menu__link">
                    dealers
                  </Link>
                </li>
                <li className="menu__item">
                  <Link href="/law-inforcement" className="menu__link">
                    law inforcement
                  </Link>
                </li>
                <li className="menu__item">
                  <Link href="/about" className="menu__link">
                    about us
                  </Link>
                </li>
                <li className="menu__item">
                  <Link href="/contact" className="menu__link">
                    contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
