import { useEffect, useState } from "react";

function Bridegroom() {
  // Set the target date for the countdown (15 days from now)
  const endDate = new Date("2023-10-16T13:00:00");

  // Tính toán thời gian còn lại
  const calculateTimeRemaining = () => {
    const now = new Date();
    const timeRemaining = endDate - now;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  // Khởi tạo trạng thái thời gian còn lại
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Cập nhật thời gian còn lại mỗi giây
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Xóa bộ đếm thời gian khi component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="couple"
      className=" p-[60px] bridegroom clear section-padding bg-pink "
    >
      <div className="container-2">
        <div className="row-2 mb-60">{/* ... Your existing code ... */}</div>
        <div className="row-2">
          <div
            className="col-md-12 text-center animate-box"
            data-animate-effect="zoom-out-left"
            data-aos="fade-left"
          >
            <h3 className="oliven-couple-title pb-[50px]">
              Chúng tôi chuẩn bị kết hôn !
            </h3>
            <h4 className="oliven-couple-subtitle">
              OCT 16, 2023 — Phu Xuyen - Ha Noi
            </h4>

            <div className="countdown">
              <div className="countdown-item">
                <span>{timeRemaining.days}</span> Ngày
              </div>
              <div className="countdown-item">
                <span>{timeRemaining.hours}</span> Giờ
              </div>
              <div className="countdown-item">
                <span>{timeRemaining.minutes}</span> Phút
              </div>
              <div className="countdown-item">
                <span>{timeRemaining.seconds}</span> Giây
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bridegroom;
