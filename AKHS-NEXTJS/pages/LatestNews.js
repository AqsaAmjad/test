import aga1 from '../public/images/aga1.png'
import aga2 from '../public/images/aga2.png'
import aga3 from '../public/images/aga3.png'
import aga4 from '../public/images/aga4.png'
import Image from "next/image"
import aga5 from '../public/images/aga5.png'
import heroimg from '../public/images/hero image.png'
import InfiniteScroll from "react-infinite-scroll-component";
import react, {useState} from 'react'
const LatestNews = () => {
  const[noOfElement, setnoOfElement] = useState(3);
 const loadMore =()=>{
   setnoOfElement(noOfElement + noOfElement);
 }


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
    "direction": "ltr"
  }
  const data = {
    cardData:[
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
                id: 6,
                img: aga1,
                title: "Cardiology Services | CMS - Aga Khan University Hospital",
                des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
                },
                {
                    id: 7,
                    img: aga2,
                    title: "Cardiology Services | CMS - Aga Khan University Hospital",
                    des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
                    },
                    {
                      id: 8,
                      img: aga3,
                      title: "Cardiology Services | CMS - Aga Khan University Hospital",
                      des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
                      },
                      {
                        id: 9,
                        img: aga4,
                        title: "Cardiology Services | CMS - Aga Khan University Hospital",
                        des: "12-Aug-2020 — At the Aga Khan University Hospital, we are advocates of a healthy heart, our highly professional and trained staff are available to give you..",
                        },
    ]
  }

  const slice = data.cardData.slice(0, noOfElement);
  return (
    <div>
    <section className="grid grid-rows py-3"
    dir={props.direction}
  >
    <div  className='sm: pt-20 sm:pt-28 px-6 sm:px-5 md:px-9 lg:px-20 xl:px-24 mb-10'>
    <div className={`${props.attributes.blockHeadingAndDescriptionAlignment === 'center' ? 'text-center ' : 'text-center sm:text-start'}`}>
        <p  className='text-xl sm:text-2xl md:text-3xl font-extrabold'>{props.attributes.blockHeading}</p>
      </div>
    {slice.map((item)=>{
         return(
           <div className="-mb-12">
           <div className="lg:flex items-center md:flex md:flex-row sm: flex sm: flex-col-reverse mt-16 justify-center border border-gray35 border-dashed border py-5 lg:px-10 md:px-5 sm: px-3 hover:shadow-xl">
             <div className="xl:pe-40 md:pe-10">
               <h3 className="lg:text-xl md:text-base sm: text-sm font-bold sm: mt-4 md:mt-0">{item.title}</h3>
              <p  style={{color: "#5B5B5B"}} className="lg:text-base md:text-sm sm: text-xs mt-5">{item.des}</p>
             </div>
             <span className='w-10'>
             <Image className="" src={item.img}/>
            </span>
           </div>
           </div>
         )
    }
    )}
    </div>
   </section>
   {  slice < data.cardData  && 
   <button
    onClick={()=> loadMore()} className="w-full mx-auto p-2 px-6 sm:px-5 md:px-9 lg:px-20 xl:px-24">
        Load More
       </button>
}
  </div>
  )
}

export default LatestNews
