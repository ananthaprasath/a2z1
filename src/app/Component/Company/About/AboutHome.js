import React from "react";
// import Industries from "../../Product/BulkSms/Industries";
// import Reviews from "../../Product/BulkSms/Reviews";2
import SocialMedia from "../../Product/Whatsapp/SocialMedia";
import Client from "../../Product/Whatsapp/Clients";
// import Testimonials from "../Carrer/Testimonials";

const AboutHome = () => {
  return (
    <div>
     

      {/* Who We Are */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">Who We Are</h2>
        <div className="row aos para-color align">
          <div className="col-md-6" data-aos='zoom-in-right'>
            <p>
              At A2ZSMS, we are a trailblazing SMS solutions provider committed
              to bridging the communication gap for businesses across
              industries. With a focus on delivering reliable, efficient, and
              scalable messaging solutions, we empower companies to connect with
              their customers like never before.
            </p>
            <p>
              Founded with the vision to redefine communication standards, we
              specialize in bulk SMS services, transactional SMS, promotional
              SMS, OTP services, and more. Over the years, we have built a
              strong reputation for our innovative approach, customer-centric
              solutions, and an unwavering commitment to excellence.
            </p>
            <p>
              Our team of experts, equipped with decades of experience, works
              passionately to design strategies that meet the unique needs of
              every client. Whether you're a budding startup or a global
              enterprise, A2ZSMS provides you with the tools and expertise to
              communicate effectively, ensuring your success in today’s
              competitive landscape.
            </p>
          </div>
          <div className="col-md-6" data-aos='zoom-in-left'>
            <img
              src="/image/about-choose.jpeg"
              alt="Who We Are" width="px" height={"px"}
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
      <Client/>


      {/* Our Journey */}

      {/* Mission & Vision */}
     <div className="bg-light para-color">
         <div className="container py-5">
           <h2 className="text-center fw-bold mb-4">Our Mission & Vision</h2>
        
           {/* Mission */}
           <div className="row align-items-center mb-5 aos align">
             <div className="col-md-6" data-aos='fade-right'>
               <h4 className="fw-bold">Our Mission</h4>
               <p>
                 Our mission at <strong>A2ZSMS</strong> is to empower businesses to
                 communicate effortlessly and efficiently. We aim to provide
                 <strong> state-of-the-art SMS solutions</strong> that drive
                 engagement, enhance customer experiences, and simplify operations.
               </p>
               <p>
                 Through our innovative services, we strive to enable businesses of
                 all sizes to:
               </p>
               <ul>
                 <li>Build stronger customer relationships.</li>
                 <li>Reach wider audiences with impactful messaging.</li>
                 <li>Streamline internal and external communication processes.</li>
               </ul>
               <p>
                 We are dedicated to staying ahead of industry trends, adopting
                 cutting-edge technology, and delivering value-driven solutions
                 that ensure our clients' continued growth and success.
               </p>
             </div>
             <div className="col-md-6" data-aos='fade-left'>
               <img
                 src="/image/api.jpg"
                 alt="Our Mission" width="px" height={"px"}
                 className="img-fluid rounded shadow"
               />
             </div>
           </div>
           </div>
           </div>
           <div className=" bg-light">
             {/* <Testimonials/> */}
           </div>
           {/* Vision */}
           <div className="bg-light py-5 para-color" >
            <div className="container">
           <div className="row align-items-center py-2 mt-5 aos align">
             <div className="col-md-6 order-md-2" data-aos='fade-left'>
               <h4 className="fw-bold">Our Vision</h4>
               <p>
                 Our vision is to become a{" "}
                 <strong>global leader in SMS communication solutions</strong>,
                 recognized for our innovation, reliability, and customer-first
                 approach. We aspire to:
               </p>
               <ul>
                 <li>
                   Revolutionize how businesses communicate with their customers
                   through SMS technology.
                 </li>
                 <li>
                   Foster a world where seamless and secure communication is
                   accessible to every business.
                 </li>
                 <li>
                   Continuously innovate to provide solutions that are not just
                   efficient but also sustainable and scalable.
                 </li>
               </ul>
               <p>
                 We envision a future where <strong>A2ZSMS</strong> is synonymous
                 with <strong>excellence in communication</strong>, enabling
                 businesses to thrive in a connected world while maintaining a
                 strong commitment to integrity and trust.
               </p>
             </div>
             <div className="col-md-6 order-md-1" data-aos='fade-right'>
               <img
                 src="/image/Vission.jpg"
                 alt="Our Vision" width="px" height={"px"}
                 className="img-fluid rounded shadow"
               />
             </div>
           </div>
         </div>
     </div>
     {/* <Industries/> */}

     <SocialMedia/>
     

      {/* Call-to-Action */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h3 className="fw-bold mb-4">Join Us in Our Mission</h3>
          <p className="mb-4">
            Want to collaborate or learn more? Let’s create something amazing
            together.
          </p>
          <button className="btn btn-primary btn-lg">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
