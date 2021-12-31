import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import aga1 from "../public/images/aga1.png";
import Image from "next/image";

import aga2 from "../public/images/aga2.png";
import aga3 from "../public/images/aga3.png";
import aga4 from "../public/images/aga4.png";
import aga5 from "../public/images/aga5.png";
const test = () => {
  const data = {
    cardData: [
      {
        id: 1,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 2,
        img: aga2,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 3,
        img: aga3,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 4,
        img: aga4,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 5,
        img: aga5,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 7,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 8,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 9,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 10,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 11,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 12,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 13,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 14,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 16,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 17,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 18,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 19,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 20,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 21,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 22,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 23,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 24,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 25,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 26,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 27,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 28,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 29,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
      {
        id: 30,
        img: aga1,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
      },
    ],
  };

  const [users, setUsers] = useState(data.cardData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesvisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesvisited, pagesvisited + usersPerPage)
    .map((item) => {
      return (
        <div className="-mb-4 xl:w-2/3 lg:w-3/4">
          <div className="items-start sm:flex sm:flex-row md:space-s-5 sm:space-s-3 flex flex-col-reverse py-5">
            <div className="">
              <h3 className="lg:text-xl  md:text-base sm:text-sm xs2:text-lg text-base sm:mt-0 mt-4 font-bold leading-6">
                {item.title}
              </h3>
              <p
                style={{ color: "#5B5B5B" }}
                className="md:text-15 sm:text-xs xs2:text-base text-xs  mt-4 leading-4 md:leading-6"
              >
                {item.des}
              </p>
            </div>
           <div className="relative md:w-4/5 lg:w-3/4 xl:w-1/2 sm:w-5/6 w-full md:h-32 sm:h-32 xs2:h-60">
          <img className="w-full h-full" src={item.img} />
       </div>
          </div>
        </div>
      );
    });
  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div dir="ltr" className="md:px-14 sm:px-12 xs2:px-12 px-8 lg:px-0 lg:ms-20 mb-10">
      <div className="mt-10">
      <h4  style={{ color: "#5B5B5B" }} className="text-lg leading-6 font-normal" >Search Results</h4>
        {displayUsers}</div>
      <ReactPaginate 
        className ="flex justify-center leading-normal font-normal lg:justify-start sm:space-s-6 text-gray36 mt-7 sm:text-lg text-xs space-s-3 text-gray-36 md:text-lg text-sm"
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName=""
        disabledLinkClassName={"paginationDisable"}
        activeClassName="text-blue4 font-bold"
        previousLinkClassName="prevBttns"
        nextLinkClassName="nextBttns"
      />
    </div>
  );
};

export default test;
