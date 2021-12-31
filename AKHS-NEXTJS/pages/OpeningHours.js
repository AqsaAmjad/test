import React from 'react'

const OpeningHours = () => {
    let props = {
        "attributes": {
          "blockHeading": "Opening Hours:",
          "blockDescription": "Porta semper lacus cursus and feugiat primis ultrice ligula risus auctor tempus feugiat and dolor lacinia cursus Porta semper lacus cursus and feugiat primis ultrice ligula risus auctor tempus feugiat and dolor lacinia cursus Porta semper lacus cursus and feugiat primis ultrice ligula risus auctor tempus feugiat and dolor lacinia cursus",
        
          "blockHeadingFontColor": "#202020",
          
          "enableBackgroundImage": true,
          "backgroundImage": {
            "sourceUrl": "/OpeningHour.png"
          },
          "backgroundColor": "#000000BA",
          "footnote": "<p>For all other services please <a href=\"https://www.google.com\">click here</a></p>\n",
          "footnoteAlignment": "left",
          "footnoteFontColor": "#000000",
        },
        "language": "en",
        "align": "left",
        "direction": "ltr"
      }
      let bgImage = '/OpeningHour.png'
      if (props.attributes.enableBackgroundImage) {
        bgImage = props.attributes.backgroundImage.sourceUrl
      }
    
    return (
        <section className='Background bg-cover mt-10' style={{ backgroundImage: 'url("' + bgImage + '")'}}
        dir={props.direction}
      >
        <div className='h-full' style={{ backgroundColor: props.attributes.backgroundColor }}>
        <div className="md:flex lg:px-20 inline-block align-middle md:px-10 sm: px-7 lg:pt-10 xl:pt-24 md:pt-16 sm: pt-24">
            <div className="md:w-2/5 lg:me-20 md:me-10">
        <h3 className="lg:text-3xl md:text-lg sm: text-base text-white font-medium">{props.attributes.blockHeading}</h3>
        <p className="lg:text-base md:text-sm sm: text-xs text-white mt-5">{props.attributes.blockDescription}</p>
        <div style={{borderColor: "#D12D2D"}} className="border border-4 lg:h-14 h-10 mt-6"></div>
        </div>
        <div className="md:w-3/5 lg:text-xl md:text-sm sm: text-xs text-white space-y-5 mt-7 pb-28">
            <p className="border-b-2 border-dashed  border-gray35 pb-4">Mon – Wed: 9:00 AM – 7:00 PM</p>
            <p className="border-b-2 border-dashed  border-gray35 pb-4">Thursday: 9:00 AM – 6:30 PM</p>
            <p className="border-b-2 border-dashed  border-gray35 pb-4">Friday: 9:00 AM – 6:30 PM</p>
            <p className="border-b-2 border-dashed  border-gray35 pb-4">Sat – Sun: Closed</p>
            
            </div>

        </div>
       
        </div>
        {/* {
            props.attributes.footnote &&
            <div className={`lg:pl-20 md:pl-10 sm: pl-4 footnote sm:text-lg md:text-xl tracking-tight sm:font-medium py-4 ${props.attributes.footnoteAlignment === 'center' && 'text-center'}`}
              style={{ color: props.attributes.footnoteFontColor }}
              dangerouslySetInnerHTML={{ __html: props.attributes.footnote }} />
          } */}
      </section>
    )
}

export default OpeningHours
