import NavLinks from "./navLinks/navLinks";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contacts", path: "/contacts" },
  { title: "Products", path: "/products" },
];

function Links() {
  return (
    <ul className="navbar-nav ms-auto">
      {links.map((link) => {
        return (
          <li className="nav-item">
            <NavLinks item={link} key={link.title}></NavLinks>
          </li>
        );
      })}
    </ul>
  );
}

export default Links;
