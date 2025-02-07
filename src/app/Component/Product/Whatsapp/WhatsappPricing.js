import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Pricing.css';
const Pricing = () => {
  const pricingData = [
    {
      package: "Lite Plans (Broadcast Oriented)",
      description:
        "Perfect for businesses looking to broadcast updates, promotions, and announcements to their customers.",
      plans: [
        { calls: "2,500 conversations", price: "₹179/month" },
        { calls: "5,000 conversations", price: "₹419/month" },
        { calls: "10,000 conversations", price: "₹779/month" },
        { calls: "25,000 conversations", price: "₹1,199/month" },
        { calls: "100,000 conversations", price: "₹1,799/month" },
        { calls: "Unlimited conversations", price: "₹4,799/month" },
      ],
      color: "success",
      anime: "zoom-in-right",
    },
    {
      package: "Pro Plans (Feature Oriented)",
      description:
        "Elevate your communication strategy with powerful tools that transform customer interactions into meaningful connections.",
      plans: [
        { calls: "1,250 conversations", price: "₹359/month" },
        { calls: "2,500 conversations", price: "₹839/month" },
        { calls: "5,000 conversations", price: "₹1,559/month" },
        { calls: "12,500 conversations", price: "₹2,399/month" },
        { calls: "50,000 conversations", price: "₹3,599/month" },
        { calls: "Unlimited conversations", price: "₹7,199/month" },
      ],
      color: "success",
      anime: "zoom-in-left",
    },
    {
      package: "Add-On Conversations",
      description: "Need More Conversations as You Grow?",
      plans: [
        { calls: "1,000 conversations (₹0.1188/conversation)", price: "₹119" },
        { calls: "5,000 conversations (₹0.08376/conversation)", price: "₹419" },
        {
          calls: "10,000 conversations (₹0.06588/conversation)",
          price: "₹659",
        },
        {
          calls: "25,000 conversations (₹0.047952/conversation)",
          price: "₹1,199",
        },
        {
          calls: "100,000 conversations (₹0.017988/conversation)",
          price: "₹1,799",
        },
      ],
      color: "success",
      anime: "zoom-in",
    },
  ];

  return (
    <div className="py-5" style={{ backgroundColor: "#f1f5f9" }}>
      <div className="container pt-2">
        <h2 className="text-center py-3 head1" style={{ color: "#203239", fontWeight: "600" }}>
          Unlock the Power of WhatsApp Business API for Your Business
        </h2>
        <p className="text-center para-blog" style={{ color: "#555" }}>
          Boost your customer engagement with personalized and efficient communication. Whether you're sending broadcasts, handling customer inquiries, or promoting your services, the WhatsApp Business API is the perfect solution for growing your business.
        </p>

        <h3 className="text-center head1 py-4" style={{ color: "#008060", fontWeight: "700" }}>
          Our Pricing Plans
        </h3>
        <p className="text-center mb-5 para-blog" style={{ color: "#555" }}>
          Choose a plan that fits your business needs, whether you're starting small or managing high-volume conversations.
        </p>

        <div className="row justify-content-center aos">
          {pricingData.map((category, index) => (
            <div className="col-md-4 mb-5 para-color1" key={index}>
              <div className="card shadow border-0">
                <div className={`card-header bg-${category.color} text-white text-center`}>
                  {category.package}
                </div>
                <div className="card-body" style={{ backgroundColor: "#ffffff" }}>
                  <p className="text-center mb-3 text-muted">{category.description}</p>
                  {category.plans.map((item, i) => (
                    <div
                      className="d-flex justify-content-between align-items-center mb-3"
                      data-aos={category.anime}
                      key={i}
                    >
                      <div>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-success me-2"
                          style={{ width: '20px', height: '20px' }}
                          aria-label="Check Circle"
                        />
                        <span>{item.calls}</span>
                      </div>
                      <div>
                        <span className="text-muted">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
