import SwiperCore, { Navigation, Pagination, A11y } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../public/images/swipper.png";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { SwipperContainer } from "../styles/uielements";

SwiperCore.use([Navigation, Pagination, A11y]);

const timeline = () => {
  const [results, setResults] = useState();
  const [show, setshow] = useState(false);
  return (
    <SwipperContainer className="">
      <Swiper
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <h3 className="sm: text-xl md:text-xl lg:text-3xl font-medium lg:text-red-600 text-center mt-14">
            Our Partnership Projects
          </h3>
          <div className="border-t-2 sm: w-72 border-black  lg:max-w-md opacity-40 mt-5 mx-auto"></div>
          <div className="lg:flex lg:justify-center  lg:space-x-48 lg:mt-24 sm: mt-14">
            <div className="sm: mx-7">
              <h3 className="font-bold text-xl -tracking-0.01em lg:max-w-sm">
                The Tanzania Cancer Care Project (TCCP)
              </h3>
              <p className="lg:max-w-xl sm: text-sm lg:text-lg sm: max-w-7xl mt-5 text-black">
                The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3
                million private-public four-year evidence-based project funded
                by Agence Française de Développement (AFD) and Aga Khan
                Foundation (AKF). It aims to strengthen and expand the quality,
                access, and capacity of cancer care services across the cancer
                continuum in Dar es Salaam and Mwanza regions of Tanzania.
              </p>
              {results ? (
                <p className="-tracking-0.01em  sm: text-sm lg:text-lg lg:max-w-lg mt-10">
                  The project is a joint initiative led by the Aga Khan Health
                  Services Tanzania (AKHST) together with the Aga Khan
                  Foundation Tanzania (AKFT),{" "}
                </p>
              ) : (
                <p className="-tracking-0.01em  sm: text-sm lg:text-lg lg:max-w-lg opacity-60 mt-10">
                  The project is a joint initiative led by the Aga Khan Health
                  Services Tanzania (AKHST) together with the Aga Khan
                  Foundation Tanzania (AKFT),{" "}
                </p>
              )}
              <button
                onClick={() => {
                  setshow(!show);
                  setResults(!results);
                }}
              >
                {show ? (
                  <FaChevronUp className="w-10 lg:ml-60 md:ml-80 sm: ml-36 mt-9 h-8" />
                ) : (
                  <FaChevronDown className="w-10 lg:ml-60 md:ml-80 sm: ml-36  mt-9 h-8" />
                )}
              </button>
            </div>
            <img
              src={img}
              className="sm: hidden lg:block md:block md:ml-40 lg:ml-0 md:mt-7 lg:mt-0"
            />
            <img
              src={img}
              className="sm: block lg:hidden md:hidden w-60 mt-5 mb-7 mx-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="sm: block lg:hidden text-xl font-medium  text-center mt-14">
            Our Partnership Projects
          </h3>
          <div className="sm: block lg:hidden border-t-2 sm: w-72 border-black lg:max-w-md opacity-40 mt-5 mx-auto"></div>
          <div className="lg:flex lg:justify-center  lg:space-x-48 lg:mt-24 sm: mt-14">
            <div className="sm: mx-7">
              <h3 className="font-bold text-2xl-tracking-0.01em lg:max-w-sm">
                The Tanzania Cancer Care Project (TCCP)
              </h3>
              <p className="lg:max-w-xl sm: text-sm lg:text-lg sm: max-w-7xl mt-5 text-black">
                The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3
                million private-public four-year evidence-based project funded
                by Agence Française de Développement (AFD) and Aga Khan
                Foundation (AKF). It aims to strengthen and expand the quality,
                access, and capacity of cancer care services across the cancer
                continuum in Dar es Salaam and Mwanza regions of Tanzania.
              </p>
              {results ? (
                <p className="-tracking-0.01em  sm: text-sm lg:text-lg lg:max-w-lg mt-10">
                  The project is a joint initiative led by the Aga Khan Health
                  Services Tanzania (AKHST) together with the Aga Khan
                  Foundation Tanzania (AKFT),{" "}
                </p>
              ) : (
                <p className="-tracking-0.01em  sm: text-sm lg:text-lg lg:max-w-lg opacity-60 mt-10">
                  The project is a joint initiative led by the Aga Khan Health
                  Services Tanzania (AKHST) together with the Aga Khan
                  Foundation Tanzania (AKFT),{" "}
                </p>
              )}
              <button
                onClick={() => {
                  setshow(!show);
                  setResults(!results);
                }}
              >
                {show ? (
                  <FaChevronUp className="w-10 lg:ml-96 md:ml-80 sm: ml-36 mt-9 h-8" />
                ) : (
                  <FaChevronDown className="w-10 lg:ml-96 md:ml-80 sm: ml-36  mt-9 h-8" />
                )}
              </button>
            </div>
            <img
              src={img}
              className="sm: hidden lg:block md:block md:ml-40 lg:ml-0 md:mt-7 lg:mt-0"
            />
            <img
              src={img}
              className="sm: block lg:hidden md:hidden w-60 mt-5 mb-7 mx-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="sm: block lg:hidden text-xl font-medium  text-center mt-14">
            Our Partnership Projects
          </h3>
          <div className="sm: block lg:hidden border-t-2 sm: w-72 border-black lg:max-w-md opacity-40 mt-5 mx-auto"></div>
          <div className="lg:flex lg:justify-center  lg:space-x-48 lg:mt-24 sm: mt-14">
            <div className="sm: mx-7">
              <h3 className="font-bold text-2xl-tracking-0.01em lg:max-w-sm">
                The Tanzania Cancer Care Project (TCCP)
              </h3>
              <p className="lg:max-w-xl sm: text-sm lg:text-lg sm: max-w-7xl mt-5 text-black">
                The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3
                million private-public four-year evidence-based project funded
                by Agence Française de Développement (AFD) and Aga Khan
                Foundation (AKF). It aims to strengthen and expand the quality,
                access, and capacity of cancer care services across the cancer
                continuum in Dar es Salaam and Mwanza regions of Tanzania.
              </p>
              {results ? (
                <p className="-tracking-0.01em  sm: text-sm lg:text-lg lg:max-w-lg mt-10">
                  The project is a joint initiative led by the Aga Khan Health
                  Services Tanzania (AKHST) together with the Aga Khan
                  Foundation Tanzania (AKFT),{" "}
                </p>
              ) : (
                <p className="-tracking-0.01em  sm: text-sm lg:text-lg lg:max-w-lg opacity-60 mt-10">
                  The project is a joint initiative led by the Aga Khan Health
                  Services Tanzania (AKHST) together with the Aga Khan
                  Foundation Tanzania (AKFT),{" "}
                </p>
              )}
              <button
                onClick={() => {
                  setshow(!show);
                  setResults(!results);
                }}
              >
                {show ? (
                  <FaChevronUp className="w-10 lg:ml-96 md:ml-80 sm: ml-36 mt-9 h-8" />
                ) : (
                  <FaChevronDown className="w-10 lg:ml-96 md:ml-80 sm: ml-36  mt-9 h-8" />
                )}
              </button>
            </div>
            <img
              src={img}
              className="sm: hidden lg:block md:block md:ml-40 lg:ml-0  lg:mt-0"
            />
            <img
              src={img}
              className="sm: block lg:hidden md:hidden w-60 mt-5 mb-7 mx-auto"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </SwipperContainer>
  );
};

export default timeline;
