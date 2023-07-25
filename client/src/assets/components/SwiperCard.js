import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Wrapper from '../wrappers/SwiperCard';

const SwiperCard = ({ img1, img2, img3, img4, img5,img6, img7}) => {
  return (
    <Wrapper>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {img1 ? <SwiperSlide ><img src={img1.image} alt="" />  <p className="image-label">{img1.label}</p></SwiperSlide> : null}
        {img2 ? <SwiperSlide><img src={img2.image} alt="" />  <p className="image-label"> {img2.label}</p></SwiperSlide> : null}
        {img3 ? <SwiperSlide><img src={img3.image} alt="" />  <p className="image-label"> {img3.label}</p></SwiperSlide> : null}
        {img4 ? <SwiperSlide><img src={img4.image} alt="" />  <p className="image-label"> {img4.label}</p></SwiperSlide> : null}
        {img5 ? <SwiperSlide><img src={img5.image} alt="" />  <p className="image-label"> {img5.label}</p></SwiperSlide> : null}
        {img6 ? <SwiperSlide><img src={img6.image} alt="" />  <p className="image-label"> {img6.label}</p></SwiperSlide> : null}
        {img7 ? <SwiperSlide><img src={img7.image} alt="" />  <p className="image-label"> {img7.label}</p></SwiperSlide> : null}
      </Swiper>
    </Wrapper>
  )
}

export default SwiperCard

