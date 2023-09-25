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
      </div>
    </header>
  );
}

export default Header;
