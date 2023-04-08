import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/controller";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../images/Black-Friday-Social-Media-Banner-02.jpg";
import slide2 from "../../images/Black-Friday-Social-Media-Banner-03.jpg";
import slide3 from "../../images/Black-Friday-Social-Media-Banner-05.jpg";
import slide4 from "../../images/Black-Friday-Social-Media-Banner-06.jpg";

const Slider = () => {
  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper rounded lg:rounded-xl none"
      >
        <SwiperSlide>
          <img className="w-fit" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-fit" src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-fit" src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-fit" src={slide4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
