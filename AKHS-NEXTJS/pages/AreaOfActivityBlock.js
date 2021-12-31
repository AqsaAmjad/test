import { Disclosure, Listbox, Transition } from '@headlessui/react'
import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { Fragment, useState } from 'react'
import { addFocalPoint, dictionaryFunction, isValidUrl } from './../lib/globalFunctions';

const AreaOfActivityBlock = (props1) => {
  console.log(props1)

  let props = {
      "attributes": {
        "openLinksInANewTab": true,
        "componentHidden": "AreaOfActivityBlock",
        "areaOfActivityItem": [
            {
                "title": "AGA KHAN FOUNDATION CANADA",
                "optionalStatsTile": {
                    "title": "2.1M beneficiaries",
                    "subTitle": "AKDN’s agriculture and food security work has 2.1 million beneficiaries",
                    "icon": {
                        "url": "https://www.datocms-assets.com/53832/1638780262-canadaaastat1.png",
                        "focalPoint": {
                            "y": 0.5,
                            "x": 0.5
                        }
                    }
                },
                "linkListTitle": "LEARN MORE ABOUT",
                "linkList": [
                    {
                        "ctaLink": "/home/demo",
                        "ctaCaption": "Cultural Development Overview"
                    },
                    {
                        "ctaLink": "https://www.akdn.org",
                        "ctaCaption": "Link 2"
                    },
                    {
                        "ctaLink": "https://www.akdn.org",
                        "ctaCaption": "Link 3"
                    },
                    {
                        "ctaLink": "https://www.akdn.org",
                        "ctaCaption": "Link 4"
                    },
                    {
                        "ctaLink": "https://www.google.com",
                        "ctaCaption": "Link 5"
                    }
                ],
                "isdropdown": false,
                "isagency": false,
                "image": {
                    "url": "https://www.datocms-assets.com/53832/1638779651-canadaareaofactivity1.png",
                    "focalPoint": {
                        "y": 0.5,
                        "x": 0.5
                    }
                },
                "description": "<div class=\"inspect_panels--copyableRow--2_PiZ inspect_panels--highlightRow--21P9S\">\n  <div class=\"inspect_panels--propertyRowContent--7Y-mu inspect_panels--copyableRow--2_PiZ inspect_panels--highlightRow--21P9S\">\n    <div class=\"inspect_panels--contentProperty--2Z1QI text--fontPos11--RSei3 text--_fontBase--YWDo0 ellipsis--ellipsisAfter8Lines--2rn32 ellipsis--_ellipsisAfterNLines--26JkZ\">\n      <div>\n        <div class=\"inspect_panels--copyableRow--2_PiZ inspect_panels--highlightRow--21P9S\">\n          <div class=\"inspect_panels--propertyRowContent--7Y-mu inspect_panels--copyableRow--2_PiZ inspect_panels--highlightRow--21P9S\">\n            <div class=\"inspect_panels--contentProperty--2Z1QI text--fontPos11--RSei3 text--_fontBase--YWDo0 ellipsis--ellipsisAfter8Lines--2rn32 ellipsis--_ellipsisAfterNLines--26JkZ\"><strong>Lorem Ipsum</strong><span>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                "ctaLink": "/home/demo",
                "ctaCaption": "LEARN MORE %copyright_year_end%",
                "country": "Canada",
                "areaOfActivity": "Cultural Development Overview %copyright_year_end%",
                "agencyReference": null
            },
            {
                "title": "FOCUS HUMANITARIAN ASSISTANCE (CANADA)",
                "optionalStatsTile": {
                    "title": "46,491 people",
                    "subTitle": "AKDN has helped 46,491 people to recover from natural disasters",
                    "icon": {
                        "url": "https://www.datocms-assets.com/53832/1638780272-canadaaastat3.png",
                        "focalPoint": {
                            "y": 0.5,
                            "x": 0.5
                        }
                    }
                },
                "linkListTitle": "LEARN MORE ABOUT",
                "linkList": [],
                "isdropdown": true,
                "isagency": false,
                "image": {
                    "url": "https://www.datocms-assets.com/53832/1638784702-canadaareaofactivity4.png",
                    "focalPoint": {
                        "y": 0.5,
                        "x": 0.5
                    }
                },
                "description": "<div><p><strong>Lorem Ipsum</strong><span>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took agalley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p>\n",
                "ctaLink": "",
                "ctaCaption": "",
                "country": "Canada",
                "areaOfActivity": "",
                "agencyReference": null
            },
            {
                "title": "Area of Activity",
                "optionalStatsTile": {
                    "title": "35,000 people",
                    "subTitle": "now have visited parks and gardens in Canada",
                    "icon": {
                        "url": "https://www.datocms-assets.com/53832/1638786463-canadastat4.png",
                        "focalPoint": {
                            "y": 0.5,
                            "x": 0.5
                        }
                    }
                },
                "linkListTitle": "LEARN MORE ABOUT",
                "linkList": [],
                "isdropdown": true,
                "isagency": false,
                "image": {
                    "url": "https://www.datocms-assets.com/53832/1638784707-canadaareaofactivity5.png",
                    "focalPoint": {
                        "y": 0.5,
                        "x": 0.5
                    }
                },
                "description": "<p>AKFC&rsquo;s work demonstrates that change is possible when poverty is tackled on multiple fronts, over the long-term, and with communities in charge. &nbsp;AKFC believes that lasting progress depends on partnerships with a wide range of stakeholders overseas and in Canada &ndash; from local individuals and communities to local and international businesses, governments and non-governmental organisations.</p>\n",
                "ctaLink": "https://akdn.org",
                "ctaCaption": "LEARN MORE",
                "country": "Canada",
                "areaOfActivity": "Canada",
                "agencyReference": null
            },
            {
                "title": "Disaster preparedness and response",
                "optionalStatsTile": {
                    "title": "5904 people",
                    "subTitle": "trained in employable skills",
                    "icon": {
                        "url": "https://www.datocms-assets.com/53832/1638780268-canadaaastat2.png",
                        "focalPoint": {
                            "y": 0.5,
                            "x": 0.5
                        }
                    }
                },
                "linkListTitle": "LEARN MORE ABOUT",
                "linkList": [],
                "isdropdown": true,
                "isagency": false,
                "image": {
                    "url": "https://www.datocms-assets.com/53832/1638779698-canadaareaofactivity2.png",
                    "focalPoint": {
                        "y": 0.5,
                        "x": 0.5
                    }
                },
                "description": "<div>\n  <div class=\"inspect_panels--copyableRow--2_PiZ inspect_panels--highlightRow--21P9S\">\n    <div class=\"inspect_panels--propertyRowContent--7Y-mu inspect_panels--copyableRow--2_PiZ inspect_panels--highlightRow--21P9S\">\n      <div class=\"inspect_panels--contentProperty--2Z1QI text--fontPos11--RSei3 text--_fontBase--YWDo0 ellipsis--ellipsisAfter8Lines--2rn32 ellipsis--_ellipsisAfterNLines--26JkZ\">trained in employable skills</div>\n    </div>\n  </div>\n</div>\n",
                "ctaLink": "https://www.akdn.org",
                "ctaCaption": "Learn More",
                "country": "AGA KHAN MUSEUM",
                "areaOfActivity": "Disaster Preparedness",
                "agencyReference": null
            },
            {
                "title": "GLOBAL CENTRE FOR PLURALISM",
                "optionalStatsTile": {
                    "title": "46,491 people",
                    "subTitle": "AKDN has helped 46,491 people to recover from natural disasters",
                    "icon": {
                        "url": "https://www.datocms-assets.com/53832/1638780272-canadaaastat3.png",
                        "focalPoint": {
                            "y": 0.5,
                            "x": 0.5
                        }
                    }
                },
                "linkListTitle": "LEARN MORE ABOUT %copyright_year_end%",
                "linkList": [
                    {
                        "ctaLink": "/home",
                        "ctaCaption": "%copyright_year_end%"
                    }
                ],
                "isdropdown": false,
                "isagency": false,
                "image": {
                    "url": "https://www.datocms-assets.com/53832/1638779703-canadaareaofactivity3.png",
                    "focalPoint": {
                        "y": 0.5,
                        "x": 0.5
                    }
                },
                "description": "<p><strong>%copyright_year_end% We partner</strong> with government and development agencies to offer education from pre-primary to university levels, with special attention to educating girls and female teachers. We aim to give children and young people the knowledge, <em>skills, attitudes</em> and values that help them interact effectively with the world while contributing to society. By working with local education authorities to improve schools, establishing government-recognised local community classes for those too distant to reach a school, and removing constraints to education, by for example building toilets for girls, we have reached 56 percent of the school-age population in<a href=\"https://www.google.com\" target=\"_blank\" rel=\"noopener\"> programme areas</a>.</p>\n\n<ol>\n  <li>one</li>\n  <li>two</li>\n</ol>\n",
                "ctaLink": "https://www.akdn.org",
                "ctaCaption": "LEARN MORE %copyright_year_end%",
                "country": "Canada",
                "areaOfActivity": "Education",
                "agencyReference": null
            }
        ],
        "anchorId": ""
    },
      "language": "en",
      "direction": "ltr"
    }

  const maxLength = 316
  const [selected, setSelected] = useState(false)

  return (
    <section id={props.attributes.anchorId} className='anchor flex flex-wrap pt-10 sm:pt-14'>
      {
        Object.keys(props.attributes.areaOfActivityItem).map((key => {
          const singleItem = props.attributes.areaOfActivityItem[key]
          if (singleItem.linkList != '' && selected == false) {
            setSelected(singleItem.linkList[0])
            // console.log(selected)
          }
          let wysiwyg = singleItem.description.replace(/\n\n/g, "<br />")
          wysiwyg = wysiwyg.replace(/&nbsp;/g, " ")

          return (
            <>
              <div className='w-full sm:px-2 lg:px-5'>
                <div className='mb-14 sm:mb-20 tracking-wide'>
                  {
                    singleItem.image &&
                    <img src={singleItem.image.url} className='w-full h-72 2xl:h-80 object-cover' style={{ objectPosition: addFocalPoint(singleItem.image.focalPoint.x, singleItem.image.focalPoint.y) }} />
                  }
                  <div className='px-6 sm:px-3'>
                    {
                      singleItem.isagency == false && 
                      <p className='text-gray5 text-lg sm:text-xl md:text-2xl font-bold text-center py-5 sm:h-24 xl:h-28 uppercase'>
                        { dictionaryFunction(singleItem.title, false, props.datoDictionary)}
                      </p>
                    }
                    {
                      singleItem.isagency == true && singleItem.agencyReference &&
                      <div className='flex py-5 items-center justify-center sm:h-24 xl:h-28'>
                        <img src={singleItem.agencyReference.logo && singleItem.agencyReference.logo.url} className='w-12 sm:w-14 h-12 sm:h-14 md:w-16 md:h-16 max-w-none object-cover' style={{ objectPosition: addFocalPoint(singleItem.agencyReference.logo.focalPoint.x, singleItem.agencyReference.logo.focalPoint.y) }} />
                        <p className='text-gray5 text-lg sm:text-xl md:text-2xl font-bold text-center uppercase'>
                          {singleItem.agencyReference.name}
                        </p>
                      </div>
                    }
                    {
                      singleItem.optionalStatsTile &&
                      <div className='bg-customBlue bg-opacity-5 text-center p-6 mb-5'>
                        {
                          singleItem.optionalStatsTile.icon &&
                          <img src={singleItem.optionalStatsTile.icon && singleItem.optionalStatsTile.icon.url}
                          className='mx-auto object-cover' style={{ objectPosition: addFocalPoint(singleItem.optionalStatsTile.icon.focalPoint.x, singleItem.optionalStatsTile.icon.focalPoint.y) }} />
                        }
                        <p className='text-gray5 text-2xl my-2 font-medium leading-9'>
                          {dictionaryFunction(singleItem.optionalStatsTile.title , false, props.datoDictionary)}
                        </p>
                        <p className='text-sm sm:text-base text-gray5'>
                          { dictionaryFunction(singleItem.optionalStatsTile.subTitle, false, props.datoDictionary)}
                        </p>
                      </div>
                    }
                    {
                      wysiwyg != '' &&
                      <>
                        {/* <p className='hidden sm:block'>
                          {wysiwyg}
                        </p> */}
                        <div className='leading-normal ul-styles ol-styles blue-link' dangerouslySetInnerHTML={{ __html:wysiwyg.length > maxLength ?  dictionaryFunction(wysiwyg.substring(0, maxLength) , true, props.datoDictionary) + '...' :  dictionaryFunction(wysiwyg.substring(0, maxLength) , false, props.datoDictionary)}} />
                        <div className='sm:hidden flex flex-col mt-4'>
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <div className={open ? 'hidden' : `block ${wysiwyg.length > maxLength && 'collapsed-text-style'}`}>
                                  {/* <p>
                                    {wysiwyg.substring(0, maxLength)}
                                    
                                  </p> */}
                                  <div className='leading-normal ul-styles ol-styles blue-link' dangerouslySetInnerHTML={{ __html:  wysiwyg.length > maxLength ?  dictionaryFunction(wysiwyg.substring(0, maxLength), false, props.datoDictionary) + '...' :  dictionaryFunction(wysiwyg, false, props.datoDictionary) }}  />
                                </div>
                                <Disclosure.Panel className={open ? "block" : "hidden"} as='div'>
                                  {/* <p>
                                    {wysiwyg}
                                  </p> */}
                                  <div className='leading-normal ul-styles ol-styles blue-link' dangerouslySetInnerHTML={{ __html: dictionaryFunction(wysiwyg, false, props.datoDictionary) }} />
                                </Disclosure.Panel>
                                <br />
                                {
                                  wysiwyg.length > maxLength &&
                                  <Disclosure.Button as='span' className='self-center -mt-8'>
                                    <ChevronDownIcon className={`${open ? 'transform rotate-180' : ''} text-customBlue rounded-full bg-blueMedium p-1.5 pt-2 focus:outline-none w-8`} />
                                  </Disclosure.Button>
                                }
                              </>
                            )}
                          </Disclosure>
                        </div>
                      </>
                    }
                    <div className='pb-4'>
                      {
                        singleItem.linkList != '' &&
                        <>
                          {
                            singleItem.linkListTitle &&
                            <p className='uppercase font-bold text-gray4 text-xs py-3 mt-5'>
                              { dictionaryFunction(singleItem.linkListTitle, false, props.datoDictionary)}
                            </p>
                          }
                          {
                            singleItem.isdropdown == true &&
                            <div className='flex justify-between'>
                              <Listbox value={selected} onChange={setSelected}>
                                <div className='relative w-full me-2 text-xs sm:text-sm md:text-base'>
                                  <Listbox.Button className='pb-1.5 px-1 border-b border-gray5 text-gray5 flex w-full focus:outline-none font-medium bg-transparent'>
                                    <span className='w-full text-start sm:me-3.5'>
                                      { dictionaryFunction(selected.ctaCaption, false, props.datoDictionary)} 
                                    </span>
                                    <span>
                                      <ChevronDownIcon className='w-5' />
                                    </span>
                                  </Listbox.Button>
                                  <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" >
                                    <Listbox.Options className='absolute top-full start-0 w-full p-1 sm:p-4 z-10 bg-white shadow-xl rounded focus:outline-none text-gray5'>
                                      {
                                        Object.keys(singleItem.linkList).map((dropdownKey => {
                                          const singleDropdownItem = singleItem.linkList[dropdownKey]
                                          return (
                                            <>
                                              <Listbox.Option className='px-2 py-3 cursor-pointer'
                                                value={singleDropdownItem}
                                              >
                                                { dictionaryFunction(singleDropdownItem.ctaCaption, false, props.datoDictionary)}
                                              </Listbox.Option>
                                            </>
                                          )
                                        }))
                                      }
                                    </Listbox.Options>
                                  </Transition>
                                </div>
                              </Listbox>
                              <a
                                href={selected.ctaLink && selected.ctaLink != ' ' ? isValidUrl(selected.ctaLink) ? selected.ctaLink : "/" + props.language + selected.ctaLink : '#'}
                                target={props.attributes.openLinksInANewTab && "_blank"}
                              >
                                {
                                  props.direction === 'rtl' ?
                                    < ArrowLeftIcon className='w-9 h-9 sm:w-11 sm:h-11 px-1.5 sm:px-2.5 py-1 border border-gray5 text-gray5' />
                                    : < ArrowRightIcon className='w-9 h-9 sm:w-11 sm:h-11 px-1.5 sm:px-2.5 py-1 border border-gray5 text-gray5' />
                                }
                              </a>
                            </div>
                          }
                          {
                            singleItem.isdropdown == false &&
                            Object.keys(singleItem.linkList).map((dropdownKey => {
                              const singleDropdownItem = singleItem.linkList[dropdownKey]
                              return (
                                <>
                                  <a
                                    href={singleDropdownItem.ctaLink && singleDropdownItem.ctaLink != ' ' ? isValidUrl(singleDropdownItem.ctaLink) ? singleDropdownItem.ctaLink : "/" + props.language + singleDropdownItem.ctaLink : '#'}
                                    target={props.attributes.openLinksInANewTab && "_blank"}
                                    className='flex justify-between items-center mb-1.5 px-6 py-2 text-customBlue font-semibold bg-customBlue bg-opacity-5 hover:bg-opacity-10'
                                  >
                                    <span style={{ textTransform: 'capitalize' }} className='text-sm sm:text-base sm:tracking-wide'>
                                      { dictionaryFunction(singleDropdownItem.ctaCaption, false, props.datoDictionary)} 
                                    </span>
                                    <span>
                                      {
                                        props.direction === 'rtl' ?
                                          <ChevronLeftIcon className='w-4' />
                                          : <ChevronRightIcon className='w-4' />
                                      }
                                    </span>
                                  </a>
                                </>
                              )
                            }))

                          }

                        </>
                      }

                      {
                        singleItem.ctaCaption != "" &&
                        <a
                          href={singleItem.ctaLink && singleItem.ctaLink != ' ' ? isValidUrl(singleItem.ctaLink) ? singleItem.ctaLink : "/" + props.language + singleItem.ctaLink : '#'}
                          target={props.attributes.openLinksInANewTab && "_blank"}
                          className='flex text-gray5 p-2 mx-auto my-4 border border-gray5 focus:outline-none hover:shadow-xl content-center max-w-max'
                        >
                          <span className='text-sm sm:text-base font-bold leading-6 tracking-normal sm:font-normal sm:tracking-wide'>
                            { dictionaryFunction(singleItem.ctaCaption, false, props.datoDictionary)}
                          </span>
                          {
                            props.direction === 'rtl' ?
                              <ArrowLeftIcon className='w-4 ms-2 my-auto' />
                              : <ArrowRightIcon className='w-4 ms-2 my-auto' />
                          }
                        </a>
                      }
                    </div>
                  </div>
                </div>
              </div>

            </>
          )
        }))
      }
    </section>
  )
}

export default AreaOfActivityBlock
