function Hero() {
  return (
    <section
      id="hero"
      className="d-flex justify-content-center align-items-center"
    >
      <div id="overlay">
        {/* <video loop muted autoPlay preload="auto">
          <source src={video} type="video/mp4" />
        </video> */}
      </div>
      <div id="heroHeader" className="container text-white text-center">
        <h3 className="display-5 mb-0">Welcome,</h3>
        <h1 className="display-3">I am Yohanes Damenta</h1>
        <h1 className="display-3">System Analyst</h1>
        <p className="lead d-none d-md-block">
          Currently learning to become a Software Engineer and this is my first
          website
        </p>
        <button id="showMore" className="btn btn-lg btn-primary mt-5 px-5">
          <a
            style={{ color: "black" }}
            href="#aboutSection"
            className="text-no-style"
          >
            Show More
          </a>
        </button>
      </div>
    </section>
  );
}

export default Hero;
