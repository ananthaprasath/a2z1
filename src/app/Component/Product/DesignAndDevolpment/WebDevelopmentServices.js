import React from 'react'
const WebDevelopmentServices = () => {
  return (
    <section className="py-5 bg-light">
          <div className="container">
            <div className="row align-items-center aos">
              {/* Left Content */}
              <div className="col-md-6 text-center aos" data-aos="fade-right">
                <img
                  src="/image/product/design1.png"
                  alt="Cloud WhatsApp API Services" width="520px" height={"px"}
                  className="img-fluid rounded "
                />
              </div>
              <div className="col-md-6 para-color" data-aos="fade-left">
                <h2 className="fw-bold mb-4">
                Advanced Technologies for {" "}
                  <span className="text-primary"> Cutting-Edge Web Development </span>
                </h2>
                <p className="text-muted">
                To create state-of-the-art websites, we use the latest and most reliable technologies. Our development team is proficient in:
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="d-flex align-items-start mb-3">
                    <i className="bi bi-check-circle-fill text-primary me-3"></i>
                    <span>HTML & CSS The backbone of stunning and structured website designs.</span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <i className="bi bi-check-circle-fill text-primary me-3"></i>
                    <span>JavaScript & React For dynamic, interactive user interfaces with smooth performance.</span>
                  </li>
                  <li className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-primary me-3"></i>
                    <span>Bootstrap Rapid and responsive design framework for clean layouts.</span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <i className="bi bi-check-circle-fill text-primary me-3"></i>
                    <span>WordPress Ideal for flexible content management and customizable solutions.</span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <i className="bi bi-check-circle-fill text-primary me-3"></i>
                    <span>Next.js Perfect for SEO-friendly and high-performance web applications.</span>
                  </li>
                  <li className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-primary me-3"></i>
                    <span>PHP & MySQL Secure and scalable backend development for data-driven applications.</span>
                  </li>
                </ul>
             
              </div>
            </div>
          </div>
        </section>

        
  )
}

export default WebDevelopmentServices