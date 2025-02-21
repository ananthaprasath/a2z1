import React from "react";
import "./solution.css";

const Timeline = ({ data }) => {
  return (
    <div className="bg2">
      <h2 className="py-5 text-center fw-bold">{data.title}</h2>
      <div id="timeline-container" className="aos">
        {data.items.map((item, index) => (
          <div key={item.id || index} id="timeline" data-aos="zoom-in">
            <div
              data-aos={item.anime}
              id={`timeline-item-${index % 2 === 0 ? "left" : "right"}`}
              className={`timeline-container ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <div
                id="timeline-content"
                className={`content bg1 para-color ${item.para ? "some-class" : ""}`}
              >
                <h3 id="step-title" className="iconcolor">
                  <i
                    className={`bi ${item.icon} iconcolor me-2`}
                    style={{ fontSize: "24px" }}
                  ></i>
                  {item.stepTitle}
                </h3>
                <h4 id="timeline-title">{item.title}</h4>
                <p id="timeline-description">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
