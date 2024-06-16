import { Lilita_One } from "next/font/google";
import LinkButton from "../LinkButton/LinkButton";

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lolita-one",
});

function Hero() {
  return (
    <section
      id="hero"
      className="d-flex justify-content-center align-items-center"
      title="Hero-Image"
    >
      <div id="overlay">
        {/* <video loop muted autoPlay preload="auto">
          <source src={video} type="video/mp4" />
        </video> */}
      </div>
      <div id="heroHeader" className="container text-white text-center pt-5">
        <h5 className={`display-5 mb-0`} data-aos="flip-left">
          One-Stop Printing Service
        </h5>
        <h1 className="display-1" data-aos="flip-right">
          Gundaling Printing
        </h1>
        <p className="lead d-none d-md-block" data-aos="fade-up">
          "Print all your needs easily, affordably, and simply."
        </p>
        <LinkButton href={`#aboutSection`}>
          <span>Get Started</span>
          <i className="bi bi-arrow-down"></i>
        </LinkButton>
      </div>
    </section>
  );
}

export default Hero;
