import Link from 'next/link';
import Image from 'next/image';
import './Home.css';

const Video = () => {
  return (
    <div className="videoContainer">
      <div className="videoWrapper">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="videoBackground"
        >
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="videoOverlay"></div>

      <div className="container">
        <div className="videoContent">
          <h1 className="fw-bold text-white">
            Boost Your Business Revenue by{' '}
            <span className="highlight">
              5X with WhatsApp Marketing
            </span>
          </h1>
          <p className="description fw-bold">
            Unlock the full potential of WhatsApp to connect with your audience
            in real-time. Deliver personalized promotions, build stronger
            customer relationships, and drive unmatched engagement rates.
            Transform your marketing strategy with a platform that guarantees
            results.
          </p>
          <div className="actionButtons">
            <Link href="/whatsapp-api">
              <button className="btn btn-outline-light px-4 me-2 mb-2">
                Learn More
              </button>
            </Link>
            <Link href="/try-for-free">
              <button className="btn btn-primary px-4 ms-2">
                Set Up Discovery Call
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='container'>
       <div className=" bottom-logos text-center mt-5">
        <h3 className='text-white fw-bold'>Out TrustedBrands</h3>
         <div className="dflex mb-4 " style={{justifyContent:'space-around'}}>
         <img className="m-2  logo-img" src="/image/motherhood.png" alt="Background Image"/>
         <img className="m-2  logo-img" src="/image/isk.png" alt="Background Image"/>
         <img className="m-2  logo-img" src="/image/ping4sms-client1.webp" alt="Background Image"/>
         <img className="m-2  logo-img" src="/image/ping4sms-client5.webp" alt="Background Image"/>
         </div>
       </div>
   </div>
    </div>
  );
};

export default Video;
