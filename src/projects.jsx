import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const heads = [
    "Nexcent",
    "AI-translator",
    "Drawing Board",
    // eslint-disable-next-line react/jsx-key
    <div className=" leading-none">
      Medicine Info Extraction <br />
      <span className="md:text-[1.1vw] text-[4vw]">(AI-based)</span>
    </div>,
    "Weather-Forecast",
    // eslint-disable-next-line react/jsx-key
    <div className=" leading-none">
      Food-Corner <br />
      <span className="md:text-[1.1vw] text-[4vw]">(Feb 2024-March 2024)</span>
    </div>,
  ];
  const images = [
    "/images/s1.png",
    "/images/img3.png",
    "/images/ss.png",
    "/images/med.png",
    "/images/weather.png",
    "/images/chef.jpeg",
  ];
  const texts = [
    // eslint-disable-next-line react/jsx-key
    <div className="md:mt-2 ">
      A sleek and responsive landing page built with Next.js, optimized and
      fully responsive for seamless user experience across all devices.
      <br />
      <div className="md:flex hidden gap-4 justify-center md:mt-8">
        <div className="r "># NextJs</div>
        <div className="r ">#Css</div>
        <div className="r ">#Javascript</div>
      </div>
    </div>,
    // eslint-disable-next-line react/jsx-key
    <div>
      Developed with React, MyMemory Translator API, and the Web Speech API for
      text-to-speech, the AI Translator project delivers fast, accurate
      translations across multiple languages, with real-time audio playback of
      translations. Supporting local languages like Hindi, Bengali,Assamese,
      etc, it offers a smooth, intuitive interface for effortless input and
      output.
      <div className="md:flex gap-4  hidden justify-center md:mt-8">
        <div className="r ">#ReactJs</div>
        <div className="r ">#Rest-API</div>
        {/* <div className="r md:block hidden">#Web-speech-Api</div> */}
        {/* <div className="r md:block hidden">#Gsap</div> */}
      </div>
    </div>,
    // eslint-disable-next-line react/jsx-key
    <div>
      An interactive drawing application built by using the HTML Canvas API,
      where users can draw freehand sketches. The project allows users to
      explore creativity with tools like customizable brush sizes, colors.
      Implemented undo/redo functionality to enhance user control and a saving
      feature to export artwork as an image.
      <br />
      <div className="md:flex gap-4 hidden justify-center md:mt-5">
        <div className="r ">#ReactJs</div>
        <div className="r ">#Canvas</div>
        <div className="r ">#Css</div>
      </div>
    </div>,
    // eslint-disable-next-line react/jsx-key
    <div className="md:mt-2 ">
      Leveraged Tesseract OCR to extract medicine details from images and mapped
      the extracted data to corresponding medicine names using the medicine
      dataset. The project features seamless translation of medicine information
      into local languages and includes an audio playback option for enhanced
      accessibility.
      <br />
      <div className="md:flex hidden gap-4 justify-center md:mt-8">
        <div className="r ">#Python</div>
        <div className="r ">#Tesseract OCR</div>
        <div className="r ">#Colab</div>
      </div>
    </div>,
    // eslint-disable-next-line react/jsx-key
    <div className="md:mt-2 ">
      A weather app using the forecast API to provide real time temperature,
      humidity and wind speed for any location. Users can enter their city name
      and get instant reliable updates.
      <br />
      <div className="md:flex hidden gap-4 justify-center md:mt-8">
        <div className="r "># Html5</div>
        <div className="r ">#Css</div>
        <div className="r ">#Javascript</div>
        <div className="r ">#Rest-Api</div>
      </div>
    </div>,
    // eslint-disable-next-line react/jsx-key
    <div className="md:mt-2 ">
      Worked as a freelance website project using a blend of technologies.
      Crafted the site with HTML, CSS, and JavaScript, integrating EmailJS for
      email management, and Leaflet for seamless map functionality. The design
      process involved Figma, and the site was successfully deployed on Netlify.
      <br />
      <div className="md:flex hidden gap-4 justify-center md:mt-8">
        <div className="r "># Html5</div>
        <div className="r ">#Css</div>
        <div className="r ">#Javascript</div>
        <div className="r ">#Leaflet</div>
      </div>
    </div>,
  ];
  const links1 = [
    "https://nexcent-ap.netlify.app/",
    "https://ai-translatio.netlify.app/",
    "https://drawingboard-78.netlify.app/",
    "https://github.com/SamarjitBaro/Med_Test/blob/master/Information_extraction.ipynb",
    "https://weather-forecast-32edde.netlify.app/",
    "https://foodcorner-eb920d.netlify.app/",
  ];
  const links2 = [
    "https://github.com/SamarjitBaro/Nexcent-Responsive-Website-Demo-",
    "https://github.com/SamarjitBaro/Ai-translator",
    "https://github.com/SamarjitBaro/Canvas-Drawing-Board",
    "https://github.com/SamarjitBaro/Med_Test/blob/master/Information_extraction.ipynb",
  ];
  const arefs = [
    <GoLinkExternal />,
    <GoLinkExternal />,
    "",
    <GoLinkExternal />,
    <GoLinkExternal />,
  ];
  const aref2 = [<FaGithub />, <FaGithub />, <FaGithub />];

  useEffect(() => {
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.to(card, {
        scale: 0.8,
        opacity: 0,

        scrollTrigger: {
          trigger: card,
          start: "top 10%",
          end: "bottom 0%",

          //   markers: true,
          scrub: true,
        },
      });
    });
  });
  return (
    <>
      <div className="h-[100px] border-none flex items-center justify-center sticky top-0 bg-black">
        <h2 className="    text-[5vw] prj1">Projects</h2>
      </div>
      <div className="h-[413vh] lg:h-auto mt-[-21px] bg-black">
        <div className="prj   ">
          {images.map((image, index) => {
            const text = texts[index]; // Get the corresponding text using the index
            const link = links1[index];
            const link2 = links2[index];
            const head = heads[index];
            const aref = arefs[index];
            const arefss = aref2[index];
            return (
              <div
                key={index}
                className="card flex-wrap lg:flex-nowrap z-30 mt-5 rounded-2xl sticky top-[15vh] px-[10px] lg:px-[40px] flex items-center lg:gap-16 w-[90vw] h-[80vh] m-0 mx-auto"
              >
                {/* Image Section */}
                <div className="rounded images h-[30vh] w-[90vw] lg:h-[70vh] lg:w-[40vw]">
                  <a href={link} target="blank">
                    <img
                      className="w-[100%] h-[100%]  hoverer filter brightness(0.85)"
                      src={image}
                      alt="images of projects"
                    />
                  </a>
                </div>
                {/* Text Section */}
                {text && (
                  <div className="h-auto   px-4 py-3 flex-col  lg:px-12 lg:py-8 w-[90vw] lg:h-[70vh] lg:w-[40vw] rounded images flex   items-center lnr text-white">
                    {head && (
                      <h1 className="text-[6vw]  text-[#CDCDCD] lg:text-[3vw] ss">
                        {head}
                      </h1>
                    )}
                    <p className="text-[3.5vw] text-[#CDCDCD] lg:text-[1.2vw] mt-1 ss2">
                      {text}
                    </p>
                    <div className="flex justify-start  w-[100%] gap-5 items-center py-6">
                      {" "}
                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Click to visit site"
                          className="text-blue-500  animate-bounce underline mt-2"
                        >
                          {aref && (
                            <div className="text-[6vw] lg:text-[2vw]">
                              {aref}
                            </div>
                          )}
                        </a>
                      )}
                      {link2 && (
                        <a
                          href={link2}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Click to visit github"
                          className="text-blue-500 animate-pulse underline mt-2"
                        >
                          {arefss && (
                            <div className="text-[6vw] lg:text-[2vw]">
                              {arefss}
                            </div>
                          )}
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
