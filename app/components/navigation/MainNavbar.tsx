import React from "react";
import Link from "next/link";

const MainNavbar = () => {
  return (
    <nav>
      <ul className="flex">
        <li>
          <Link href="/">
            <a className="uppercase font-bold mr-9 text-xs">Stories</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="uppercase font-bold mr-9 text-xs">Features</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="uppercase font-bold text-xs">Pricing</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavbar;
