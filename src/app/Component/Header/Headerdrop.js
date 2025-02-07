import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import "./Header.css";
import logo from "../Image/logo.png";

const HeaderDrop = () => {
  return (
    <>
      <Header />
      <header className="sticky-top bg-white shadow-sm">
        <nav className="navbar navbar-expand-lg">
          <div className="container d-flex justify-content-between align-items-center">
            {/* Logo */}
            <Link href="/" className="navbar-brand">
              <Image src={logo} alt="Logo" width={85} height={60} />
            </Link>

            {/* Navigation */}
            <div className="navbar-nav">
              <ul className="nav">
                {/* Products Dropdown */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle fw-bold text-dark" href="#">
                    Products
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="/whatsapp">💬 WhatsApp</Link></li>
                    <li><Link className="dropdown-item" href="/rcssms">📱 RCS Service</Link></li>
                    <li><Link className="dropdown-item" href="/bulk-sms/">✉️ Bulk SMS</Link></li>
                    <li><Link className="dropdown-item" href="/voice-call/">📞 Bulk Voice Call</Link></li>
                  </ul>
                </li>

                {/* Resources Dropdown */}
                <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle fw-bold text-dark" href="#">
    Solutions
  </a>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" href="/real-estate/">🏠 Real Estate</Link></li>
    <li><Link className="dropdown-item" href="/tours-travel/">🏨 Tours & Travels</Link></li>
    <li><Link className="dropdown-item" href="/gaming/">🎮 Gaming</Link></li>
    <li><Link className="dropdown-item" href="/health-care/">🩺 Healthcare</Link></li>
    <li><Link className="dropdown-item" href="/food-beverage/">🍔 Food & Beverage</Link></li>
    <li><Link className="dropdown-item" href="/retail-ecommerce/">🛍️ Retail and eCommerce</Link></li>
    <li><Link className="dropdown-item" href="/media-entertainment/">🎥 Media & Entertainment</Link></li>
    <li><Link className="dropdown-item" href="/government/">🏛️ Government</Link></li>
    <li><Link className="dropdown-item" href="/education/">📚 Education</Link></li>
  </ul>
</li>


                {/* Solutions Dropdown */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle fw-bold text-dark" href="#">
                  Resources
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="/services/">🛠️ Service</Link></li>
                    <li><Link className="dropdown-item" href="/faq/">❓ FAQ</Link></li>
                    <li><Link className="dropdown-item" href="/blogs/">📰 Blog</Link></li>
                  </ul>
                 
                </li>

                {/* Company Dropdown */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle fw-bold text-dark" href="#">
                    Company
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="/about/">🏢 About Us</Link></li>
                    <li><Link className="dropdown-item" href="/contact/">📞 Contact</Link></li>
                    <li><Link className="dropdown-item" href="/career/">💼 Career</Link></li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="d-flex gap-3">
              <Link href="/try-for-free/">
                <button className="btn btn-primary px-4 fw-bold">
                  Try For Free
                </button>
              </Link>
              <Link href="/request-demo/">
                <button className="btn btn-outline-primary px-4 fw-bold">
                  Request Demo
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderDrop;
