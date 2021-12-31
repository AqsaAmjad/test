import SwiperCore, { Navigation, Pagination, A11y } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { HiArrowNarrowLeft, HiArrowNarrowRight} from "react-icons/hi";
import cardimg from '../public/images/swipper.png'
SwiperCore.use([Navigation, Pagination, A11y]);

const OurPartnershipProject = () => {
    const [results, setResults] = useState(false);
    const [results1, setResults1] = useState(false);
    const [results2, setResults2] = useState(false);
    const [show, setshow] = useState(false);
    const [show1, setshow1] = useState(false);
    const [show2, setshow2] = useState(false);
    let props = {
      "attributes": {
        "blockHeading": "Our Partnership Projects",
        "blockHeadingAndDescriptionAlignment": "center",
        "blockHeadingFontColor": "#D12D2D",
        "cardDescription": "The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3 million private-public four-year evidence-based project funded by Agence Française de Développement (AFD) and Aga Khan Foundation (AKF). It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania.",
        "cardHeading": "The Tanzania Cancer Care Project (TCCP)",
        "enableBackgroundImage": true,
        "backgroundImage": {
          "sourceUrl": ""
        },
        "backgroundColor": "",
        "footnote": "<p>For all other services please <a href=\"https://www.google.com\">click here</a></p>\n",
        "footnoteAlignment": "left",
        "footnoteFontColor": "#000000",
        
      },
    
      "language": "en",
      "align": "left",
      "direction": "ltr" 
    }
    return (
        <section dir={props.direction} className="pt-24 sm:pt-28 px-6 sm:px-14 md:px-16 lg:px-7 xl:px-20" >
      <div className="lg:px-24">
       <div className={`${props.attributes.blockHeadingAndDescriptionAlignment === 'center' ? 'text-center ' : 'text-center sm:text-start'}`}>
        <p style={{ color: props.attributes.blockHeadingFontColor }} className='lg:text-3xl sm:text-xl md:text-2xl font-extrabold'>{props.attributes.blockHeading}</p>
        <hr className={`lg:border-gray15 md:border-brownShade  lg:w-80 md:w-80 mt-4 max-w-ful sm: w-28 sm: border-brownShade  ${props.attributes.blockHeadingAndDescriptionAlignment === 'center' ?'mx-auto':'mx-auto sm:mx-0'}`} />
        </div>
        </div>
        <Swiper className="mainContainer"
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{ nextEl: '.nextBtn', prevEl: '.prevBtn' }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        pagination={{
          "clickable": true,
          "bulletClass": `lg:hidden inline-block mx-1 mb-14 rounded-full opacity-100 swiper-pagination-bullet`,
          "bulletActiveClass": "bg-black w-2 h-2 sm:w-3 sm:h-3",
        }}
      >
        <SwiperSlide className="lg:px-24">
          <div className="lg:grid grid-cols-3 lg:mt-28 md:mt-10 sm: mt-10 mx-auto">
            <div className="col-span-2 lg:pe-20 justify-self-end">
              <h3 className={`font-bold lg:text-3xl md:text-2xl sm: text-xl`}>{props.attributes.cardHeading}</h3>
          <div className={`lg:text-base md:text-sm sm: text-xs  mt-10`}  dangerouslySetInnerHTML={{ __html: props.attributes.cardDescription}} />
           <p className={`lg:text-base md:text-sm sm: text-xs mt-10 ${results? "text-black" : "opacity-50"}`}>The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT), </p>
         <div className="md:flex md:justify-center sm: flex sm: justify-center lg:justify-start">
            <button className="lg:mx-auto"
                onClick={() => {
                  setshow(!show);
                  setResults(!results);
                }}
              >
                {show ? (
                  <FaChevronUp className="mt-7 mb-5 " />
                ) : (
                  <FaChevronDown className="mt-7 mb-5" />
                )}
              </button>
              </div>
            </div>
            <div className="sm: pb-5 justify-self-end">              
         <img className="lg:ml-0 lg:px-0 md:mx-auto sm: mx-auto" src={cardimg}/>
        </div>
        </div>
       </SwiperSlide>
       <SwiperSlide className="lg:px-24">
          <div className="lg:grid grid-cols-3 lg:mt-28 md:mt-10 sm: mt-10 mx-auto">
            <div className="col-span-2 lg:pe-20 justify-self-center">
              <h3 className={`font-bold lg:text-3xl md:text-2xl sm: text-xl`}>{props.attributes.cardHeading}</h3>
          <div className={`lg:text-base md:text-sm sm: text-xs  mt-10`}  dangerouslySetInnerHTML={{ __html: props.attributes.cardDescription}} />
           <p className={`lg:text-base md:text-sm sm: text-xs mt-10 ${results1? "text-black" : "opacity-50"}`}>The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT), </p>
         <div className="md:flex md:justify-center sm: flex sm: justify-center lg:justify-start">
            <button className="lg:mx-auto"
                onClick={() => {
                  setshow1(!show1);
                  setResults1(!results1);
                }}
              >
                {show1 ? (
                  <FaChevronUp className="h-5 w-5 mt-7 mb-5 " />
                ) : (
                  <FaChevronDown className="h-5 w-5  mt-7  mb-5" />
                )}
              </button>
              </div>
            </div>
            <div className="sm: pb-5 justify-self-end">              
         <img className="lg:ml-0 lg:px-0 md:mx-auto sm: mx-auto" src={cardimg}/>
        </div>
        </div>
       </SwiperSlide>
       <SwiperSlide className="lg:px-24">
          <div className="lg:grid grid-cols-3 lg:mt-28 md:mt-10 sm: mt-10 mx-auto">
            <div className="col-span-2 lg:pe-20 justify-self-center">
              <h3 className={`font-bold lg:text-3xl md:text-2xl sm: text-xl`}>{props.attributes.cardHeading}</h3>
          <div className={`lg:text-base md:text-sm sm: text-xs  mt-10`}  dangerouslySetInnerHTML={{ __html: props.attributes.cardDescription}} />
           <p className={`lg:text-base md:text-sm sm: text-xs mt-10 ${results2? "text-black" : "opacity-50"}`}>The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT), </p>
         <div className="md:flex md:justify-center sm: flex sm: justify-center lg:justify-start">
            <button className="lg:mx-auto"
                onClick={() => {
                  setshow2(!show2);
                  setResults2(!results2);
                }}
              >
                {show2 ? (
                  <FaChevronUp className="h-5 w-5 mt-7 mb-5 " />
                ) : (
                  <FaChevronDown className="h-5 w-5  mt-7  mb-5" />
                )}
              </button>
              </div>
            </div>
            <div className="sm: pb-5 justify-self-end">              
         <img className="lg:ml-0 lg:px-0 md:mx-auto sm: mx-auto" src={cardimg}/>
        </div>
        </div>
       </SwiperSlide>
             <button className={`prevBtn focus:outline-none hidden h-10 w-10 lg:inline-block absolute ${props.direction === 'ltr' ? 'left-0 ' : 'right-0'} bg-brownShade  cursor-pointer p-1.5 top-1/2 z-10 `} >
              {
                props.direction === 'ltr' ?
                  <HiArrowNarrowLeft className='h-10 w-9 pb-3 pr-2 text-white' />
                  :
                  < HiArrowNarrowRight className='h-10 w-9 pb-3 pr-2 text-white' />
              }
            </button>

           
            <button className={`nextBtn focus:outline-none hidden h-10 w-10 lg:inline-block absolute ${props.direction === 'ltr' ? 'right-0 ' : 'left-0'} bg-brownShade  cursor-pointer p-1.5 top-1/2 z-10 `} >
              {
                props.direction === 'ltr' ?
                  < HiArrowNarrowRight className='h-10 w-9 pb-3 pr-2 text-white' />
                  :
                  <HiArrowNarrowLeft className='h-10 w-9 pb-3 pr-2 text-white' />
              }
            </button>
            {
        props.attributes.footnote &&
        <div className={`lg:px-24 mt-6 footnote sm:text-lg md:text-xl tracking-tight sm:font-medium py-4 ${props.attributes.footnoteAlignment === 'center' && 'text-center'}`}
          style={{ color: props.attributes.footnoteFontColor }}
          dangerouslySetInnerHTML={{ __html: props.attributes.footnote }} />
      }
  </Swiper>
 
  </section>
    )
}

export default OurPartnershipProject
