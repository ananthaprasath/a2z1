import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Details = () => {
  return (
   <div className="bg-light">
     <div className="container py-5 ">
       <div className="row para-color1 aos">
         {/* Content Section */}
         <div className="col-md-12" data-aos='zoom-in'>
           <h2 className="fw-bold mb-4 text-center">
             Bulk Voice Call
           </h2>
           <p className="text-muted ">
             India Bulk SMS offers a highly intuitive interface for sending mass
             voice calls at sensible rates. Bulk voice calls provide businesses
             with an efficient and reliable way to communicate with clients,
             customers, or groups. These calls help you upgrade your communication
             strategy by reaching a wider audience in no time. Whether it's for
             promotional campaigns, customer reminders, or notifications, bulk
             voice calls streamline communication.
           </p>
           <p className="text-muted ">
             In any industry, mass voice calls can significantly reduce operational
             costs while maximizing reach and efficiency. These services ensure
             clear and direct communication, making them an ideal solution for
             businesses of all sizes.
           </p>
    
           <ul className="list-unstyled mt-4">
             <li className="mb-3 d-flex align-items-start">
               <FontAwesomeIcon
                 icon={faCheckCircle}
                 className="text-primary mt-2 me-3"
                 
               />
               <span className="mb-2">Delivery on DND numbers.</span>
             </li>
             <li className="mb-3 d-flex align-items-start">
               <FontAwesomeIcon
                 icon={faCheckCircle}
                 className="text-primary mt-2 me-3"
                 
               />
               <span className="mb-2">18% GST Extra.</span>
             </li>
             <li className="mb-3 d-flex align-items-start">
               <FontAwesomeIcon
                 icon={faCheckCircle}
                 className="text-primary mt-2 me-3"
                 
               />
               <span className="mb-2">Can be sent between 7 AM and 9 PM.</span>
             </li>
             <li className="mb-3 d-flex align-items-start">
               <FontAwesomeIcon
                 icon={faCheckCircle}
                 className="text-primary mt-2 me-3"
                 
               />
               <span className="mb-2">Instant delivery report.</span>
             </li>
             <li className="mb-3 d-flex align-items-start">
               <FontAwesomeIcon
                 icon={faCheckCircle}
                 className="text-primary mt-2 me-3"
                 
               />
               <span className="mb-2">Sender ID can be your mobile number.</span>
             </li>
             <li className="mb-3 d-flex align-items-start">
               <FontAwesomeIcon
                 icon={faCheckCircle}
                 className="text-primary mt-2 me-3"
                 
               />
               <span className="mb-2">100% advance payment.</span>
             </li>
             <li className="mb-3 d-flex align-items-start">
               <FontAwesomeIcon
                 icon={faCheckCircle}
                 className="text-primary mt-2 me-3"
                 
               />
               <span className="mb-2">No validity for any Voice SMS pack.</span>
             </li>
           </ul>
          
         </div>
       </div>
     </div>
   </div>
  );
};

export default Details;
