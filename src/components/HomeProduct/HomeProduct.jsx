import LinkButton from "../LinkButton/LinkButton";
import styles from "./HomeProduct.module.css";
function HomeProduct() {
  return (
    <section id="projectSection" className={styles.classSection}>
      <div className="container text-center mt-3 p-3">
        <div className="row justify-content-center" data-aos="zoom-in">
          <h3>Enjoy Hassle-Free, Fun Printing Experiences</h3>
        </div>
        <div className="row justify-content-center m-2">
          <div className="col-md-5 p-3" data-aos="fade-up">
            <div className="card custom-border">
              <div className="card-body">
                <h4 className="card-title text-primary">
                  Offline Store Experience
                </h4>
                <p className="card-text">
                  Come and let our team solve your needs.
                </p>
                <LinkButton
                  href={`https://www.google.com/maps/place/Gundaling+GunungBatu/@-6.5933991,106.7745999,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69c4145c60bc39:0xd514f8fafa8a9cc6!8m2!3d-6.5934044!4d106.7771748!16s%2Fg%2F11c72q8vdz?entry=ttu`}
                >
                  <span>Visit Offline Store</span>
                  <i className="bi bi-share"></i>
                </LinkButton>
              </div>
            </div>
          </div>
          <div className="col-md-5 p-3" data-aos="fade-down">
            <div className="card custom-border">
              <div className="card-body">
                <h4 className="card-title text-primary">
                  Explore Our New E-Commerce
                </h4>
                <p className="card-text">Have no time? Just order online!</p>
                <LinkButton href={`https://www.gundalingprint.com/`}>
                  <span>Visit Online Store</span>
                  <i className="bi bi-share"></i>
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeProduct;
