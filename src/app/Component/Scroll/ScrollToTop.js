'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Use this import for App Router
import { FaArrowUp } from 'react-icons/fa';
import './Anime.css';

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const router = useRouter(); // Get the router from next/navigation

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Show scroll-to-top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top whenever the route changes
  useEffect(() => {
    scrollToTop();
  }, [router.asPath]); // Trigger on route change (router.asPath)

  return (
    <>
      {showScrollTop && (
        <div className="bounce-in-top button-bottom" onClick={scrollToTop}>
          <FaArrowUp size={20} />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
