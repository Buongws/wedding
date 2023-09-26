import Form from "./Form";
import Qr from "../../public/QR.jpg";
function RSVP() {
  return (
    <div id="rsvp" className="section-padding bg-img bg-fixed">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-white p-40 padding-rsvp">
            <span className="oliven-title-meta text-center text-rsvp">
              Sự hiện diện của quý vị
            </span>

            <span className="oliven-title-meta text-center text-rsvp  vinh-hanh ">
              Là niềm vinh hạnh cho gia đình chúng tôi !
            </span>
            <br />
            <span className="oliven-title-meta text-center text-rsvp ">
              Nếu bạn mà ở xa , không thể tham dự được lễ cưới của chúng tôi hãy
              chúc phúc qua :
            </span>
            <div className="oliven-title-meta text-center text-rsvp  modal-center">
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
