import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faUserClock } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
function HomeAbout() {
  return (
    <section id="aboutSection">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <h2 className="text-center" data-aos="fade-up" data-aos-delay="200">
            Our Company Values
          </h2>
        </div>
        <div className="row text-center">
          <div className="col-md-4 p-3" data-aos="zoom-in" data-aos-delay="200">
            <FontAwesomeIcon icon={faThumbsUp} className="fa-custom-size" />
            <h3 className="mt-3">Quality</h3>
            <p className="lead">
              We are committed to delivering high-quality prints that meet and
              exceed our customers' expectations.
            </p>
          </div>
          <div className="col-md-4 p-3" data-aos="zoom-in" data-aos-delay="200">
            <FontAwesomeIcon icon={faUserClock} className="fa-custom-size" />
            <h3 className="mt-3">Reliability</h3>
            <p className="lead">
              We are committed to delivering results on time and according to
              the promised specifications, ensuring our customers can rely on us
              at all times.
            </p>
          </div>
          <div className="col-md-4 p-3" data-aos="zoom-in" data-aos-delay="200">
            <FontAwesomeIcon icon={faFaceSmile} className="fa-custom-size" />
            <h3 className="mt-3">Satisfaction</h3>
            <p className="lead">
              Our customers are our top priority, and we strive to provide
              exceptional service and a satisfying experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
