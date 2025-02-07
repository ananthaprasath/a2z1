import React from "react";

// JSON Data for Steps
const stepsData = [
  {
    number: 1,
    title: "Step 1",
    description: "Login to your Facebook Business Manager account to get started."
  },
  {
    number: 2,
    title: "Step 2",
    description: "Set up your WhatsApp Business API on the cloud platform."
  },
  {
    number: 3,
    title: "Step 3",
    description: "Verify your WhatsApp business number to enable cloud messaging."
  },
  {
    number: 4,
    title: "Step 4",
    description: "Integrate the API with your existing systems for seamless communication."
  },
  {
    number: 5,
    title: "Step 5",
    description: "Start sending messages and engage with your customers effortlessly."
  }
];

const StepsSection = () => {
  return (
    <div className="bg2 py-5 text-dark">
      <div className="container aos">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 text-center mb-md-0" data-aos="zoom-in-right">
            <img
              src="/image/product/Whatsapp.png"  // Correct path to the image in the public folder
              alt="How to sign up"
              width="100"
              height="auto"
              className="img-fluid w-100"
            />
          </div>

          {/* Steps Section */}
          <div className="col-md-6 d-grid pt-4" data-aos="zoom-in-left">
            <div className="place-center">
              <h3 className="fw-bold mb-4">
                Get Your WhatsApp Business API Account in 5 Simple Steps:
              </h3>
              {stepsData.map((step) => (
                <div key={step.number} className="d-flex mt-4">
                  {/* Step Number */}
                  <div
                    className="d-flex justify-content-center align-items-center rounded-circle bg-success text-white"
                    style={{
                      width: "40px",
                      height: "40px",
                      fontSize: "1.25rem",
                      flexShrink: 0,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Step Content */}
                  <div className="ms-3">
                    <p className="mb-1 fw-bold">
                      {step.title}
                    </p>
                    <p className="mb-0 para-color">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
