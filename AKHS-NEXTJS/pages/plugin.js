import React from "react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import plugin1 from "../public/images/plugin1.png";
import plugin2 from "../public/images/plugin2.png";
import line from "../public/images/line.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { SwipperContainer, TimelineContainer } from "../styles/uielements";

SwiperCore.use([Navigation, Pagination, A11y]);
const plugin = () => {
  return (
    <TimelineContainer className="px-32 mt-20">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="px-10">
             <div className="flex justify-center">
             <div className="bg-brownShade rounded-full p-3">
             <img className="" src={plugin1} />
             </div>
             <div className="bg-brownShade rounded-full p-3">
             <img className="" src={plugin2} />
             </div>
             <div className="bg-brownShade rounded-full p-3">
             <img className="" src={plugin2} />
             </div>
             <div className="bg-brownShade rounded-full p-3">
             <img className="" src={plugin1} />
             </div>
             </div>
             <div className="pb-5">
             <div className="w-40 shadow-xl p-2">
            <h3> First Health Centre established in Dar es Salaam</h3>
             </div>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </TimelineContainer>
  );
};

export default plugin;
