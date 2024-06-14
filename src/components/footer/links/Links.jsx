import FooterLinks from "./footerLinks/footerLinks";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contacts", path: "/contacts" },
  { title: "Products", path: "/products" },
];

function Links() {
  return (
    <ul className="nav text-center justify-content-center flex-column flex-md-row">
      {links.map((link) => {
        return (
          <li className="nav-item">
            <FooterLinks item={link} key={link.title}></FooterLinks>
          </li>
        );
      })}
    </ul>
  );
}

export default Links;
