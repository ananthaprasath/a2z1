"use client"; // Add this at the top

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "./Header"; // Correct import path
import logo from "../Image/logo.png";
import "./Header.css";

const HeaderDrop = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [navClass, setNavClass] = useState(
    isHomePage
      ? "navbar navbar-expand-lg navbar-dark bg-transparent position-fixed w-100"
      : "navbar navbar-expand-lg navbar-dark bg-light shadow w-100 color"
  );

  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const updateNavClass = () => {
      if (window.scrollY > 10) {
        setNavClass("navbar navbar-expand-lg navbar-dark bg-light position-fixed w-100 shadow-sm top-0 color text-dark");
        setIsScrolled(true);
      } else {
        setNavClass(
          isHomePage
            ? "navbar navbar-expand-lg navbar-dark bg-transparent position-fixed w-100"
            : "navbar navbar-expand-lg navbar-dark bg-light shadow w-100 color"
        );
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", updateNavClass);
    return () => window.removeEventListener("scroll", updateNavClass);
  }, [isHomePage]);

  // Close dropdown on navigation
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <Header />
      <header>
        <nav className={navClass} style={{ zIndex: 1000 }}>
          <div className="container w-100">
            {/* Logo */}
            <Link className="navbar-brand" href="/">
              <Image src={logo} alt="logo" height={60} className={isScrolled ? "scrolled-logo" : ""} />
            </Link>

            {/* Navigation */}
            <div className="navbar-nav ms-4">
              <ul className="nav d-flex gap-3">
                {/* Products Dropdown */}
                <li className={`nav-item dropdown ${dropdownOpen ? "show" : ""}`} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                  <a className="nav-link dropdown-toggle fw-bold text-dark" href="#">
                    Products
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="/whatsapp" onClick={closeDropdown}>💬 WhatsApp</Link></li>
                    <li><Link className="dropdown-item" href="/rcssms" onClick={closeDropdown}>📱 RCS Service</Link></li>
                    <li><Link className="dropdown-item" href="/bulksms" onClick={closeDropdown}>✉️ Bulk SMS</Link></li>
                    <li><Link className="dropdown-item" href="/voicecall" onClick={closeDropdown}>📞 Bulk Voice Call</Link></li>
                  </ul>
                </li>

                {/* Solutions Dropdown */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle fw-bold text-dark" href="#" id="solutionsDropdown" role="button">
                    Solutions
                  </a>
                  <div className="dropdown-menu dropdown-large p-3 shadow border-0 rounded" aria-labelledby="solutionsDropdown">
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="list-unstyled">
                          <li><Link className="dropdown-item d-flex align-items-center" href="/realestate" onClick={closeDropdown}>🏠 Real Estate</Link></li>
                          <li><Link className="dropdown-item d-flex align-items-center" href="/travel" onClick={closeDropdown}>🏨 Tours & Travels</Link></li>
                          <li><Link className="dropdown-item d-flex align-items-center" href="/gaming/" onClick={closeDropdown}>🎮 Gaming</Link></li>
                          <li><Link className="dropdown-item d-flex align-items-center" href="/health-care/" onClick={closeDropdown}>🩺 Healthcare</Link></li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="list-unstyled">
                          <li><Link className="dropdown-item d-flex align-items-center" href="/food/" onClick={closeDropdown}>🍔 Food & Beverage</Link></li>
                          <li><Link className="dropdown-item d-flex align-items-center" href="/retail/" onClick={closeDropdown}>🛍️ Retail and eCommerce</Link></li>
                          <li><Link className="dropdown-item d-flex align-items-center" href="/media/" onClick={closeDropdown}>🎥 Media & Entertainment</Link></li>
                          <li><Link className="dropdown-item d-flex align-items-center" href="/government/" onClick={closeDropdown}>🏛️ Government</Link></li>
                          <li><Link className="dropdown-item d-flex align-items-center" href="/education/" onClick={closeDropdown}>📚 Education</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Resources Dropdown */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle fw-bold text-dark" href="#">
                    Resources
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="/service" onClick={closeDropdown}>🛠️ Service</Link></li>
                    <li><Link className="dropdown-item" href="/faq" onClick={closeDropdown}>❓ FAQ</Link></li>
                    <li><Link className="dropdown-item" href="/blogs/" onClick={closeDropdown}>📰 Blog</Link></li>
                  </ul>
                </li>

                {/* Company Dropdown */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle fw-bold text-dark" href="#">
                    Company
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="/about/" onClick={closeDropdown}>🏢 About Us</Link></li>
                    <li><Link className="dropdown-item" href="/contact/" onClick={closeDropdown}>📞 Contact</Link></li>
                    <li><Link className="dropdown-item" href="/career/" onClick={closeDropdown}>💼 Career</Link></li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="d-flex gap-3 ms-auto">
              <Link href="/tryforfree">
                <button className="btn btn-primary px-4 fw-bold">Try For Free</button>
              </Link>
              <Link href="/requestdemo">
                <button className="btn btn-outline-primary px-4 fw-bold">Request Demo</button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderDrop;
