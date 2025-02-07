import React from "react";

const featuresData = {
  title: "WhatsApp API Features",
  features: [
    {
      id: 1,
      title: "Effortless API Integration",
      description:
        "Integrate WhatsApp API seamlessly into your existing systems like CRM and customer support platforms. It ensures fast deployment and minimizes technical effort. With built-in support for major software tools, you can synchronize customer data and enhance workflow efficiency instantly. Integration is designed to reduce downtime, ensuring businesses can focus on scaling operations.",
      icon: "/image/feature-icon/safe-icon.png",
    },
    {
      id: 2,
      title: "24/7 Automated Responses",
      description:
       "Leverage chatbots to manage customer queries automatically, ensuring uninterrupted communication even outside business hours. Chatbots can handle frequently asked questions, freeing up your team to focus on complex issues. They improve response time and ensure consistent communication, resulting in better customer satisfaction and higher retention rates.",
      icon: "/image/feature-icon/support-icon.png",
    },
    {
      id: 3,
      title: "Real-Time Notifications",
      description:
      "Send real-time alerts, reminders, and updates to customers instantly. Perfect for order confirmations, appointment reminders, and payment updates. WhatsApp’s reliable infrastructure ensures your messages are delivered instantly, even during high-traffic periods. Real-time notifications keep customers informed, improving transparency and reducing missed engagements.",
      icon: "/image/feature-icon/security.png",
    },
    {
      id: 4,
      title: "End-to-End Encryption",
      description:
      "Ensure secure communication with end-to-end encryption, protecting your customers' data and maintaining compliance with global privacy standards. WhatsApp’s encryption protocols safeguard sensitive information, making it ideal for industries like banking, healthcare, and e-commerce. Security is a priority, so businesses and customers can communicate with peace of mind.",
      icon: "/image/feature-icon/icon-8.png",
    },
  ],
};

const Features = () => {
  const { title, features } = featuresData;

  return (
    <div className="">
      <div className="container py-5 aos">
        <h2 className="text-center mb-4 head1" style={{ color: "#203239" }}>
          {title}
        </h2>
        <div className="row">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="col-md-12 mb-4 shadow bg2"
              data-aos={index % 2 === 0 ? "zoom-in-right" : "zoom-in-left"}
              data-aos-duration="2000"
              style={{
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <div className="d-flex align-items-start">
                <img
                  src={feature.icon}
                  alt="new"
                  width="50" // Adjust width as needed
                  height="50" // Adjust height as needed
                  className="me-3"
                />
                <div>
                  <h5 className="fw-bold mb-2" style={{ color: "#203239" }}>
                    {feature.title}
                  </h5>
                  <p className="text-muted para-color">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
