import React from 'react'

const cardskeleton2 = () => {
  let props = {
    "language": "en",
    "align": "left",
    "direction": "rtl"
  }
    return (
        <div dir={props.direction} className="md:mt-24 sm: mt-20 md:px-24 mb-10 sm: px-8">
            <div className="sm:flex hidden">
         <div className="animate-pulse w-full me-10">
        <div class="lg:h-72 sm:h-56 bg-gray35"></div>
        <div class="flex-1 space-y-3 py-1">
          <div class="h-6 bg-gray35 mt-5"></div>
          <div className="me-24">
            <div class="h-6 bg-gray35"></div>
          </div>
        </div>
        <div className="me-40">
        <div class="h-5 bg-gray35 mt-5"></div>
        </div>
      </div>
      <div className="animate-pulse w-full">
        <div class="lg:h-72 sm:h-56 bg-gray35"></div>
        <div class="flex-1 space-y-3 py-1">
          <div class="h-6 bg-gray35 mt-5"></div>
          <div className="me-24">
            <div class="h-6 bg-gray35"></div>
          </div>
        </div>
        <div className="me-40">
        <div class="h-5 bg-gray35 mt-5"></div>
        </div>
      </div>
      </div>
      <div className="sm:hidden block">
      <div className="flex animate-pulse mt-5 w-full me-10">
        <div class=" h-32 w-full bg-gray35"></div>
        <div className="w-full">
          <div class="h-5  bg-gray35  ms-5 "></div>
          <div class="h-5 mt-3 bg-gray35  ms-5 me-8"></div>
          <div style={{marginTop: "59px"}} class="h-4  bg-gray35 ms-5  me-16"></div>
          </div>
      </div>
      <div className="flex animate-pulse mt-5 w-full me-10">
        <div class=" h-32 w-full bg-gray35"></div>
        <div className="w-full">
          <div class="h-5  bg-gray35  ms-5"></div>
          <div class="h-5 mt-3 bg-gray35 ms-5 me-8"></div>
          <div style={{marginTop: "59px"}} class="h-4  bg-gray35 ms-5  me-16"></div>
          </div>
      </div>
      </div>
        </div>
    )
}

export default cardskeleton2
