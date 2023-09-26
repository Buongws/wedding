import storyImage from "../../public/TL_04091.jpg";
function Story() {
  return (
    <div
      id="story"
      className="  p-[60px] story section-padding overflow-hidden"
    >
      <div className="story-flex">
        <div className="row flex justify-between story-flex">
          <div data-aos="fade-right" className="col-md-5 mb-30 mr-[20px]">
            <div className="story-img animate-box">
              <div className="img w-50%">
                <img src={storyImage} className="img-fluid " alt="" />
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="col-md-7 animate-box alo-alo">
            <h4 className="oliven-story-subtitle">Our love.</h4>
            <h3 className="oliven-story-title">Our Story</h3>
            <p>
              Tình yêu của tôi và Linh là một câu chuyện đẹp và ý nghĩa. Chúng
              tôi gặp nhau cách đây một năm, trong một thế giới nhiễu động và
              vội vã. Tôi vẫn nhớ lúc đó, ánh mắt đầu tiên của chúng tôi gặp
              nhau, khi mọi thứ xung quanh trở nên mờ nhạt và chỉ còn lại chúng
              tôi hai.
            </p>
            <p>
              Từ cái ngày đó, chúng tôi đã dành cho nhau tất cả tình cảm, sự
              quan tâm và hy vọng. Cuộc sống của chúng tôi trở nên đầy đủ hơn
              với sự hiện diện của người kia. Chúng tôi đã trải qua bao kỷ niệm,
              thách thức và hạnh phúc. Tình yêu của chúng tôi đã trưởng thành và
              mạnh mẽ hơn từng ngày.
            </p>
            <p>
              Và bây giờ, chúng tôi chuẩn bị bước vào một chặng đường mới, một
              cuộc hành trình cùng nhau đến hôn nhân. Kết hôn không chỉ là việc
              kết nối hai con người, mà còn là sự hòa quyện của hai tâm hồn, hai
              cá tính và hai cuộc sống. Chúng tôi đang chuẩn bị sẵn sàng để hứa
              hẹn với nhau, chia sẻ mọi khoảnh khắc, niềm vui và nỗi buồn trong
              tương lai.
            </p>
            <h3>16-09-2023 Cô ấy nói : Em đồng ý !</h3>
            <p>
              Tình yêu của chúng tôi là một hành trình đáng trân trọng, và chúng
              tôi không thể đợi để bước vào chương mới của cuộc đời này cùng
              nhau. Với tình yêu và sự hiểu biết sâu sắc, chúng tôi tin rằng
              tương lai sẽ đầy hạnh phúc và ấm áp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
