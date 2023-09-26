import { useState, useEffect } from "react";

function Header() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time (you can remove this in production)
    setTimeout(() => {
      setIsLoaded(true);
    }, 200); // Adjust the duration as needed
  }, []);

  return (
    <header id="home" className="header valign bg-img parallaxie">
      <div
        className={`col-md-12 text-center caption ${isLoaded ? "loaded" : ""}`}
      >
        <h1
          className={`animate-box ${isLoaded ? "fadeInFromBottom" : ""}`}
          data-animate-effect="fadeInUp"
        >
          Khang & Linh
        </h1>
        <h5
          className={`animate-box ${isLoaded ? "fadeInFromBottom" : ""}`}
          data-animate-effect="fadeInUp"
        >
          Ngày 16. Tháng 10 , 2023 – Phú Xuyên - Hà Nội
        </h5>
        <span className={`heart ${isLoaded ? "fadeInFromBottom" : ""}`}>
          ❤️
        </span>
        <a href="#rsvp" className="noti">
          <span className="tooltip">Ấn đây để gửi lời chúc ❤️ </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-15 h-10 bell fa fa-bell"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;
