"use client";
import { useState } from "react";
import styles from "./Newsletter.module.css";
function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubs, setIsSubs] = useState(false);
  function handleSendSubscription(event) {
    event.preventDefault();
    if (!email) {
      alert(`Please fill your email!`);
      return;
    }
    setEmail("");
    setIsSubs((isSubs) => !isSubs);
  }
  return (
    <section>
      <div className={`${styles.newsletter}`}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>
                Subscribe to our newsletter and receive the latest news about
                our products and services!
              </p>
              <form
                method="post"
                className="email-form"
                onSubmit={handleSendSubscription}
                data-aos="zoom-out"
              >
                <div className={styles.newsletterForm}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Type your email here. . ."
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                  <input type="submit" value="Subscribe" />
                </div>
                {isSubs === true ? (
                  <div className="sent-message">
                    <p>Your request will be process immediately! Thank you.</p>
                  </div>
                ) : (
                  <div className="sent-message"></div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
