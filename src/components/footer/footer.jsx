import Links from "./links/Links";
function Footer() {
  return (
    <section id="footerWebSection" className="p-3 bg-dark">
      <div className="container">
        <Links />
        <p className="text-white text-center">&copy; 2024 Gundaling Print</p>
      </div>
    </section>
  );
}

export default Footer;
