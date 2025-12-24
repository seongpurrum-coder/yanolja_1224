import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Slide = () => {
  return(
    <>
      <div className='slide'>
        <div className='inner'>
          <Swiper 
          loop={true}
          slidesPerView={2}
          spaceBetween={20}
          navigation={true} 
          pagination={true} 
          modules={[Navigation, Pagination]} 
          className="mainslide">
            <SwiperSlide>
              <a href="#"><img src="/slide_01.jpg" alt="이미지" /></a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#"><img src="/slide_02.jpg" alt="이미지" /></a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#"><img src="/slide_03.jpg" alt="이미지" /></a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#"><img src="/slide_04.jpg" alt="이미지" /></a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#"><img src="/slide_05.jpg" alt="이미지" /></a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#"><img src="/slide_06.jpg" alt="이미지" /></a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}
export default Slide;