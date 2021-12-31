import React from "react";

const cardskeleton = () => {
  let props = {
    "attributes": {
      "blockHeading": "Latest News in AKHS",
      "blockHeadingAndDescriptionAlignment": "center",
      "backgroundColor": "",
      "footnote": "<p>For all other services please <a href=\"https://www.google.com\">click here</a></p>\n",
      "footnoteAlignment": "left",
      "footnoteFontColor": "#000000",
    },
    "language": "en",
    "align": "left",
    "direction": "rtl"
  }

  return (
    <div style={{overflow: "hidden"}} dir={props.direction} className="h-auto sm: ps-5 md:ps-0 mt-10 mb-10">
   <div className ="wrapContent flex items-start">
      <div className="animate-pulse w-full card border border-gray-400 border-4 px-3 py-3 sm: me-5 xl:me-10 lg:me-10 md:ms-20  sm:ms-10">
        <div class="md:h-72 sm: h-56 bg-gray35"></div>
        <div class="flex-1 space-y-3 py-1">
          <div class="h-6 bg-gray35 mt-5"></div>
          <div className="px-3">
            <div class="h-6 bg-gray35 mx-auto"></div>
          </div>
          <div className="px-7">
            <div class="h-6 bg-gray35 mx-auto"></div>
          </div>
        </div>
        <div class="h-10 bg-gray35 mt-7 md:w-44 xs2:w-36 w-24 mx-auto"></div>
      </div>
      <div className=" md:block animate-pulse w-full card border border-gray-400 border-4 px-3 py-3 lg:me-10 sm:-me-10 -me-56 xs:-me-40 xl:me-10">
        <div class="md:h-72 sm: h-56 bg-gray35"></div>
        <div class="flex-1 space-y-3 py-1">
          <div class="h-6 bg-gray35 mt-5"></div>
          <div className="px-3">
            <div class="h-6 bg-gray35 mx-auto"></div>
          </div>
          <div className="px-7">
            <div class="h-6 bg-gray35 mx-auto"></div>
          </div>
        </div>
        <div class="h-10 bg-gray35 mt-7 md:w-44 xs2:w-36 w-24 mx-auto"></div>
      </div>
      <div className="md:hidden sm: hidden xl:block lg:block animate-pulse w-full card border border-gray-400 border-4 lg:-me-10 px-3 py-3 xl:me-10">
        <div class="md:h-72 sm: h-56 bg-gray35"></div>
        <div class="flex-1 space-y-3 py-1">
          <div class="h-6 bg-gray35 mt-5"></div>
          <div className="px-3">
            <div class="h-6 bg-gray35 mx-auto"></div>
          </div>
          <div className="px-7">
            <div class="h-6 bg-gray35 mx-auto"></div>
          </div>
        </div>
        <div class="h-10 bg-gray35 mt-7 md:w-44 xs2:w-36 w-24 mx-auto"></div>
      </div>
      <div className="lg:hidden sm: hidden md:hidden xl:block animate-pulse w-full card border border-gray-400 border-4 px-3 xl:-me-10  py-3">
 <div className="">
 <div class="md:h-72 sm: h-56 bg-gray35"></div>
        <div class="flex-1 space-y-3 py-1">
          <div class="h-6 bg-gray35 mt-5"></div>
          <div className="px-3">
            <div class="h-6 bg-gray35 mx-auto"></div>
          </div>
          <div className="px-7">
            <div class="h-6 bg-gray35 mx-auto"></div>
          </div>
        </div>
        <div class="h-10 bg-gray35 mt-7 md:w-44 xs2:w-36 w-24 mx-auto"></div>
      </div>
      </div>
</div>
    </div>
   
  );
};

export default cardskeleton;
