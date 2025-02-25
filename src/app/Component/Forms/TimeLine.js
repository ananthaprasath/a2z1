import React, { useState, useEffect } from "react";
import './requestdemo.css'

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "WhatsApp  API",
      description: `
        WhatsApp Business API is a powerful tool that allows you to engage customers on the world's most popular messaging app. 
        Use it to send real-time notifications, order updates, and important alerts. Automate customer queries with chatbots, 
        ensuring round-the-clock support. Share product catalogs directly within chats and drive seamless transactions. 
        Build customer trust with verified business profiles and personalized messaging. Scale your communication strategy
        with high delivery rates and advanced analytics. Perfect for businesses of all sizes to enhance customer satisfaction.
      `,
    },
    {
      id: 2,
      title: "Bulk SMS Service",
      description: `
        Bulk SMS Service lets you reach thousands of customers within seconds. Ideal for sending promotional campaigns, 
        transactional alerts, and updates. Guaranteed fast delivery rates across regions and devices. Build customer 
        trust with sender IDs and branded messages. Simplify communication with scheduling options for automated delivery. 
        Keep your customers informed with two-way communication for feedback collection. A cost-effective solution for 
        scaling business outreach without compromising reliability or efficiency.
      `,
    },
    {
      id: 3,
      title: "OTP Service",
      description: `
        OTP Service ensures secure transactions with instant One-Time Password delivery. Protect your users during logins, 
        password resets, and payment verifications. Enable two-factor authentication for an added layer of security. 
        Experience near-instant delivery, reducing friction in the user experience. Highly reliable service with failover 
        mechanisms to ensure OTPs reach your users. Safeguard sensitive data and build trust with end-to-end encryption. 
        Perfect for e-commerce, banking, and any application requiring secure access.
      `,
    },
    {
      id: 4,
      title: "RCS Messaging",
      description: `
        RCS (Rich Communication Services) Messaging takes text messaging to the next level. Send interactive messages with 
        images, videos, and action buttons. Deliver a modern messaging experience that supports customer engagement like never before. 
        Enhance your communication strategy with branded templates and verified sender IDs. Use analytics to track delivery 
        and interaction rates, ensuring maximum effectiveness. Ideal for promotions, customer support, and transactional updates. 
        Unlock the full potential of messaging with a feature-rich, media-capable platform.
      `,
    },
    {
      id: 5,
      title: "Bulk Voice Call",
      description: `
        Bulk Voice Call service allows you to deliver pre-recorded messages to your audience. Ideal for conducting surveys, 
        sending reminders, or delivering announcements. Ensure high engagement rates with personalized greetings and multilingual support. 
        Schedule voice calls for automated outreach campaigns, saving time and resources. Perfect for large-scale communication in 
        marketing, education, and political campaigns. Real-time reporting and analytics help you measure the impact of your calls. 
        Make communication more human with a voice that resonates with your customers.
      `,
    },
  ];
  

  useEffect(() => {
    setActiveStep(1);
  }, []);

  return (
    <div className="bg-light">
      <div className="container py-5 aos">
        <h1 className="text-center mb-4">Request a Free Demo Today!</h1>
        <div className="position-relative d-flex justify-content-between align-items-center">
          {/* Timeline Line */}
          {steps.map((step) => (

          <div>
            <div
            data-aos='zoom-in-left'
              className="position-absolute timeline "
              style={{
                height: "4px",
                background: "grey",
                zIndex: 0,
              }}
            >
              <div
              className="shadow"
                style={{
                  width: `${((activeStep - 1) / (steps.length - 1)) * 100}%`,
                  height: "100%",
                  background: "#007bff",
                  transition: "width 0.3s ease",
                }}
              ></div>
            </div>
            
            {/* Timeline Steps */}
              <div 
                key={step.id}
                data-aos='zoom-in-left'
                className={`text-center`}
                onClick={() => setActiveStep(step.id)}
                style={{
                  cursor: "pointer",
                  flex: 1,
                  position: "relative",
                  zIndex:2,
                }}
              >
                <div
                  className={`rounded-circle shadow ${
                    activeStep === step.id ? "bg-primary text-white" : "bg-light text-dark"
                  }`}
                  style={{
                    width: "50px",
                    height: "50px",
                    lineHeight: "50px",
                    margin: "0 auto",
                    fontWeight: "bold",
                  }}
                >
                  {step.id}
                </div>
                <p
                  className={`mt-2 ${activeStep === step.id ? "text-primary fw-bold" : "text-dark"}`}
                  style={{ fontSize: "14px" }}
                >
                  {step.title}
                </p>
              </div>
          </div>
          ))}
        </div>
      
        {/* Active Step Description */}
        <div className="mt-4 text-center para-color">
          <h5 className="text-primary">{steps.find((step) => step.id === activeStep).title}</h5>
          <p className="text-muted">{steps.find((step) => step.id === activeStep).description}</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
