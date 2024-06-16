"use client";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Hero from "@/components/Hero/Hero";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import HomeProduct from "@/components/HomeProduct/HomeProduct";
import Testimonials from "@/components/Testimonials/Testimonials";
import Image from "next/image";
import Link from "next/link";
import "../app/page.css";
import Newsletter from "@/components/Newsletter/Newsletter";

export default function Home() {
  useEffect(() => {
    Aos.init({
      // konfigurasi AOS
      duration: 1000,
      once: false, // Animasi hanya terjadi sekali
    });
  }, []);
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
      {/* <Newsletter /> */}
    </main>
  );
}
