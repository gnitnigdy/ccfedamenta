function HomeAbout() {
  return (
    <section id="aboutSection">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <h2 className="text-center">I will tell you about my story</h2>
        </div>
        <div className="row text-center">
          <div className="col-md-4 p-3">
            <i className="fa-solid fa-child fa-custom-size"></i>
            <h3 className="mt-3">Childhood</h3>
            <p className="lead">
              I was born in Bogor. Live and grow in Bogor. Finished my school
              studies in Regina Pacis Bogor from kindegarten until Highschool.
            </p>
          </div>
          <div className="col-md-4 p-3">
            <i className="fa-solid fa-graduation-cap fa-custom-size"></i>
            <h3 className="mt-3">College Life</h3>
            <p className="lead">
              First of all i am not interested at all in Computer Science. After
              not passed in the selection for State University, i was going to
              Bina Nusantara University. Majoring in Mathematics.
            </p>
          </div>
          <div className="col-md-4 p-3">
            <i className="fa-solid fa-briefcase fa-custom-size"></i>
            <h3 className="mt-3">Present</h3>
            <p className="lead">
              After finishing my education, I work at Bina Nusantara IT
              Division. My job title is Senior System Analyst. Main responsible
              is providing services to all Binus Group especially in Bina
              Nusantara Schools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
