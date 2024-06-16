import Image from "next/image";
import styles from "./Testimonials.module.css";
function Testimonials() {
  return (
    <section id="testimonialSection" className={styles.testimonialSectionClass}>
      <div className="container text-center mt-4">
        <div className="row justify-content-center">
          <h3>Testimonial from stakeholders</h3>
        </div>
        <div className="row">
          <div className="col-md-4 my-2" data-aos="fade-in">
            <i className={`bi bi-quote ${styles.largeQuote} mb-3`}></i>
            <blockquote className="text-center">
              <p>
                Gundaling Print provides fast, reliable service with exceptional
                print quality always.
              </p>
              <footer className="blockquote-footer">Rocky</footer>
            </blockquote>
          </div>
          <div className="col-md-4 my-2" data-aos="fade-out">
            <i className={`bi bi-quote ${styles.largeQuote} mb-3`}></i>
            <blockquote className="text-center">
              <p>
                Printing at Gundaling Print is always efficient, professional,
                and satisfying.
              </p>
              <footer className="blockquote-footer">Megawati</footer>
            </blockquote>
          </div>
          <div className="col-md-4 my-2" data-aos="zoom-in">
            <i className={`bi bi-quote ${styles.largeQuote} mb-3`}></i>
            <blockquote className="text-center">
              <p>
                I love the vibrant colors and quick turnaround at Gundaling
                Print.
              </p>
              <footer className="blockquote-footer">Susilo</footer>
            </blockquote>
          </div>
          <div className="col-md-4 my-2" data-aos="zoom-out">
            <i className={`bi bi-quote ${styles.largeQuote} mb-3`}></i>
            <blockquote className="text-center">
              <p>
                Excellent customer service and top-notch printing quality at
                Gundaling Print.
              </p>
              <footer className="blockquote-footer">Susilo</footer>
            </blockquote>
          </div>
          <div className="col-md-4 my-2" data-aos="fade-up">
            <i className={`bi bi-quote ${styles.largeQuote} mb-3`}></i>
            <blockquote className="text-center">
              <p>
                Gundaling Print makes printing easy and delivers beautiful
                results every time.
              </p>
              <footer className="blockquote-footer">Abdur</footer>
            </blockquote>
          </div>
          <div className="col-md-4 my-2" data-aos="fade-down">
            <i className={`bi bi-quote ${styles.largeQuote} mb-3`}></i>
            <blockquote className="text-center">
              <p>
                "Consistently impressed by the high-quality prints and friendly
                staff here.
              </p>
              <footer className="blockquote-footer">Bambang</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
