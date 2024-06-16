import Link from "next/link";
import LinkButton from "@/components/LinkButton/LinkButton";
function AboutPage() {
  return (
    <section id="about" className="about section">
      <div className="container section-title mb-3" data-aos="fade-up">
        <h2 className="text-center">About Us</h2>
        <p className="text-center">
          Dedicated to Delivering Exceptional Quality and Unmatched Service,
          Every Time.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <p>
              Welcome to Gundaling Print, a leading provider of printing
              solutions for both business and personal needs. With over 20 years
              of experience in the industry, we take pride in delivering
              high-quality printing services that meet the highest industry
              standards.
            </p>
            <h5>Our Brief Service(s)</h5>
            <ul>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>
                  Offset Printing: Ideal for precise and high-quality mass
                  printing.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>
                  Digital Printing: Fast and efficient solutions for small to
                  medium-scale printing needs.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>
                  Large Format Printing: For banners, posters, and other large
                  promotional materials.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>
                  Finishing Options: Various finishing options such as
                  lamination, embossing, and custom cutting.
                </span>
              </li>
            </ul>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <p>
              At Gundaling, we are committed to providing satisfying services
              and delivering outstanding print results to every customer. We
              combine modern technology with skilled craftsmanship to ensure
              seamless print projects that yield stunning products.
            </p>
            <h5>Why Choose Us?</h5>
            <ul>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>
                  Quality: We use the finest materials and state-of-the-art
                  printing technology to ensure flawless end results.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>
                  On-Time Delivery: We value your time and are committed to
                  delivering orders on schedule.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>
                  Customer Service: Our team is dedicated to assisting you
                  throughout the entire project, providing necessary support and
                  expert advice.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>
                  Competitive Pricing: We offer competitive prices for all our
                  services, ensuring you get the maximum value for your printing
                  investment.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mb-5">
          <LinkButton href={`/about/teams`}>
            <span>Check Our Teams</span>
            <i className="bi bi-arrow-right"></i>
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
