import Logo from "../assets/images/logo.png";
function Footer() {
  return (
    <div className="footer2">
      <div className="oliven-narrow-content">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>
              <a href="/">
                <img src={Logo} alt="" />
                <span className=" ">
                  Trọng Khang <small></small> <br />
                  Thùy Linh
                </span>
              </a>
            </h2>
            <p className="copyright">October 16, 2023 – Phú Xuyên, Hà Nội</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
