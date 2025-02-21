import React from "react";

const BulkSmsHome = () => {
  return (
    <>
      {/* Transactional SMS Section */}
      <section
        className="bg2 mt-2"
        style={{
          // backgroundColor: "#f9f9f9",
          padding: "50px 0",
        }}
      >
        <div className="container para-color aos">
          <div className="row align-items-center aos">
            {/* Left Content */}
            <div className="col-md-6 para-color" data-aos="fade-right">
              <h1 className="fw-bold mb-4">
                Empower Your Business with{" "}
                <span className="text-primary">Transactional SMS</span>{" "}
                Solutions!
              </h1>
              <p>
                Deliver crucial updates, build customer trust, and enhance user
                engagement with our reliable transactional SMS services. Keep
                your audience informed, anywhere and anytime!
              </p>
              <ul className="list-unstyled mt-4 text-muted">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  <span>
                    Send instant OTPs, alerts, and notifications with 99.9%
                    delivery rates.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  <span>
                    Ensure customer satisfaction with timely updates on orders
                    and payments.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  <span>
                    Enable secure communications for banking and financial
                    transactions.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  <span>
                    Automate appointment reminders, confirmations, and
                    cancellations.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Image Section */}
            <div className="col-md-6 text-center aos" data-aos="fade-left">
               <img
              className="img-fluid rounded"
              src="/image/product/Transactional.png"
              alt="Transactional SMS Services"
            />
            </div>
          </div>
        </div>
      </section>

      {/* Promotional SMS Section */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "50px 0",
        }}
      >
        <div className="container para-color">
        <div className="row align-items-center aos">
          {/* Left Content */}

          <div className="col-md-6 text-center aos" data-aos="fade-left">
          <img
              className="img-fluid rounded"
              src="/image/product/Promotional.png"
              alt="Transactional SMS Services"
            />
          </div>
          {/* {right Content} */}
          <div className="col-md-6 para-color" data-aos="fade-right">
            <h2 className="fw-bold mb-4">
              Boost Your Sales with <span className="text-primary">Promotional SMS</span> Campaigns!
            </h2>
            <p>
              Drive customer engagement, increase brand visibility, and maximize 
              conversions with our effective promotional SMS solutions. Deliver 
              targeted campaigns directly to your audience!
            </p>
            <ul className="list-unstyled mt-4 text-muted">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Send bulk SMS campaigns to promote products, offers, and discounts.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Target specific customer segments with personalized messages.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Boost engagement with clickable links and call-to-actions.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Track campaign performance with real-time analytics.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Image Section */}
          
        </div>
        </div>
      </section>

      {/* OTP SMS Section */}
      <section
        className="bg3"
        style={{
          // backgroundColor: "#f9f9f9",
          padding: "50px 0",
        }}
      >
        <div className="container para-color">
        <div className="row align-items-center aos">
          {/* Left Content */}
          <div className="col-md-6 para-color" data-aos="fade-right">
            <h2 className="fw-bold mb-4">
              Secure Your Business with <span className="text-primary">OTP SMS</span> Solutions!
            </h2>
            <p>
              Provide secure, real-time authentication and enhance user trust with 
              our reliable OTP SMS services. Simplify verification and ensure 
              data security for your users.
            </p>
            <ul className="list-unstyled mt-4 text-muted">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Send one-time passwords instantly for login and transaction verification.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Ensure data security with encrypted and reliable OTP delivery.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Provide seamless two-factor authentication for enhanced account safety.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Integrate easily with APIs for instant OTP generation and delivery.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center aos" data-aos="fade-left">
          <img
              className="img-fluid rounded"
              src="/image/product/Otp.png"
              alt="Transactional SMS Services"
            />
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default BulkSmsHome;
