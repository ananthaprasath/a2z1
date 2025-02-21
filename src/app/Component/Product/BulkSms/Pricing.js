"use client";

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "./pricing.css";

const PricingTabs = () => {
  const [activeTab, setActiveTab] = useState("promotional");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const pricingData = {
    promotional: [
        {
            package: "Silver Package",
            sms: "10,000 SMS",
            originalPrice: "₹5000",
            discount: "50%",
            finalPrice: "₹3000",
            color: "primary",
            features: [
              "100% Delivery",
              "DND Refund",
              "API Available",
              "Lifetime Validity",
              "Fast DLT Registration",
            ],
            animation: "zoom-in-right",
    
          },
        {
            package: "Gold Package",
            sms: "25,000 SMS",
            originalPrice: "₹7500",
            discount: "50%",
            finalPrice: "₹5000",
            color: "primary",
            features: [
              "100% Delivery",
              "DND Refund",
              "API Available",
              "Lifetime Validity",
              "Priority Support",
            ],
            animation: "zoom-in",
    
          },
          {
            package: "Diamond Package",
            sms: "50,000 SMS",
            originalPrice: "₹10,500",
            discount: "50%",
            finalPrice: "₹7000",
            color: "primary",
            features: [
              "100% Delivery",
              "DND Refund",
              "API Available",
              "Lifetime Validity",
              "Advanced Analytics",
            ],
            animation: "zoom-in",
    
          },
          {
            package: "Platinum Package",
            sms: "100,000 SMS",
            originalPrice: "₹21,000",
            discount: "50%",
            finalPrice: "₹14,000",
            color: "primary",
            features: [
              "100% Delivery",
              "DND Refund",
              "API Available",
              "Lifetime Validity",
              "Dedicated Manager",
            ],
            animation: "zoom-in-left",
    
          },
        ],
        transactional: [
            {
              package: "Silver Package",
              sms: "10,000 SMS",
              originalPrice: "₹5250",
              discount: "50%",
              finalPrice: "₹3500",
              color: "primary",
              features: [
                "100% Delivery",
                "Less than 5 Sec Delivery",
                "API Available",
                "Lifetime Validity",
                "Fast DLT Registration",
              ],
            animation: "zoom-in-rigt",
    
            },
            {
              package: "Gold Package",
              sms: "25,000 SMS",
              originalPrice: "₹9000",
              discount: "50%",
              finalPrice: "₹6000",
              color: "primary",
              features: [
                "100% Delivery",
                "Less than 5 Sec Delivery",
                "API Available",
                "Lifetime Validity",
                "Fast DLT Registration",
              ],
            animation: "zoom-in",
    
            },
            {
              package: "Diamond Package",
              sms: "50,000 SMS",
              originalPrice: "₹12000",
              discount: "50%",
              finalPrice: "₹8000",
              color: "primary",
              features: [
                "100% Delivery",
                "Less than 5 Sec Delivery",
                "API Available",
                "Lifetime Validity",
                "Fast DLT Registration",
              ],
            animation: "zoom-in",
    
            },
            {
              package: "Platinum Package",
              sms: "100,000 SMS",
              originalPrice: "₹21000",
              discount: "50%",
              finalPrice: "₹14000",
              color: "primary",
              features: [
                "100% Delivery",
                "Less than 5 Sec Delivery",
                "API Available",
                "Lifetime Validity",
                "Fast DLT Registration",
              ],
            animation: "zoom-in-left",
    
            },
          ],
          otp: [
            {
              package: "Silver Package",
              sms: "10,000 SMS",
              originalPrice: "₹5250",
              discount: "50%",
              finalPrice: "₹3500",
              color: "primary",
              features: [
                "100% Delivery",
                "Less than 3 Sec Delivery",
                "API Available",
                "Lifetime Validity",
                "Fast DLT Registration",
              ],
              animation: "zoom-in-right",
            },
            {
              package: "Gold Package",
              sms: "25,000 SMS",
              originalPrice: "₹9750",
              discount: "50%",
              finalPrice: "₹6500",
              color: "primary",
              features: [
                "100% Delivery",
                "Less than 3 Sec Delivery",
                "API Available",
                "Lifetime Validity",
                "Fast DLT Registration",
              ],
              animation: "flip-right",
            },
            {
              package: "Diamond Package",
              sms: "50,000 SMS",
              originalPrice: "₹12,750",
              discount: "50%",
              finalPrice: "₹8500",
              color: "primary",
              features: [
                "100% Delivery",
                "Less than 3 Sec Delivery",
                "API Available",
                "Lifetime Validity",
                "Fast DLT Registration",
              ],
              animation: "flip-right",
            },
            {
              package: "Platinum Package",
              sms: "100,000 SMS",
              originalPrice: "₹22,500",
              discount: "50%",
              finalPrice: "₹15,000",
              color: "primary",
              features: [
                "100% Delivery",
                "Less than 3 Sec Delivery",
                "API Available",
                "Lifetime Validity",
                "Fast DLT Registration",
              ],
              animation: "zoom-in-left",
            },
          ],
        };

  return (
    <div className="py-5 bg2">
      <h2 className="text-center text-dark py-2 head1">Choose Awesome Plan for Your Needs</h2>

      {/* Tab Buttons */}
      <div className="tabs-container text-center mb-5 w-50 mx-auto rounded-5 bg-light py-2 shadow">
        <button className={`btn tab-btn ${activeTab === "promotional" ? "active-tab" : ""}`} onClick={() => handleTabClick("promotional")}>
          Promotional SMS
        </button>
        <button className={`btn tab-btn ${activeTab === "transactional" ? "active-tab" : ""}`} onClick={() => handleTabClick("transactional")}>
          Transactional SMS
        </button>
        <button className={`btn tab-btn ${activeTab === "otp" ? "active-tab" : ""}`} onClick={() => handleTabClick("otp")}>
          OTP SMS
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="container">
        <div className="row justify-content-between">
          {pricingData[activeTab]?.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" data-aos={item.animation} key={index}>
              <div className="card shadow border-0">
                <div className={`card-header bg-${item.color} text-white text-center`} style={{ fontWeight: "bold" }}>
                  {item.package}
                </div>
                <div className="card-body text-center">
                  <h4 className="text-primary">{item.sms}</h4>
                  <p className="text-muted">
                    <s>{item.originalPrice}</s> <span className="badge bg-light text-primary">SAVE {item.discount}</span>
                  </p>
                  <h4 className="fw-bold">{item.finalPrice}</h4>
                  <hr />
                  <ul className="list-unstyled">
                    {item.features.map((feature, i) => (
                      <li key={i} className="mb-2 d-flex justify-content-between align-items-center para-color2">
                        <span className="d-flex align-items-center">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                          {feature}
                        </span>
                        <FontAwesomeIcon icon={faQuestionCircle} className="text-muted" style={{ fontSize: "0.9rem" }} />
                      </li>
                    ))}
                  </ul>
                  <button className={`btn btn-${item.color} text-white fw-bold w-100 mt-3`} style={{ borderRadius: "20px" }}>
                    Buy Now <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTabs;
