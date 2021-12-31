import React from 'react'

const BackgroundImageAKHS = () => {
    let props = {
        "attributes": {
          "blockHeading": "Latest news in AKHS",
          "blockHeadingAndDescriptionAlignment": "center",
          "blockHeadingFontColor": "#FFFFFF",
          "enableBackgroundImage": true,
          "backgroundImage": {
            "sourceUrl": "/BackgroundImageAKHS.png"
          },
          "backgroundColor": "#0000004D",
          "footnote": "<p>For all other services please <a href=\"https://www.google.com\">click here</a></p>\n",
          "footnoteAlignment": "left",
          "footnoteFontColor": "#000000",
        },
        "language": "en",
        "align": "left",
        "direction": "ltr",
      }
      let bgImage = '/BackgroundImageAKHS.png'
      if (props.attributes.enableBackgroundImage) {
        bgImage = props.attributes.backgroundImage.sourceUrl
      }
    return (
        <section className='BackgroundHeight bg-cover' style={{ backgroundImage: 'url("' + bgImage + '")' }}
        dir={props.direction}
      >
        <div className=' h-full px-6 sm:px-10 md:px-14 ' style={{ backgroundColor: props.attributes.backgroundColor }}>
  
        <div className={`mt-0 mb-0 ${props.attributes.blockHeadingAndDescriptionAlignment === 'center' ? 'text-center ' : 'text-center sm:text-start'}`}>
            <p style={{ color: props.attributes.blockHeadingFontColor, }} className='lg:pt-44 md:pt-32 sm: pt-24 text-xl sm:text-2xl md:text-3xl font-extrabold'>{props.attributes.blockHeading}</p>
          </div>
  
          {/* footnote */}
          {/* {
            props.attributes.footnote &&
            <div className={`footnote sm:text-lg md:text-xl tracking-tight sm:font-medium py-4 ${props.attributes.footnoteAlignment === 'center' && 'text-center'}`}
              style={{ color: props.attributes.footnoteFontColor }}
              dangerouslySetInnerHTML={{ __html: props.attributes.footnote }} />
          } */}
        </div>
      </section>
    )
}

export default BackgroundImageAKHS
