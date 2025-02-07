import React from "react";

const RcsMessagingSection = () => {
  return (
   <div>
     <div className="bg2 py-5">
       <div className="container">
         <h2 className="text-center fw-bold mb-5" style={{ color: "#203239" }}>
           Our RCS Messaging Templates
         </h2>
         
     
         <div className="row align-items-center mb-5 aos">
           <div className="col-md-6 para-color1 fw-bold" data-aos="fade-right">
             <h3 className="fw-bold" style={{ color: "#203239" }}>
               Why Choose RCS Messaging?
             </h3>
             <p className="text-muted ">
               Replace SMS and MMS texting with feature-rich RCS messaging to send and receive high-resolution images, videos, and interactive content. Enhance your communication and improve customer engagement with RCS messaging's advanced capabilities.
             </p>
             <ul>
               <li>Verified Sender with branding</li>
               <li>Customizable quick replies and actions</li>
               <li>Rich media support (images, videos, carousels)</li>
               <li>Real-time tracking and analytics</li>
             </ul>
       
           </div>
           <div className="col-md-6 text-center" data-aos="fade-left">
              <img
              className="img-fluid rounded"
              src="/image/product/RCS2.png"
              alt="Image"
            />
           </div>
         </div>
    
         <div className="row align-items-center aos">
           <div className="col-md-6 text-center" data-aos="fade-right">
           <img
              className="img-fluid rounded"
              src="/image/product/RCS3.png"
              alt="Image"
            />
           </div>
           <div className="col-md-6 para-color1 fw-bold" data-aos="fade-left">
             <h3 className="fw-bold" style={{ color: "#203239" }}>
               RCS Messaging Features
             </h3>
             <p className="text-muted">
               Engage customers like never before with RCS Messaging. Deliver interactive and dynamic messages to provide a premium user experience and boost conversions.
             </p>
             <ul>
               <li>Instant delivery of rich media messages</li>
               <li>Highly secure and encrypted communication</li>
               <li>Personalized messages for each customer</li>
               <li>Improved customer satisfaction and loyalty</li>
             </ul>
           </div>
         </div>
       </div>
     </div>
   </div>
  );
};

export default RcsMessagingSection;
