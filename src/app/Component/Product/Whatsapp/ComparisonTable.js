import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";


// JSON Data
const tableData = {
  title: "Compare WhatsApp Business Options",
  subtitle: "Understand the benefits of WhatsApp Business App vs API for scaling your business.",
  headers: ["Feature", "WhatsApp Business App", "WhatsApp Business API"],
  rows: [
    {
      feature: "Message Automation",
      app: { icon: "times", color: "red", text: "Limited to auto-replies only" },
      api: { icon: "check", color: "green", text: "Automate workflows with custom triggers and templates" }
    },
    {
      feature: "Scalability",
      app: { icon: "times", color: "red", text: "Restricted to 256 contacts per group" },
      api: { icon: "check", color: "green", text: "Unlimited outreach with bulk messaging" }
    },
    {
      feature: "Multi-User Support",
      app: { icon: "times", color: "red", text: "Single-device access only" },
      api: { icon: "check", color: "green", text: "Allow multiple agents to manage conversations simultaneously" }
    },
    {
      feature: "Integrations",
      app: { icon: "times", color: "red", text: "No third-party integrations supported" },
      api: { icon: "check", color: "green", text: "Integrates with CRM, ERP, and marketing tools" }
    },
    {
      feature: "Performance Insights",
      app: { icon: "times", color: "red", text: "No analytics available" },
      api: { icon: "check", color: "green", text: "Track delivery, open rates, and agent performance" }
    },
    {
      feature: "Customization",
      app: { icon: "times", color: "red", text: "Basic templates only" },
      api: { icon: "check", color: "green", text: "Personalized messages with dynamic fields" }
    }
  ]
};

// Component
const ComparisonTable = () => {
  const getIcon = (icon, color) => {
    const iconMap = {
      check: faCheckCircle,
      times: faTimesCircle
    };

    return (
      <FontAwesomeIcon
        icon={iconMap[icon]}
        className="me-2"
        style={{ color, fontSize: "1.4rem", width: "20px", height: "20px" }}
      />
    );
  };

  return (
    <>
      {/* Comparison Table Section */}
      <div className="comparison-table" style={{ backgroundColor: "#f1f5f9", padding: "50px 0" }}>
        <div className="container py-5">
          <h2 className="text-center fw-bold mb-3" style={{ color: "#203239" }}>
            {tableData.title}
          </h2>
          <h4 className="text-center mb-4" style={{ color: "#203239", fontWeight: "400" }}>
            {tableData.subtitle}
          </h4>
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle">
              <thead>
                <tr>
                  {tableData.headers.map((header, index) => (
                    <th
                      className="p-3"
                      key={index}
                      style={{
                        backgroundColor: index === 0 ? "#f8f9fa" : "#008060", // Dark green for header
                        color: index === 0 ? "#000000" : "#ffffff",
                        fontWeight: "600",
                        fontSize: "1rem"
                      }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="p-3">{row.feature}</td>
                    <td>
                      {getIcon(row.app.icon, row.app.color)}
                      {row.app.text}
                    </td>
                    <td>
                      {getIcon(row.api.icon, row.api.color)}
                      {row.api.text}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* API Template Section */}
      <div className="bg-light">
        <div className="container pt-5">
          <div className="row">
            <div className="col-12">
              <img className="img-fluid" src="/image/product/Whatsapp2.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparisonTable;
