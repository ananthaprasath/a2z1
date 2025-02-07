import React from 'react'
const Aboutus = () => {
  return (
    <div className="bg-light py-5">
      <div className="container py-5 fw-bold">
        <div className="row align-items-center para-color aos">
          {/* Left Section */}
          <div className="col-12 col-md-6" data-aos="zoom-in-right">
            <h6 className="text-primary text-uppercase fw-bold">
              More About Us
            </h6>
            <h2 className="fw-bold mb-4">
              Transform Customer Relationships with{" "}
              <span className="text-primary">WhatsApp CRM Integration</span>
            </h2>
            <p className="align">
              Elevate your customer experience by integrating WhatsApp with CRM
              systems. Automate responses, streamline lead management, and build
              stronger relationships with real-time communication features
              designed for modern businesses.
            </p>
            <ul className="list-unstyled">
              <div className="row">
                <div className="col-md-6">
                  <li className="mb-2 d-flex">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>
                      Sync WhatsApp with your CRM for seamless communication.
                    </span>
                  </li>
                  <li className="mb-2 d-flex">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>Automate replies with AI-powered templates.</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>
                      Manage leads efficiently with real-time updates.
                    </span>
                  </li>
                </div>
                <div className="col-md-6">
                  <li className="mb-2 d-flex">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>Automate follow-ups based on customer behavior.</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>
                      Streamline workflows for messages and notifications.
                    </span>
                  </li>
                  <li className="mb-2 d-flex">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>Build loyalty with personalized interactions.</span>
                  </li>
                </div>
              </div>
            </ul>

            <div className="mt-3 p-3 border rounded text-center w-75 bg-info">
              <i className="bi bi-telephone-fill me-2"></i>
              <span>
                Call us anytime :{" "}
                <b>
                  {" "}
                  <a
                    href="tel:+918431086185"
                    className="text-white text-decoration-none"
                  >
                    +91-8431086185
                  </a>
                </b>
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-md-6 text-center" data-aos="zoom-in-left">
            <div>
              <img className="img-fluid rounded" src="/image/Whatsapp.png" alt=" Image"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus