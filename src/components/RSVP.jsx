import Form from "./Form";
import Qr from "../../public/QR.jpg";
function RSVP() {
  return (
    <div id="rsvp" className="section-padding bg-img bg-fixed">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-white p-40">
            <span className="oliven-title-meta text-center">
              Sự hiện diện của quý vị
            </span>
            <h2 className="oliven-title text-center">
              Là niềm vinh hạnh cho gia đình chúng tôi !
            </h2>
            <br />
            <span className="oliven-title-meta text-center">
              Nếu bạn mà ở xa , không thể tham dự được lễ cưới của chúng tôi hãy
              chúc phúc
            </span>
            <div className="oliven-title-meta text-center modal-center">
              <div className="modal">
                <div className="modal-content">
                  <Form />
                  <img src={Qr} alt="QR" className="qrCode" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RSVP;
