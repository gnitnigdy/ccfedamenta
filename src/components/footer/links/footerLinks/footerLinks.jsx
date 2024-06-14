import Link from "next/link";

function FooterLinks({ item }) {
  return (
    <Link className="nav-link text-white" href={item.path}>
      {item.title}
    </Link>
  );
}

export default FooterLinks;
