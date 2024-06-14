import Link from "next/link";

function NavLinks({ item }) {
  return (
    <Link className="nav-link" href={item.path}>
      {item.title}
    </Link>
  );
}

export default NavLinks;
