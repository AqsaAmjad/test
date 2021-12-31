import SwiperCore, { Navigation, Pagination, A11y } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import qf1 from "../public/images/qf1.png";
import qfh from "../public/images/qfh.png";
import qf2 from "../public/images/qf2.png";
import qf2h from "../public/images/qf2h.png";
import qf3 from "../public/images/qf3.png";
import qf3h from "../public/images/qf3h.png";
import qf4 from "../public/images/qf4.png";
import qf4h from "../public/images/qf4h.png";
import qf5 from "../public/images/qf5.png";
import qf5h from "../public/images/qf5h.png";
import qf8 from "../public/images/qf8.png";
import qf8h from "../public/images/qf8h.png";

const test = () => {
  let props = {
    attributes: {
      blockHeading: "Quick Facts",
      blockDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      blockHeadingAndDescriptionAlignment: "center",
      blockHeadingFontColor: "white",
      blockDescriptionFontColor: "#FFFFFF",
      enableBackgroundImage: true,
      backgroundImage: {
        sourceUrl: "/quickfacts.png",
      },
      backgroundColor: "#000000BF",
      footnote:
        '<p>For all other services please <a href="https://www.google.com">click here</a></p>\n',
      footnoteAlignment: "center",
      footnoteFontColor: "#000000",
    },
    language: "en",
    align: "left",
    direction: "ltr",
  };
  let bgImage = "/quickfacts.png";
  if (props.attributes.enableBackgroundImage) {
    bgImage = props.attributes.backgroundImage.sourceUrl;
  }

  return (
    <section
      className="bg-cover"
      style={{ backgroundImage: 'url("' + bgImage + '")' }}
      dir={props.direction}
    >
      <div
        className="pt-20 sm:pt-28 lg:px-20 xl:px-24"
        style={{ backgroundColor: props.attributes.backgroundColor }}
      >
        <div
          className={`  ${
            props.attributes.blockHeadingAndDescriptionAlignment === "center"
              ? "text-center "
              : "text-center sm:text-start"
          }`}
        >
          <p
            style={{ color: props.attributes.blockHeadingFontColor }}
            className="text-xl sm:text-2xl md:text-3xl font-extrabold"
          >
            {props.attributes.blockHeading}
          </p>
          <hr
            className={`border-gray15 w-72 mt-4 max-w-full ${
              props.attributes.blockHeadingAndDescriptionAlignment === "center"
                ? "mx-auto"
                : "mx-auto sm:mx-0"
            }`}
          />
          <div
            className={`font-medium text-xs sm:text-sm mt-3 sm: px-3 lg:px-0 max-w-xl mx-auto`}
            style={{ color: props.attributes.blockDescriptionFontColor }}
            dangerouslySetInnerHTML={{
              __html: props.attributes.blockDescription,
            }}
          />
          <div className="lg:block sm: hidden md:hidden">
            <div className="lg:flex justify-center sm: hidden md:hidden mt-24">
              <div className="group lg:me-20 md:me-5 lg:w-64 lg:pt-12 hover:bg-brownShade md:pt-7 lg:h-52 md:w-44 md:h-40 bg-white rounded-2xl">
                <div className=" flex justify-center items-center">
                  <img src={qfh} className="h-10 w-10 ms-4" />
                  <h3 className="text-brownShade group-hover:text-white font-bold text-xl w-20 ms-4">
                    984
                  </h3>
                </div>
                <h3 className="text-center text-black group-hover:text-white lg:mt-9 md:mt-5 lg:w-44 mx-auto ">
                  Full Time Staff
                </h3>
              </div>
              <div className="group hover:bg-brownShade lg:me-20 md:me-5 lg:w-64 lg:pt-12 md:pt-7 lg:h-52 md:w-44 md:h-40 bg-white rounded-2xl">
                <div className=" flex justify-center items-center">
                  <img src={qf2} className="h-10 w-10 ms-6" />
                  <h3 className="text-brownShade group-hover:text-white font-bold text-xl w-20 ms-4">
                    4
                  </h3>
                </div>
                <h3 className="text-center text-black group-hover:text-white mt-9 w-48 mx-auto">
                  Hospitals & Medical Centers{" "}
                </h3>
              </div>
              <div className="group hover:bg-brownShade lg:me-20 md:me-5  lg:w-64 lg:pt-12 md:pt-7 lg:h-52 md:w-44 md:h-40 bg-white rounded-2xl">
                <div className=" flex justify-center items-center">
                  <img src={qf3} className="h-10 w-10 ms-5" />
                  <h3 className="text-brownShade group-hover:text-white font-bold text-xl w-20 ms-4">
                    24
                  </h3>
                </div>
                <h3 className="text-center group-hover:text-white text-black mt-12 w-48 mx-auto">
                  Outreach Health Centres{" "}
                </h3>
              </div>
              <div className="group hover:bg-brownShade lg:w-64 lg:pt-12 md:pt-7 lg:h-52 md:w-44 md:h-40 bg-white rounded-2xl">
                <div className=" flex justify-center items-center">
                  <img src={qf4} className="h-10 w-10 ms-5" />
                  <h3 className="text-brownShade group-hover:text-white font-bold text-xl w-20 ms-4">
                    170
                  </h3>
                </div>
                <h3 className="text-center group-hover:text-white text-black mt-12 w-48 mx-auto ">
                  Number of Beds
                </h3>
              </div>
            </div>
            <div className="lg:flex justify-center sm: hidden md:hidden mt-24 pb-32">
              <div className="group lg:me-20 md:me-5 lg:w-64 lg:pt-12 hover:bg-brownShade md:pt-7 lg:h-52 md:w-44 md:h-40 bg-white rounded-2xl">
                <div className=" flex justify-center items-center">
                  <img src={qf4} className="h-10 w-10" />
                  <h3 className="text-brownShade group-hover:text-white font-bold text-xl w-20 ms-4">
                    TZS 2.6 Billion
                  </h3>
                </div>
                <h3 className="text-center text-black group-hover:text-white lg:mt-9 md:mt-5 lg:w-44 mx-auto ">
                  Post Graduate Medical Education
                </h3>
              </div>
              <div className="group hover:bg-brownShade lg:me-20 md:me-5 lg:w-64 lg:pt-12 md:pt-7 lg:h-52 md:w-44 md:h-40 bg-white rounded-2xl">
                <div className=" flex justify-center items-center">
                  <img src={qf5} className="h-10 w-10" />
                  <h3 className="text-brownShade group-hover:text-white font-bold text-xl w-20 ms-4">
                    TZS 2.6 Billion
                  </h3>
                </div>
                <h3 className="text-center text-black group-hover:text-white mt-9 w-48 mx-auto">
                  Patient Welfare
                </h3>
              </div>
              <div className="group hover:bg-brownShade lg:me-20 md:me-5  lg:w-64 lg:pt-12 md:pt-7 lg:h-52 md:w-44 md:h-40 bg-white rounded-2xl">
                <div className=" flex justify-center items-center">
                  <img src={qf4} className="h-10 w-10" />
                  <h3 className="text-brownShade group-hover:text-white font-bold text-xl w-20 ms-4">
                    6,500
                  </h3>
                </div>
                <h3 className="text-center group-hover:text-white text-black mt-12 w-48 mx-auto">
                  In-Patient Admissions
                </h3>
              </div>
              <div className="group hover:bg-brownShade lg:w-64 lg:pt-12 md:pt-7 lg:h-52 md:w-44 md:h-40 bg-white rounded-2xl">
                <div className=" flex justify-center items-center">
                  <img src={qf8} className="h-10 w-10" />
                  <h3 className="text-brownShade group-hover:text-white font-bold text-xl w-20 ms-4">
                    719,285
                  </h3>
                </div>
                <h3 className="text-center group-hover:text-white text-black mt-12 w-48 mx-auto ">
                  Out-Patients Visits
                </h3>
              </div>
            </div>
          </div>
        </div>
        <Swiper 
          className="carouselContainer lg:hidden mt-10 pb-10"
          spaceBetween={20}
          loopFillGroupWithBlank={true}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            320: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide className="ms-8">
            <div className="group  md:me-5 md:w-44 md:h-40 sm: w-40 sm: h-40 pt-7  hover:bg-brownShade bg-white rounded-2xl">
              <div className=" flex justify-center  items-center">
                <img src={qfh} className="h-10 w-10" />
                <h3 className="text-brownShade  group-hover:text-white font-bold text-xl ms-4">
                  984
                </h3>
              </div>
              <h3 className="text-center group-hover:text-white text-black mt-9">
                Full Time Staff
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group md:me-5 pt-7 sm: w-40 sm: h-40 md:w-44 md:h-40 bg-white hover:bg-brownShade rounded-2xl">
              <div className=" flex justify-center items-center">
                <img src={qf2} className="h-10 w-10" />
                <h3 className="text-brownShade group-hover:text-white font-bold text-xl ms-4">
                  4
                </h3>
              </div>
              <h3 className="text-center text-black group-hover:text-white  mt-9 md:w-40 sm: px-2 mx-auto ">
                Hospitals & Medical Centers{" "}
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group  hover:bg-brownShade md:me-5  pt-7 sm: w-40 sm: h-40 lg:h-52 md:w-44 md:h-40 bg-white rounded-2xl">
              <div className=" flex justify-center items-center">
                <img src={qf3} className="h-10 w-10" />
                <h3 className="text-brownShade group-hover:text-white font-bold text-xl ms-4">
                  24
                </h3>
              </div>
              <h3 className="text-center group-hover:text-white text-black mt-9  w-40 mx-auto ">
                Outreach Health Centres{" "}
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group pt-7 sm: h-40 sm: w-40 hover:bg-brownShade md:w-44 md:h-40 bg-white rounded-2xl">
              <div className=" flex justify-center items-center">
                <img src={qf4} className="h-10 w-10" />
                <h3 className="text-brownShade font-bold group-hover:text-white text-xl ms-4">
                  170
                </h3>
              </div>
              <h3 className="text-center text-black group-hover:text-white mt-9 w-40 mx-auto ">
                Number of Beds
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group md:me-5  hover:bg-brownShade pt-7 sm: h-40 sm: w-40 lg:h-52 md:w-44 md:h-40 bg-white rounded-2xl">
              <div className=" flex justify-center items-center">
                <img src={qf4} className="h-10 w-10" />
                <h3 className="text-brownShade group-hover:text-white font-bold text-xl w-20 ms-4">
                  TZS 2.6 Billion
                </h3>
              </div>
              <h3 className="text-center text-black group-hover:text-white lg:mt-9 mt-5 md:w-44 sm: px-1 mx-auto ">
                Post Graduate Medical Education
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group hover:bg-brownShade md:me-5  pt-7 sm: h-40 sm: w-40 lg:h-52 md:w-44 md:h-40 bg-white rounded-2xl">
              <div className=" flex justify-center items-center">
                <img src={qf5} className="h-10 w-10" />
                <h3 className="text-brownShade group-hover:text-white font-bold text-xl w-20 ms-4">
                  TZS 2.6 Billion
                </h3>
              </div>
              <h3 className="text-center text-black group-hover:text-white mt-9 md:w-48 sm: px-1 mx-auto">
                Patient Welfare
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group hover:bg-brownShade md:me-5 sm: w-40 sm: h-40 pt-7 md:w-44 md:h-40 bg-white rounded-2xl">
              <div className="flex justify-center items-center">
                <img src={qf4} className="h-10 w-10" />
                <h3 className="text-brownShade group-hover:text-white font-bold text-xl md:w-20 ms-4">
                  6,500
                </h3>
              </div>
              <h3 className="text-center group-hover:text-white text-black mt-9 md:w-48 sm: px-1 mx-auto">
                In-Patient Admissions
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group hover:bg-brownShade pt-7 sm: w-40 sm: h-40 lg:h-52 md:w-44 md:h-40 bg-white rounded-2xl">
              <div className=" flex justify-center items-center">
                <img src={qf8} className="h-10 w-10" />
                <h3 className="text-brownShade group-hover:text-white font-bold text-xl w-20 ms-4">
                  719,285
                </h3>
              </div>
              <h3 className="text-center group-hover:text-white text-black mt-9 md:w-48 sm: px-1 mx-auto ">
                Out-Patients Visits
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* {
    props.attributes.footnote &&
    <div className={`footnote sm:text-lg md:text-xl tracking-tight sm:font-medium py-4 ${props.attributes.footnoteAlignment === 'center' && 'text-center'}`}
      style={{ color: props.attributes.footnoteFontColor }}
      dangerouslySetInnerHTML={{ __html: props.attributes.footnote }} />
  } */}
      </div>
    </section>
  );
};

export default test;
