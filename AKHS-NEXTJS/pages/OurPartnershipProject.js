import SwiperCore, { Navigation, Pagination, A11y } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import cardimg from "../public/images/swipper.png";
SwiperCore.use([Navigation, Pagination, A11y]);

const OurPartnershipProject = () => {

  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [expand, setexpand] = useState(true);
  const [expand2, setexpand2] = useState(true);
  const [expand3, setexpand3] = useState(true);
  let props = {
    attributes: {
      blockHeading: "Our Partnership Projects",
      blockHeadingAndDescriptionAlignment: "center",
      blockHeadingFontColor: "#D12D2D",
      cardDescription:
        "The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3 million  private-public four-year evidence-based project funded by Agence Française de Développement (AFD) and Aga Khan Foundation (AKF). It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania. The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT) The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3 million private-public four-year evidence-based project funded It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania. The project is a joint initiative led by the Aga Khan Health The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT) The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3 million private-public four-year evidence-based project funded by Agence Française de Développement (AFD) and Aga Khan Foundation (AKF). It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania. The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT)  ",

      cardHeading: "The Tanzania Cancer Care Project (TCCP)",
      enableBackgroundImage: true,
      backgroundImage: {
        sourceUrl: "",
      },
      backgroundColor: "",
      footnote:
        '<p>For all other services please <a href="https://www.google.com">click here</a></p>\n',
      footnoteAlignment: "left",
      footnoteFontColor: "#000000",
    },

    language: "en",
    align: "left",
    direction: "ltr",
  };
  return (
    <section
      dir={props.direction}
      className="pt-24 sm:pt-28  sm: px-10 md:px-28 lg:px-7 xl:px-20"
    >
      <div className="lg:px-24">
        <div
          className={`${
            props.attributes.blockHeadingAndDescriptionAlignment === "center"
              ? "text-center "
              : "text-center sm:text-start"
          }`}
        >
          <p
            style={{ color: props.attributes.blockHeadingFontColor }}
            className="lg:text-3xl sm:text-xl md:text-2xl font-extrabold"
          >
            {props.attributes.blockHeading}
          </p>
          <hr
            className={`lg:border-gray15 md:border-brownShade  lg:w-80 md:w-80 mt-4 max-w-ful sm: w-28 sm: border-brownShade  ${
              props.attributes.blockHeadingAndDescriptionAlignment === "center"
                ? "mx-auto"
                : "mx-auto sm:mx-0"
            }`}
          />
        </div>
      </div>
      <Swiper
        className="mainContainer"
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{ nextEl: ".nextBtn", prevEl: ".prevBtn" }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        pagination={{
          clickable: true,
          bulletClass: `lg:hidden inline-block mx-1 mb-24 rounded-full opacity-100 swiper-pagination-bullet`,
          bulletActiveClass: "bg-black w-2 h-2 sm:w-3 sm:h-3",
        }}
      >
        <SwiperSlide className="lg:px-24">
          <div className="lg:flex items-start lg:mt-28 md:mt-10 sm: mt-10 mx-auto">
            <div className="xl:w-3/5 lg:w-1/2 xl:pe-16 lg:pe-10">
              <h3 className={`font-bold lg:text-3xl md:text-2xl mt-4 xl:mt-8 2xl:mt-10 sm: text-xl`}>
                {props.attributes.cardHeading}
              </h3>
              {expand ? (
                <p
                  className={`2xl:mt-10 xl:mt-10 overflow-ellipsis overflow-hidden 2xl:h-80 xl:h-72 lg:h-80 text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-400 lg:text-sm xl:text-base md:text-sm sm: text-xs lg:mt-2 sm: mt-12 md:mt-10 `}
                  dangerouslySetInnerHTML={{
                    __html: props.attributes.cardDescription,
                  }}
                />
              ) : (
                <p
                  className={`lg:text-sm leading-5 xl:text-base md:text-sm sm: text-xs lg:mt-5 sm: mt-12 md:mt-10 xl:mt-8 2xl:mt-14`}
                >
                  {props.attributes.cardDescription}
                </p>
              )}
              <div className="md:flex md:justify-center sm: flex sm: justify-center lg:justify-start">
                <button
                  className="lg:mx-auto lg:mt-4 my-10"
                  onClick={() => {
                    setshow(!show);
                    setexpand(!expand);
                  }}
                >
                  {show ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
            </div>
            <div className="xl:w-2/5 lg:w-1/2 pb-12 lg:pb-0 md:mt-8 xl:mt-10">
              <img
                className="lg:h-96 md:h-96 sm: h-72 w-full lg:ml-0 lg:px-0 md:mx-auto sm: mx-auto"
                src={cardimg}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="lg:px-24">
          <div className="lg:flex items-start lg:mt-28 md:mt-10 sm: mt-10 mx-auto">
            <div className="xl:w-3/5 lg:w-1/2 xl:pe-16 lg:pe-10">
              <h3 className={`font-bold lg:text-3xl md:text-2xl mt-4 xl:mt-8 2xl:mt-10 sm: text-xl`}>
                {props.attributes.cardHeading}
              </h3>
              {expand2 ? (
                <p
                  className={`2xl:mt-10 xl:mt-10 overflow-ellipsis overflow-hidden 2xl:h-80 xl:h-72 lg:h-80 text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-400 lg:text-sm xl:text-base md:text-sm sm: text-xs lg:mt-2 sm: mt-12 md:mt-10 `}
                  dangerouslySetInnerHTML={{
                    __html: props.attributes.cardDescription,
                  }}
                />
              ) : (
                <p
                  className={`lg:text-sm leading-5 xl:text-base md:text-sm sm: text-xs lg:mt-5 sm: mt-12 md:mt-10 xl:mt-8 2xl:mt-14`}
                >
                   {props.attributes.cardDescription}
                </p>
              )}
              <div className="md:flex md:justify-center sm: flex sm: justify-center lg:justify-start">
                <button
                  className="lg:mx-auto lg:mt-4 my-10"
                  onClick={() => {
                    setshow1(!show1);
                    setexpand2(!expand2);
                  }}
                >
                  {show1 ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
            </div>
            <div className="xl:w-2/5 lg:w-1/2 pb-12 lg:pb-0 md:mt-8 xl:mt-10">
              <img
                className="lg:h-96 md:h-96 sm: h-72 w-full lg:ml-0 lg:px-0 md:mx-auto sm: mx-auto"
                src={cardimg}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="lg:px-24">
          <div className="lg:flex items-start lg:mt-28 md:mt-10 sm: mt-10 mx-auto">
            <div className="xl:w-3/5 lg:w-1/2 xl:pe-16 lg:pe-10">
              <h3 className={`font-bold lg:text-3xl md:text-2xl mt-4 xl:mt-8 2xl:mt-10 sm: text-xl`}>
                {props.attributes.cardHeading}
              </h3>
              {expand3 ? (
                <p
                  className={`2xl:mt-10 xl:mt-10 overflow-ellipsis overflow-hidden 2xl:h-80 xl:h-72 lg:h-80 text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-400 lg:text-sm xl:text-base md:text-sm sm: text-xs lg:mt-2 sm: mt-12 md:mt-10 `}
                  dangerouslySetInnerHTML={{
                    __html: props.attributes.cardDescription,
                  }}
                />
              ) : (
                <p
                  className={`lg:text-sm leading-5 xl:text-base md:text-sm sm: text-xs lg:mt-5 sm: mt-12 md:mt-10 xl:mt-8 2xl:mt-14`}
                >
                  {props.attributes.cardDescription}
                </p>
              )}
              <div className="md:flex md:justify-center sm: flex sm: justify-center lg:justify-start">
                <button
                  className="lg:mx-auto lg:mt-4 my-10"
                  onClick={() => {
                    setshow2(!show2);
                    setexpand3(!expand3);
                  }}
                >
                  {show2 ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
            </div>
            <div className="xl:w-2/5 lg:w-1/2 pb-12 lg:pb-0 md:mt-8 xl:mt-10">
              <img
                className="lg:h-96 md:h-96 sm: h-72 w-full lg:ml-0 lg:px-0 md:mx-auto sm: mx-auto"
                src={cardimg}
              />
            </div>
          </div>
        </SwiperSlide>
        <button
          className={`prevBtn focus:outline-none hidden h-10 w-10 lg:inline-block absolute ${
            props.direction === "ltr" ? "left-0 " : "right-0"
          } bg-brownShade  cursor-pointer p-1.5 top-1/2 z-10 `}
        >
          {props.direction === "ltr" ? (
            <HiArrowNarrowLeft className="h-10 w-9 pb-3 pr-2 text-white" />
          ) : (
            <HiArrowNarrowRight className="h-10 w-9 pb-3 pr-2 text-white" />
          )}
        </button>

        <button
          className={`nextBtn focus:outline-none hidden h-10 w-10 lg:inline-block absolute ${
            props.direction === "ltr" ? "right-0 " : "left-0"
          } bg-brownShade  cursor-pointer p-1.5 top-1/2 z-10 `}
        >
          {props.direction === "ltr" ? (
            <HiArrowNarrowRight className="h-10 w-9 pb-3 pr-2 text-white" />
          ) : (
            <HiArrowNarrowLeft className="h-10 w-9 pb-3 pr-2 text-white" />
          )}
        </button>
        {props.attributes.footnote && (
          <div
            className={`lg:px-24 mt-6 footnote sm:text-lg md:text-xl tracking-tight sm:font-medium py-4 ${
              props.attributes.footnoteAlignment === "center" && "text-center"
            }`}
            style={{ color: props.attributes.footnoteFontColor }}
            dangerouslySetInnerHTML={{ __html: props.attributes.footnote }}
          />
        )}
      </Swiper>
    </section>
  );
};

export default OurPartnershipProject;
