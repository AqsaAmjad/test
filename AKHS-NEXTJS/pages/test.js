import React, {useState, useEffect} from 'react'
import { SkipForward } from 'react-feather'
import Skeleton,  { SkeletonTheme }  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import heroimg from '../public/images/heroimg.png'
import { FaArrowRight } from "react-icons/fa";
const test = () => {
  const data = {
    cardData:[
      {
      id: 1,
      img: heroimg,
      title: "Cardiology Services | CMS - Aga Khan University Hospital",
      des: "12-Aug-2020 — At the Aga Khan University Hospital",
      button: "load More",
      },
      {
        id: 2,
        img: heroimg,
        title: "Cardiology Services | CMS - Aga Khan University Hospital",
      des: "12-Aug-2020 — At the Aga Khan University Hospital",
      button: "load More",
        },
        {
          id: 3,
          img: heroimg,
          title: "Cardiology Services | CMS - Aga Khan University Hospital",
          des: "12-Aug-2020 — At the Aga Khan University Hospital",
          button: "load More",
          },
          {
            id: 4,
            img: heroimg,
            title: "Cardiology Services | CMS - Aga Khan University Hospital",
            des: "12-Aug-2020 — At the Aga Khan University Hospital",
            button: "load More",
            },
            ]
          }
  const [isLaoding, setIsLoading] = useState(true);
   useEffect(()=>{
     setTimeout(() => {
       setIsLoading(false);
     }, 5000);
   },[])

  const loader =()=>{
    return (
      <section className="flex px-10 pt-10 space-x-7">
      {
        data.cardData.map((items) =>
        {
          return(
          <div className="card border border-gray35 px-5 py-5">
           <Skeleton height={300}/>
            <h3><Skeleton height={50} width={290}/></h3>
             <p>
          <Skeleton height={20} width={290}/>
           </p>
           <span><Skeleton height={30}/>
          
           </span>
           </div>
         
          )
        }
        )
      }
    </section>
    )
  }
  if (isLaoding){
   return(loader())
  }
  else{
    return (
    <section className="lg:flex lg:px-10 md:px-40 pt-10 sm: px-5 lg:space-x-7">
      {
        data.cardData.map((items) =>
        {
          return(
          <div className="mb-10 card border border-gray35 px-5 py-5">
            <img src={items.img} className="h-80 mx-auto"/>
            <h3 className="pt-7 text-base text-center  font-medium">{items.title}</h3>
             <p className="pt-4 text-sm text-center">
            {items.des}
           </p>
           <button className="flex text-xs items-center border border-gray-600 mt-2 px-3 py-1 uppercase mx-auto">{items.button}
           <span className="ml-5">
             <FaArrowRight/>
           </span>
           </button>
           </div>
         
          )
        }
        )
      }
    </section>
  )
    }
}


export default test
