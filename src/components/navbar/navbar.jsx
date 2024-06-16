import Links from "./links/Links";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";

function Navbar() {
  return (
    <nav
      id="mainNavbar"
      className="navbar fixed-top navbar-expand-lg bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href={`/`}>
          <Image src={logo} width={200} height={36} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <Links />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
