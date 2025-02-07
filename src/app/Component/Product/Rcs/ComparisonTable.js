import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

// JSON Data
const tableData = {
  title: "Compare RCS Messaging Options",
  subtitle: "Discover how RCS Messaging outshines traditional SMS for businesses.",
  headers: ["Feature", "SMS", "RCS Messaging"],
  rows: [
    {
      feature: "Rich Media Support",
      sms: {
        icon: "times",
        color: "red",
        text: "Plain text with limited functionality"
      },
      rcs: {
        icon: "check",
        color: "green",
        text: "Share stunning images, videos, and dynamic carousels"
      }
    },
    {
      feature: "Verified Sender",
      sms: {
        icon: "times",
        color: "red",
        text: "No brand identification"
      },
      rcs: {
        icon: "check",
        color: "green",
        text: "Showcase your brand with verified sender IDs and logos"
      }
    },
    {
      feature: "Interactive Messaging",
      sms: {
        icon: "times",
        color: "red",
        text: "Limited to basic replies"
      },
      rcs: {
        icon: "check",
        color: "green",
        text: "Engage customers with quick replies and actionable buttons"
      }
    },
    {
      feature: "Delivery and Read Receipts",
      sms: {
        icon: "times",
        color: "red",
        text: "No tracking available"
      },
      rcs: {
        icon: "check",
        color: "green",
        text: "Track delivery status and message reads in real-time"
      }
    },
    {
      feature: "Two-Way Communication",
      sms: {
        icon: "check",
        color: "green",
        text: "Supports basic replies"
      },
      rcs: {
        icon: "check",
        color: "green",
        text: "Foster real-time conversations with seamless interaction"
      }
    },
    {
      feature: "Custom Branding",
      sms: {
        icon: "times",
        color: "red",
        text: "Lacks personalization"
      },
      rcs: {
        icon: "check",
        color: "green",
        text: "Enhance messages with brand colors, fonts, and styles"
      }
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
    <div className="bg2">
      <div className="container py-5 aos">
        <h2 className="text-center fw-bold mb-3" style={{ color: "#203239" }}>
          {tableData.title}
        </h2>
        <h5
          className="text-center mb-4"
          style={{ color: "#203239", fontWeight: "400" }}
        >
          {tableData.subtitle}
        </h5>
        <div className="table-responsive aos">
          <table
            className="table table-bordered table-striped align-middle"
            data-aos="fade-up"
          >
            <thead data-aos="fade-right" data-aos-duration="2000">
              <tr>
                {tableData.headers.map((header, index) => (
                  <th
                    className="p-3"
                    key={index}
                    style={{
                      backgroundColor: index === 0 ? "#f8f9fa" : "#008060",
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
            <tbody data-aos="fade-left" data-aos-duration="2000">
              {tableData.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="p-3">{row.feature}</td>
                  <td>
                    {getIcon(row.sms.icon, row.sms.color)}
                    {row.sms.text}
                  </td>
                  <td>
                    {getIcon(row.rcs.icon, row.rcs.color)}
                    {row.rcs.text}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ComparisonTable;
