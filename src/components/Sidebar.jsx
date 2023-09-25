import { useState } from "react";
import Logo from "../assets/images/logo.png";
function Sidebar() {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle("slide");
  };

  return (
    <>
      <a
        href="/"
        onClick={openMenu}
        className={`js-oliven-nav-toggle oliven-nav-toggle${
          show ? " active" : ""
        }`}
      >
        <i></i>
      </a>
      <aside id="oliven-aside">
        <div className="oliven-logo">
          <a href="/">
            <img src={Logo} alt="" />
            <span>
              Trọng Khang <small>&</small> Thùy Linh
            </span>
            <h6>16.10.2023</h6>
          </a>
        </div>
        <nav className="oliven-main-menu">
          <ul>
            <li>
              <a href="#home">Trang chủ</a>
            </li>
            <li>
              <a href="#couple">Cặp đôi</a>
            </li>
            <li>
              <a href="#story">Câu chuyện </a>
            </li>

            <li>
              <a href="#gallery">Album</a>
            </li>

            <li>
              <a href="#rsvp">Lời chúc</a>
            </li>
          </ul>
        </nav>
        <div className="footer1">
          {" "}
          <span className="separator"></span>
          <p>
            Khang & Linh
            <br />
            16 October 2023, Ha Noi
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
