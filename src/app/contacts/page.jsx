"use client";
import { useState } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  function handleSendMessage(event) {
    event.preventDefault();
    if (!name && !email && !subject && !message) {
      alert("Please fill all the fields in contact box!");
      return;
    }
    alert(
      `Name : ${name}\nEmail: ${email}\nSubject: ${subject}\n Message: ${message}\n\n Your message is on the way`
    );
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setIsSent(true);
  }

  return (
    <section id="contact">
      <div className="container section-title" data-aos="fade-up">
        <h2 className="text-center">Contact Us</h2>
        <p className="text-center">
          If you have any questions, please contact us and our team will
          promptly assist you
        </p>
      </div>

      <div className="container pt-3" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div>
                  <h3>Address</h3>
                  <p>
                    Mayjend Ishak Djuarsa No. 100 RT 003 RW 004 Kota Bogor 16118
                  </p>
                </div>
              </div>

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div>
                  <h3>Call Us</h3>
                  <p>+62 251 8377444</p>
                </div>
              </div>

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div>
                  <h3>Email Us</h3>
                  <p>gundaling.gunungbatu@gmail.com</p>
                </div>
              </div>

              <iframe
                src="https://maps.google.com/maps?q=gundaling+gunung+batu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                style={{ border: 0, width: "100%", height: "270px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7">
            <form
              onSubmit={handleSendMessage}
              method="post"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="form-control"
                    placeholder="Type your name here . . ."
                    required=""
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email-field"
                    placeholder="Type your email here . . ."
                    required=""
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject-field"
                    placeholder="Type your subject question here . . ."
                    required=""
                    onChange={(event) => {
                      setSubject(event.target.value);
                    }}
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    id="message-field"
                    placeholder="Type your message here . . ."
                    required=""
                    onChange={(event) => {
                      setMessage(event.target.value);
                    }}
                  ></textarea>
                </div>

                <div className="col-md-12 text-center mb-5">
                  {isSent === true ? (
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  ) : (
                    ""
                  )}
                  {/* <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div> */}

                  <button type="submit" className="btn btn-lg btn-primary">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
