import aga1 from "../public/images/aga1.png";
import aga2 from "../public/images/aga2.png";
import aga3 from "../public/images/aga3.png";
import aga4 from "../public/images/aga4.png";
import aga5 from "../public/images/aga5.png";
import hero from "../public/images/heroimg.png";
import heroimg from "../public/images/hero image.png";
import { fill } from "tailwindcss/defaultTheme";
const LatestNews = () => {
  let props = {
    attributes: {
      blockHeading: "Latest News in AKHS",
      blockHeadingAndDescriptionAlignment: "center",
      blockHeadingFontColor: "#D12D2D",
      blockHeadingFontSize: "28px",
      cardHeading: "Cardiology Services | CMS - Aga Khan University Hospital",
      cardDescription:
        "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
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
  let bgImage = "";
  if (props.attributes.enableBackgroundImage) {
    bgImage = props.attributes.backgroundImage.sourceUrl;
  }
  return (
    <section dir={props.direction}>
      <div className="pt-24 sm:pt-28 px-8 sm:px-14 md:px-20 lg:px-28 xl:px-56 mb-10">
        <div
          className={`${
            props.attributes.blockHeadingAndDescriptionAlignment === "center"
              ? "text-center "
              : "text-center sm:text-start"
          }`}
        >
          <p
            style={{
              color: props.attributes.blockHeadingFontColor,
              fontSize: props.attributes.blockHeadingFontSize,
            }}
            className="text-xl sm:text-2xl md:text-3xl font-bold"
          >
            {props.attributes.blockHeading}
          </p>
        </div>
        <div className="mt-10 mx-auto lg:flex items-start md:flex md:flex-row sm: flex sm: flex-col-reverse justify-center border border-gray35 border-dashed border py-4 lg:px-7 md:px-5 sm: px-3 hover:shadow-xl">
          <div className="xl:pe-10 md:pe-5 w-full">
            <h1 style={{color: "#5B5B5B"}} className="xl:text-xl lg:text-lg md:text-base xs2:text-lg text-base md:mt-0 mt-5 font-bold ">
              {props.attributes.cardHeading}
            </h1>
            <p
              style={{ color: "#5B5B5B" }}
              className="lg:text-15 md:text-sm xs2:text-base  text-xs xl:mt-10 mt-5 leading-4 lg:leading-5"
            >
              {props.attributes.cardDescription}
            </p>
          </div>
          <div className="relative md:w-1/2 w-full md:h-36 h-60">
          <img className="w-full h-full" src={aga1} />
       </div>
        </div>
        <div className="mt-10 mx-auto lg:flex items-start md:flex md:flex-row sm: flex sm: flex-col-reverse justify-center border border-gray35 border-dashed border py-4 lg:px-7 md:px-5 sm: px-3 hover:shadow-xl">
          <div className="xl:pe-10 md:pe-5 w-full">
            <h1 style={{color: "#5B5B5B"}} className="xl:text-xl lg:text-lg md:text-base xs2:text-lg text-base md:mt-0 mt-5 font-bold ">
              {props.attributes.cardHeading}
            </h1>
            <p
              style={{ color: "#5B5B5B" }}
              className="lg:text-15 md:text-sm xs2:text-base  text-xs xl:mt-10 mt-5 leading-4 lg:leading-5"
            >
              {props.attributes.cardDescription}
            </p>
          </div>
          <div className="relative md:w-1/2 w-full md:h-36 h-60">
          <img className="w-full h-full" src={aga2} />
       </div>
        </div>
        <div className="mt-10 mx-auto lg:flex items-start md:flex md:flex-row sm: flex sm: flex-col-reverse justify-center border border-gray35 border-dashed border py-4 lg:px-7 md:px-5 sm: px-3 hover:shadow-xl">
          <div className="xl:pe-10 md:pe-5 w-full">
            <h1 style={{color: "#5B5B5B"}} className="xl:text-xl lg:text-lg md:text-base xs2:text-lg text-base md:mt-0 mt-5 font-bold ">
              {props.attributes.cardHeading}
            </h1>
            <p
              style={{ color: "#5B5B5B" }}
              className="lg:text-15 md:text-sm xs2:text-base  text-xs xl:mt-10 mt-5 leading-4 lg:leading-5"
            >
              {props.attributes.cardDescription}
            </p>
          </div>
          <div className="relative md:w-1/2 w-full md:h-36 h-60">
          <img className="w-full h-full" src={aga3} />
       </div>
        </div>
        <div className="mt-10 mx-auto lg:flex items-start md:flex md:flex-row sm: flex sm: flex-col-reverse justify-center border border-gray35 border-dashed border py-4 lg:px-7 md:px-5 sm: px-3 hover:shadow-xl">
          <div className="xl:pe-10 md:pe-5 w-full">
            <h1 style={{color: "#5B5B5B"}} className="xl:text-xl lg:text-lg md:text-base xs2:text-lg text-base md:mt-0 mt-5 font-bold ">
              {props.attributes.cardHeading}
            </h1>
            <p
              style={{ color: "#5B5B5B" }}
              className="lg:text-15 md:text-sm xs2:text-base  text-xs xl:mt-10 mt-5 leading-4 lg:leading-5"
            >
              {props.attributes.cardDescription}
            </p>
          </div>
          <div className="relative md:w-1/2 w-full md:h-36 h-60">
          <img className="w-full h-full" src={aga4} />
       </div>
        </div>
        <div className="mt-10 mx-auto lg:flex items-start md:flex md:flex-row sm: flex sm: flex-col-reverse justify-center border border-gray35 border-dashed border py-4 lg:px-7 md:px-5 sm: px-3 hover:shadow-xl">
          <div className="xl:pe-10 md:pe-5 w-full">
            <h1 style={{color: "#5B5B5B"}} className="xl:text-xl lg:text-lg md:text-base xs2:text-lg text-base md:mt-0 mt-5 font-bold ">
              {props.attributes.cardHeading}
            </h1>
            <p
              style={{ color: "#5B5B5B" }}
              className="lg:text-15 md:text-sm xs2:text-base  text-xs xl:mt-10 mt-5 leading-4 lg:leading-5"
            >
              {props.attributes.cardDescription}
            </p>
          </div>
          <div className="relative md:w-1/2 w-full md:h-36 h-60">
          <img className="w-full h-full" src={aga5} />
       </div>
        </div>
        <div className="mt-10 mx-auto lg:flex items-start md:flex md:flex-row sm: flex sm: flex-col-reverse justify-center border border-gray35 border-dashed border py-4 lg:px-7 md:px-5 sm: px-3 hover:shadow-xl">
          <div className="xl:pe-10 md:pe-5 w-full">
            <h1 style={{color: "#5B5B5B"}} className="xl:text-xl lg:text-lg md:text-base xs2:text-lg text-base md:mt-0 mt-5 font-bold ">
              {props.attributes.cardHeading}
            </h1>
            <p
              style={{ color: "#5B5B5B" }}
              className="lg:text-15 md:text-sm xs2:text-base  text-xs xl:mt-10 mt-5 leading-4 lg:leading-5"
            >
              {props.attributes.cardDescription}
            </p>
          </div>
          <div className="relative md:w-1/2 w-full md:h-36 h-60">
          <img className="w-full h-full" src={aga1} />
       </div>
        </div>
        {props.attributes.footnote && (
          <div
            className={`footnote sm:text-lg md:text-xl tracking-tight sm:font-medium py-4 ${
              props.attributes.footnoteAlignment === "center" && "text-center"
            }`}
            style={{ color: props.attributes.footnoteFontColor }}
            dangerouslySetInnerHTML={{ __html: props.attributes.footnote }}
          />
        )}
      </div>
    </section>
  );
};

export default LatestNews;
