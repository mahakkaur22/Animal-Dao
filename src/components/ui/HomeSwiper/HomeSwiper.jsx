import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
import "./homeSwiper.css";
import { onValue, ref } from "firebase/database";
import { db } from "../../../firebase";

// import required modules
import { EffectCards } from "swiper";

export default function HomeSwiper() {
  const [reload, setReload] = useState(true);
  const [formData, setFormData] = useState([]);
  if (formData === []) {
    setReload(false);
  }
  useEffect(() => {
    onValue(ref(db, "/nft/"), (snapshot) => {
      const data = snapshot.val();
      setFormData(data);
    });
  }, [reload]);

  return (
    <>
      {formData.map((row, index) => (
        <style key={index}>
          {"#s" +
            row.idnft +
            ":after{content:'';position: absolute; z-index: -1; width:100%;height: 100%;display: block; background-image:url(" +
            row.image +
            ");background-position: center;filter: blur(18px);}"}
        </style>
      ))}
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        loop={true}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: false }}
        autoplay={{ delay: 1000 }}
        speed={1000}
      >
        {formData.map((row, index) => (
          <SwiperSlide key={index}>
            <>
              <div
                className="w-100 h-100 d-flex align-items-center position-relative"
                id={"s" + row.idnft}
              >
                <img className="slidPic" src={row.image} alt="" />
              </div>
            </>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </>
  );
}
