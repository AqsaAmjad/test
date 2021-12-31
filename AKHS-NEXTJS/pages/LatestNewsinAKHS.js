import news from "../public/images/news.png";
import news1 from "../public/images/news1.png";
import new2 from "../public/images/new2.png";
import news3 from "../public/images/news3.png";
import newsvector from "../public/images/newsvector.png";
import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { CheckIcon } from "@heroicons/react/solid";
const people = [
  { name: "Durward Reynolds" },
  { name: "Kenton Towne" },
  { name: "Therese Wunsch" },
  { name: "Benedict Kessler" },
  { name: "Katelyn Rohan" },
];

const LatestNewsinAKHS = () => {
  let props = {
    attributes: {
      blockDescription:
        "The Aga Khan University strives to set the regional standard of excellence at its hospitals and clinics in Pakistan, East Africa and Afghanistan, which treat more than 2 million patients annually and which have provided reduced-cost treatment to 2.4 million low-income patients over the last 30 years. The Aga Khan University Hospital, Karachi and the Aga Khan University Hospital, Nairobi were the first hospitals in their countries to meet the rigorous accreditation standards of the U.S.-based Joint Commission International. ",
      blockDescription2:
        "In Afghanistan, the University manages the 160-bed French Medical Institute for Mothers and Children as part of a partnership with the governments of France and Afghanistan and the French NGO La Chaîne de l’Espoir. Since 2006, it has treated more than 1 million patients and performed more than 27,000 surgeries. The FMIC laboratory is linked to the University’s laboratories in Pakistan, giving patients in Afghanistan access to a complete menu of medical tests.",
      blockHeadingAndDescriptionAlignment: "left",
      blockDescriptionFontColor: "#6D6D6D",
      footnote:
        '<p>For all other services please <a href="https://www.google.com">click here</a></p>\n',
      footnoteAlignment: "left",
      footnoteFontColor: "#000000",
    },
    language: "en",
    align: "left",
    direction: "ltr",
  };
  const [selected, setSelected] = useState(people[0]);
  return (
    <div className="bg-opacity-50 pt-10 px-6 sm:px-10 md:px-10 lg:px-10 xl:px-10">
      <div className="lg:flex items-start">
        <div className="border border-gray37 lg:w-2/3 md:w-full h-auto lg:me-10 px-3 py-3 mb-10">
          <img className="height w-full" src={news1} />
          <h1 className="lg:text-28 lg:leading-34 md:text-2xl sm: text-sm text-brownShade font-bold my-5">
            Latest news in AKHS
          </h1>
          <p
            style={{ color: "#5B5B5B" }}
            className="md:text-15 md:leading-5 leading-4 text-xs border-l-7 border-brownShade pl-4 text-justify"
          >
            {props.attributes.blockDescription}
          </p>
          <p
            style={{ color: "#5B5B5B" }}
            className="md:text-15 md:leading-5 leading-4 text-xs mt-5 text-justify "
          >
            AKU’s academic health centres provide high-quality treatment backed
            by the latest knowledge and deliver an array of services unavailable
            elsewhere. Our highly trained staff provide everything from prenatal
            courses for expectant mothers to neurosurgery, child psychiatry to
            comprehensive cancer care, nutritional counselling to kidney
            transplantation. In addition to offering outstanding care to those
            in need, AKU's centres actively work to prevent illness by educating
            their patients and the public.
          </p>
          <p
            style={{ color: "#5B5B5B" }}
            className="md:text-15 md:leading-5 leading-4 text-xs mt-5 text-justify "
          >
            At AKU, it is believed that everyone deserves to have access to
            quality care, regardless of where they live or their income. In
            Pakistan, more than 70 percent of patients who visit the University
            Hospital every year are low- or middle-income. A pregnant woman
            saved from death after doctors elsewhere had given up hope; an
            infant girl who received emergency surgery to correct a
            life-threatening lung malformation; a young boy whose cancer was
            detected and successfully treated after his parents had exhausted
            their savings pursuing treatment at other hospitals – these are just
            a few instances in which AKU's commitment to providing access to
            world-class care regardless of a patient’s ability to pay has made
            the difference between life and death.
          </p>
          <p
            style={{ color: "#5B5B5B" }}
            className="md:text-15 md:leading-5 leading-4 text-xs mt-5 text-justify "
          >
            In Pakistan, the University health network includes the 710-bed Aga
            Khan University Hospital, Karachi, which operates the only clinical
            laboratory in the country accredited by the College of American
            Pathologists. It also includes four woman and child hospitals with a
            total of 213 beds, as well as 264 outreach medical centres in more
            than 100 cities across the country.
          </p>
          <p
            style={{ color: "#5B5B5B" }}
            className="md:text-15 md:leading-5 leading-4 text-xs mt-5 text-justify "
          >
            In East Africa, the University health network includes the 300-bed
            Aga Khan University Hospital, Nairobi and 47 medical and diagnostic
            centres in Kenya, Uganda and Tanzania.
          </p>
          <img className="height w-full mt-4" src={news3} />
          <p
            style={{ color: "#5B5B5B" }}
            className="md:text-15  md:leading-5 leading-4  text-xs mt-5 text-justify "
          >
            {props.attributes.blockDescription2}
          </p>
          <div className="flex items-center justify-end space-x-2 text-lg mt-7">
            <img className="h-5 w-5" src={new2} />
            <h3 style={{ color: "#5B5B5B" }} className="leading-snug font-medium text-lg">Share</h3>
          </div>
        </div>
        <div className="border border-gray37 lg:w-1/3 md:w-full h-auto px-3 py-3 sm: mb-5">
          <div className="flex items-center  space-x-2 text-lg">
            <img className="h-5 w-5" src={new2} />
            <h3 style={{ color: "#5B5B5B" }} className="leading-snug font-medium text-lg">Share</h3>
          </div>
          <h3 className="lg:text-28 lg:leading-34 md:text-2xl sm: text-sm font-bold text-brownShade mt-3">
            OTHER ACTIVITIES
          </h3>
          <h2 style={{color: "#202020"}} className="lg:text-28 lg:leading-34 md:text-2xl sm: text-sm font-bold my-3">
            AGA KHAN UNIVERSITY
          </h2>
          <img className="md:h-72 sm: h-60 w-full" src={news} />
          <h3 style={{color: "#202020"}} className="lg:text-28 lg:leading-34 md:text-xl sm: text-sm font-bold my-4">
            INSTITUTES FOR EDUCATIONAL DEVELOPMENT
          </h3>
          <div className="w-full top-16">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full sm:h-16 h-14 font-medium py-2 pl-3 pr-10 text-left cursor-default border border-brownShade sm:text-sm">
                  <span className="block text-lg leading-22 font-medium truncate text-brownShade">
                    {selected.name}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <FaChevronDown className="w-5 h-5 text-brownShade" />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base text-brownShade bg-white rounded-md shadow-lg max-h-60 ring-1 ring-brownShade ring-opacity-5 focus:outline-none sm:text-sm">
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `${active ? "text-brownShade" : "text-BrownShade"}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`${
                                selected ? "font-medium" : "font-normal"
                              } block truncate`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span
                                className={`${
                                  active ? "text-brownShade" : "text-brownShade"
                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                              >
                                <CheckIcon
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>

          <h3 style={{color: "#202020"}} className="lg:text-28 lg:leading-34 md:text-xl sm: text-sm font-bold my-4">
            RELATED INFORMATION
          </h3>
          <ul
            style={{ color: "#202020" }}
            className="lg:text-lg lg:leading-30 md:text-base  text-sm"
          >
            <li>Agency Home</li>
            <li>University Hospital Website</li>
            <li>Aga Khan University Website</li>
            <li>AKDN Education</li>
          </ul>
          <h3 style={{color:"#202020"}} className="lg:text-28 lg:leading-34 md:text-xl sm: text-sm font-bold my-4">
            PRESS CENTRE: AKU
          </h3>
          <ul
            style={{ color: "#202020" }}
            className="lg:text-lg lg:leading-30 md:text-base  text-sm"
          >
            <li>Our Stories</li>
            <li>In the Media</li>
            <li>Press Releases</li>
            <li>Publication</li>
            <li>Speeches</li>
            <li>Videos</li>
            <li>Photographs</li>
            <li>Events</li>
            <li>Spotlights</li>
          </ul>
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
  );
};

export default LatestNewsinAKHS;
