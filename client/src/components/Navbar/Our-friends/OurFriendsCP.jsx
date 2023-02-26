import "../Our-friends/our-friends.css"
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
export default function OurFriendsCP() {
  return (
    <div className="container our_friends_cp">
      <div className="text-center">
        <h3>Наши друзья</h3>
      </div>
      <div className="our_friends_swiper">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><a href="http://ilmhona.org/" target="_blank">ilmhona</a></SwiperSlide>
        <SwiperSlide><a className="alif_academy_logo" target="_blank" href="https://alif.academy/">Alif</a></SwiperSlide>
        <SwiperSlide><a className="mu_logo" target="_blank" href="https://www.manutd.com/">Man United</a></SwiperSlide>
        <SwiperSlide><a className="real_madrid_logo" target="_blank" href="https://www.realmadrid.com/">Real Madrid</a></SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}
