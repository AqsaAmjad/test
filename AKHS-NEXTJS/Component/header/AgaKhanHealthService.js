import {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
  HiOutlineSearch,
  HiX,
} from "react-icons/hi";
import logomd from "../public/images/logomd.png";
import headerimg from "../public/images/Agaheader.png";
import Manu from "../public/images/Manu.png";
import Menu2 from "../public/images/Menu2.png";
import React, { useState } from "react";
const AgaKhanHealthService = () => {
  const [button, setButton] = useState(false);

  let props = {
    attributes: {
      blockHeadingAndDescriptionAlignment: "left",
      enableBackgroundImage: true,
      backgroundImage: {
        sourceUrl: "/agakhanuniversty.png",
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
  let bgImage = "/agakhanuniversty.png";
  if (props.attributes.enableBackgroundImage) {
    bgImage = props.attributes.backgroundImage.sourceUrl;
  }

  return (
    <div>
      <section
        className="bg-cover"
        style={{ backgroundImage: 'url("' + bgImage + '")' }}
        dir={props.direction}
      >
        <div className="bg-gradient-to-r from-gray-700">
          <div
            className="text-white py-4 px-3 text-sm hidden xl:flex items-center"
            style={{ backgroundColor: "#FF0000" }}
          >
            <h1 className="text-sm">
              COVID-19: Screening, Visitor Guidelines & Vaccine Info
            </h1>
            <span className="underline ml-5">View Detail</span>
            <HiArrowNarrowRight className="ml-4 h-5 w-5" />
          </div>
          <div className="hidden xl:flex">
            <div className="LogoDiv relative z-10">
              <img src={headerimg} />
              <div className="flex items-center absolute top-8 space-x-2 px-6">
                <img className="w-16" src={logomd} />
                <h3 className="font-bold  text-2xl">
                  Aga Khan Health Services
                </h3>
              </div>
            </div>
            <div className="w-full -ml-28">
              <div
                style={{ backgroundColor: "#F8F8FA" }}
                className="items-center justify-start py-3 pl-20 "
              >
                <ul className="flex space-x-6 text-sm space-x-3 font-medium pl-10">
                  <li className="hover:text-brownShade">Programs</li>
                  <span>|</span>
                  <li className="hover:text-brownShade">Education</li>
                  <span>|</span>
                  <li className="hover:text-brownShade">Research</li>
                </ul>
                <div class="flex justify-end -mt-5 pr-10 items-center">
                  <div class="relative">
                    <input
                      type="text"
                      class="h-8 lg:w-72 pr-8 pl-5 z-0 focus:shadow focus:outline-none"
                    />
                    <div class="absolute top-2 right-3">
                      <HiOutlineSearch className="text-gray-400 w-5 h-5 z-20 hover:text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white">
                <ul className="flex justify-start lg:space-x-5 font-medium px-4 py-4 pl-28">
                  <li className="text-brownShade text-sm">Home</li>
                  <li className="hover:text-brownShade text-sm">About Us</li>
                  <li className="hover:text-brownShade text-sm">
                    Hospitals & Medical Centers
                  </li>
                  <li className="hover:text-brownShade text-sm">
                    Regional Outreach Centers
                  </li>
                  <li className="hover:text-brownShade text-sm">
                    Media Resources
                  </li>
                  <li className="hover:text-brownShade text-sm">Join Us!</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="xl:hidden bg-white w-full py-6 ">
            <div className="flex items-center space-x-2 md:pl-6 sm: pl-3 pb-5">
              <img className="" src={logomd} />
              <h3 className="font-bold md:text-2xl sm: text-sm">
                Aga Khan Health Services
              </h3>
            </div>
            <span
              onClick={() => setButton(!button)}
              className={`flex justify-end -mt-6`}
            >
              {button ? (
                <span
                  className={`button fixed md:pr-6 sm: pr-3 -mt-14 bg-opacity-80 w-full h-screen flex justify-end bg-opacity-80 ${
                    button ? "bg-brownShade" : "bg-white"
                  }`}
                >
                  <img className="h-8 mt-7" src={Menu2} />
                </span>
              ) : (
                <img className="md:pr-6 sm: pr-3 h-5 -mt-5" src={Manu} />
              )}
              {button ? (
                <div className="fixed w-full md:px-14 sm: px-5">
                  <ul className="mt-7">
                    <li className="text-white text-xl">Home</li>
                    <div className="bg-white h-2 md:w-32 sm: w-20 rounded-xl mt-3" />
                    <li className="text-white md:text-xl sm:text-sm mt-7">
                      About Us
                    </li>
                    <li className="text-white md:text-xl sm:text-sm mt-5">
                      Hospitals & Medical Centers
                    </li>
                    <li className="text-white md:text-xl sm:text-sm mt-5">
                      Regional Outreach Centers
                    </li>
                    <li className="text-white md:text-xl sm:text-sm mt-5">
                      Media Resources
                    </li>
                    <li className="text-white md:text-xl sm:text-sm mt-5">
                      Join Us!
                    </li>
                    <div className="bg-white h-0.5 rounded-xl mt-16 mb-5"/>
                    <li className="text-white md:text-xl sm:text-sm mt-5">
                    Programs
                    </li>
                    <li className="text-white md:text-xl sm:text-sm mt-5">
                    Education
                    </li>
                    <li className="text-white md:text-xl sm:text-sm mt-5">
                    Research
                    </li>
                  </ul>
                </div>
              ) : null}
            </span>
          </div>
          {props.attributes.footnote && (
            <div
              className={`pb-60 footnote sm:text-lg md:text-xl pt-20 tracking-tight sm:font-medium py-4 ${
                props.attributes.footnoteAlignment === "center" && "text-center"
              }`}
              style={{ color: props.attributes.footnoteFontColor }}
              dangerouslySetInnerHTML={{ __html: props.attributes.footnote }}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default AgaKhanHealthService;
