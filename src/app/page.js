import Hero from "@/components/Hero/Hero";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import HomeProduct from "@/components/HomeProduct/HomeProduct";
import Locations from "@/components/Locations/Locations";
import Testimonials from "@/components/Testimonials/Testimonials";
import Image from "next/image";
import Link from "next/link";
import "../app/page.css";

export default function Home() {
  return (
    // <section className="container-fluid">
    //   <Link href={"/"}>
    //     <h1>Gundaling</h1>
    //   </Link>
    //   <h2></h2>
    // </section>
    <main>
      <Hero></Hero>
      <HomeAbout />
      <HomeProduct />
      <Testimonials />
      <Locations />
    </main>
  );
}
