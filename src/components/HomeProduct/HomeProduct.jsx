function HomeProduct() {
  return (
    <section id="projectSection">
      <div className="container text-center mt-3 p-3">
        <div className="row justify-content-center">
          <h3>Some project(s) that I have been worked before...</h3>
        </div>
        <div className="row justify-content-center m-2">
          <div className="col-md-4 p-3">
            <div className="card">
              <img src="" alt="" className="card-img-top" />
              <div className="card-body">
                <h4 className="card-title text-primary">
                  Admission Online System(s) BINUS University & Schools
                </h4>
                <p className="card-text">
                  Application for enrolment at BINUS Educational Institution.
                </p>
                <button className="btn btn-lg btn-outline-primary">
                  <a
                    href="http://www.binus.edu/admissions"
                    target="_blank"
                    className=" hover-icon"
                  >
                    Visit <i className="fa-regular fa-share-from-square"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card">
              <img src="" alt="" className="card-img-top" />
              <div className="card-body">
                <h4 className="card-title text-primary">
                  E-Desk Learning Management System (BINUS SCHOOLS)
                </h4>
                <p className="card-text">
                  Application for teaching and learning activities at Bina
                  Nusantara School(s)
                </p>
                <button className="btn btn-lg btn-outline-primary">
                  <a
                    href="http://e-desk.binus.sch.id"
                    target="_blank"
                    className=" hover-icon"
                  >
                    Visit <i className="fa-regular fa-share-from-square"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 p-3">
            <div className="card">
              <img src="" alt="" className="card-img-top" />
              <div className="card-body">
                <h4 className="card-title text-primary">
                  Virtual Account & Payment Gateway for BINUS Group
                </h4>
                <p className="card-text">
                  Service(s) to support all payment activities at Bina Nusantara
                  Group.
                </p>
                <button className="btn btn-lg btn-outline-primary">
                  <a
                    href="http://www.binus.edu"
                    target="_blank"
                    className=" hover-icon"
                  >
                    Visit <i className="fa-regular fa-share-from-square"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeProduct;
