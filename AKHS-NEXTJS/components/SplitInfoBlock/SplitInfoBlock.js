const SplitInfoBlock = (props1) => {
  // console.log(props)
  let props = {
    "attributes": {
      "fieldGroupName": "Page_Contentacf_Blocks_SplitInfoBlock",
      "blockHeading": "Hospital Admission",
      "blockDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "blockHeadingAndDescriptionAlignment": "center",
      "fontColor": "black",
      "enableBackgroundImage": true,
      "backgroundImage": {
        "sourceUrl": "http://localhost/www/akhs/wp-content/uploads/2021/06/city-town-center-scaled.jpg"
      },
      "backgroundColor": "white",
      "footnote": "<p>For all other services please <a href=\"https://www.google.com\">click here</a></p>\n",
      "footnoteAlignment": "left",
      "cards": [
        {
          "heading": "Prepare for your hospital stay",
          "description": "<ul class=\"ps-4 pe-0 mb-9 text-xs sm:text-sm md:text-base leading-6.5\">\n<li>Before you arrive to the Hospital for Admission</li>\n<li>What to Bring to the Hospital</li>\n<li>What you can expect when you arrive at the hospital gery.</li>\n<li>What You Can Expect During Hospital Discharge ​</li>\n</ul>\n",
          "ctaLabel": "Detail",
          "linkType": "external",
          "ctaLink": null,
          "ctaLinkExternal": "http://www.google.com"
        },
        {
          "heading": "Billing & Financial Services",
          "description": "<ul class=\"ps-4 pe-0 mb-9 text-xs sm:text-sm md:text-base leading-6.5\">\n<li>Emergrency Services Billing</li>\n<li>Behind emergency ward, Next to Emergency Pharmacy</li>\n</ul>\n",
          "ctaLabel": "Detail",
          "linkType": "internal",
          "ctaLink": {
            "uri": "/en/level-1/level-2/level-3/level-4/level-5/"
          },
          "ctaLinkExternal": "http://"
        },
        {
          "heading": "Billing & Financial Services",
          "description": "<ul class=\"ps-4 pe-0 mb-9 text-xs sm:text-sm md:text-base leading-6.5\">\n<li>Emergrency Services Billing</li>\n<li>Behind emergency ward, Next to Emergency Pharmacy</li>\n</ul>\n",
          "ctaLabel": "Detail",
          "linkType": "internal",
          "ctaLink": {
            "uri": "/en/home/sample-page/"
          },
          "ctaLinkExternal": "http://"
        }
      ]
    },
    "language": "en",
    "align": "center",
    "direction": "ltr"
  }
  const lengthOfCards = props.attributes.cards ? props.attributes.cards.length : 0,
    direction = props.direction

  let bgImage = ''
  let bgColor = ''
  if (props.attributes.enableBackgroundImage) {
    bgImage = props.attributes.backgroundImage.sourceUrl
  }
  return (
    <section
    align={center}
      dir={direction}
      className={``}
      style={{ backgroundImage: 'url("' + bgImage + '")' }}
    >
      <div className={`py-24 sm:py-28 md:py-32 lg:py-36 px-6 sm:px-12 md:px-24 ${lengthOfCards == 2 ? 'lg:px-16 xl:px-32' : 'xl:px-20 2xl:px-24 lg:px-8'} bg-${props.attributes.backgroundColor} bg-opacity-75`} >
        <div className={`mb-11 sm:mb-14 ${props.attributes.blockHeadingAndDescriptionAlignment === 'center' && 'text-center'}`}>
          <p className={`text-${props.attributes.fontColor} font-semibold text-xl sm:text-2xl md:text-28 -tracking-0.01em mb-1 sm:mb-3.5`}>
            {props.attributes.blockHeading}
          </p>
          <p className={`text-${props.attributes.fontColor} text-xs leading-5 sm:text-base sm:leading-7 -tracking-0.01em`}>
            {props.attributes.blockDescription}
          </p>
        </div>
        <div className={`mt-0.5 flex flex-row items-center lg:items-stretch lg:flex-row justify-center`}>
          {
            props.attributes.cards &&
            Object.keys(props.attributes.cards).map(((key, ind) => {
              const singleItem = props.attributes.cards[key]
              let link = '#'
              if (singleItem.linkType == "external") {
                link = singleItem.ctaLinkExternal
              } else {
                link = singleItem.ctaLink.uri
              }
              return (
                <>
                  <div
                    className={`max-w-xl w-full flex flex-col ${lengthOfCards == 2 ? 'lg:w-1/2' : 'lg:w-1/3'} items-start text-brownShade px-6 py-10 sm:px-12 ${lengthOfCards == 2 ? '' : 'lg:px-6 xl:px-12'} border-gray35 border-dashed border hover:text-white hover:bg-brownShade hover:border-brownShade hover:shadow-shadow4 group bg-white ${props.attributes.cards.length === ind + 1 ? '' : `mb-9 lg:mb-0 ${lengthOfCards == 2 ? "lg:me-8" : "lg:me-4 xl:me-8"}`}`}
                  >
                    <p className='font-semibold text-xl sm:text-2xl md:text-28 -tracking-0.01em mb-6'>
                      {singleItem.heading}
                    </p>
                    <div className='pe-0 mb-9 text-xs sm:text-sm md:text-base leading-6.5' dangerouslySetInnerHTML={{ __html: singleItem.description }} />
                    {
                      singleItem.ctaLabel &&
                      <a href={link} className='mt-auto text-sm font-semibold -tracking-0.01em border-2 border-brownShade group-hover:border-white py-3.5 px-14 inline-block w-full text-center sm:max-w-max'>
                        {singleItem.ctaLabel}
                      </a>
                    }

                  </div>
                </>
              )
            }))
          }
        </div>
        {
          props.attributes.footnote &&
          <div className={`footnote sm:text-lg md:text-xl tracking-tight sm:font-medium mt-4 ${props.attributes.footnoteAlignment === 'center' ? 'text-center' : ''}`}
            dangerouslySetInnerHTML={{ __html: props.attributes.footnote }} />
        }
      </div>
    </section>
  )
}

export default SplitInfoBlock
