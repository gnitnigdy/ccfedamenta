function Testimonials() {
  return (
    <section id="testimonialSection">
      <div className="container text-center mt-4">
        <div className="row justify-content-center">
          <h3>Testimonial from stakeholders</h3>
        </div>
        <div className="row">
          <div className="col-md-4 my-2">
            <i className="fa-solid fa-quote-left text-primary mb-3"></i>
            <blockquote className="text-center">
              <p>Keep up the good work! Eager to learn and really helpful</p>
              <footer className="blockquote-footer">
                Daniel (Head of Software @BINUS IT Division)
              </footer>
            </blockquote>
          </div>
          <div className="col-md-4 my-2">
            <i className="fa-solid fa-quote-left text-primary mb-3"></i>
            <blockquote className="text-center">
              <p>Keep up the good work! Eager to learn and really helpful</p>
              <footer className="blockquote-footer">
                Christian (Marketing Manager @Binus)
              </footer>
            </blockquote>
          </div>
          <div className="col-md-4 my-2">
            <i className="fa-solid fa-quote-left text-primary mb-3"></i>
            <blockquote className="text-center">
              <p>Keep up the good work! Eager to learn and really helpful</p>
              <footer className="blockquote-footer">
                Wira (Programmer @BINUS IT Division)
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
