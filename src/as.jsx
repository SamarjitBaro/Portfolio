// import { useState, useEffect } from "react";
// import Frame from "./components/Frame";
// import gsap from "gsap";
// import { MdEmail } from "react-icons/md";
// import { FaGithub } from "react-icons/fa";
// import { FaReact } from "react-icons/fa";
// import { TiHtml5 } from "react-icons/ti";
// import { IoLogoCss3 } from "react-icons/io5";
// import { RiJavascriptFill } from "react-icons/ri";
// import { FaLinkedin } from "react-icons/fa";
// import Projects from "./projects";

// function App() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [startAnimation, setStartAnimation] = useState(false);

//   // Define animation start point (after 6 sections)
//   const animationStartPoint = window.innerHeight * 0.1;
//   // const lerp = (x, y, a) => x * (1 - a) + y * a;

//   // Handle scroll event
//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     if (scrollPosition >= animationStartPoint) {
//       setStartAnimation(true);
//     } else {
//       setStartAnimation(false);
//     }
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const getScrollHeight = () => {
//     const baseHeight = 0.1 * window.innerHeight + 2200;
//     if (window.innerWidth <= 480) {
//       return 0.1 * window.innerHeight + 2600;
//     } else if (window.innerWidth <= 770) {
//       return 0.1 * window.innerHeight + 5410;
//     }
//     return baseHeight;
//   };

//   const scrollHeight = getScrollHeight();
//   const [color, setColor] = useState("#000000");
//   const handleMouse = (e) => {
//     const innerDiv = e.target; // The div that triggered the event
//     const rect = innerDiv.getBoundingClientRect(); // Get the position and size of the inner div
//     const mouseX = e.clientX - rect.left; // Mouse X position inside the inner div
//     const mouseY = e.clientY - rect.top; // Mouse Y position inside the inner div

//     // Generate a dynamic color based on mouse position
//     const newColor = `rgb(${(mouseX / rect.width) * 255}, ${
//       (mouseY / rect.height) * 255
//     }, 150)`;

//     setColor(newColor);
//     const greeenElement = document.querySelector(".greeen");
//     const parentElement = greeenElement.parentElement;
//     if (greeenElement && parentElement) {
//       const parentRect = parentElement.getBoundingClientRect();
//       const elementWidth = greeenElement.offsetWidth;
//       const elementHeight = greeenElement.offsetHeight;

//       const mouseX = e.clientX - parentRect.left - elementWidth / 2;
//       const mouseY = e.clientY - parentRect.top - elementHeight / 2;

//       const constrainedX = Math.min(
//         Math.max(mouseX, 0),
//         parentRect.width - elementWidth
//       );

//       const constrainedY = Math.min(
//         Math.max(mouseY, 0),
//         parentRect.height - elementHeight
//       );

//       gsap.to(greeenElement, {
//         x: constrainedX,
//         y: constrainedY,
//         duration: 0.3,
//       });
//     }
//   };
//   const moveIn = (e) => {
//     const greeenElement = document.querySelector(".greeen");

//     gsap.to(e.currentTarget, {
//       scale: 1.4, // Scale the hovered icon

//       color: "white",
//       duration: 0.1,
//     });
//     gsap.to(greeenElement, {
//       scale: 3.5,
//     });
//   };

//   const moveOut = (e) => {
//     const greeenElement = document.querySelector(".greeen");
//     // const email = document.querySelector(".email");
//     // Scale the icon back to its original size
//     gsap.to(e.currentTarget, {
//       scale: 1, // Scale back to normal size
//       color: window.matchMedia("(min-width: 768px)").matches
//         ? "#606060"
//         : "#22c55e",
//       duration: 0.2,
//     });
//     gsap.to(greeenElement, {
//       scale: 1,
//     });
//   };
//   return (
//     <>
//       <div>Image loaded: {isLoaded ? "Yes" : "No"}</div>
//       <div
//         onMouseMove={handleMouse}
//         className="h-[100vh] hero relative flex cursor-none  bg-[#EAEAEA] overflow-hidden text-black"
//       >
//         <div className="bg-[#1F1F1F] px-6 py-[60px]  about  md:flex items-center flex-col top-0 h-[100%] w-[50%] right-0 hidden  absolute">
//           <h2 className="z-20 md:mt-14 about">About Me</h2>
//           <div className="px-[80px] z-20 mt-[20px]">
//             <p className=" para">
//               "I’m a freelance frontend developer with experience in HTML, CSS,
//               JavaScript, React, Tailwind CSS, AJAX, Git, Canvas and creative
//               tools like GSAP, SwiperJS, and Framer Motion. <br />
//             </p>
//             <div className="flex flex-col items-center mt-16  justify-center">
//               <p className="mt-10 skill">Skills</p>
//               <div className=" flex gap-16 mt-10  justify-center">
//                 <div className="flex items-center flex-col logoR ">
//                   <FaReact className="" />
//                   <h4 className="react ">React</h4>
//                 </div>
//                 <div className="flex items-center flex-col logoJ  ">
//                   <RiJavascriptFill className="" />
//                   <h4 className="react  ">Javascript</h4>
//                 </div>
//                 <div className="flex items-center flex-col logoH ">
//                   <TiHtml5 className="" />
//                   <h4 className="react  ">Html</h4>
//                 </div>
//                 <div className="flex items-center flex-col  logoC ">
//                   <IoLogoCss3 className="" />
//                   <h4 className="react ">Css</h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           style={{
//             backgroundColor: color, // Dynamically change the background color
//             transition: "background-color 0.5s ease", // Smooth transition for color change
//           }}
//           className=" h-[20px] hidden md:block w-[20px] rounded-[50%] absolute z-10 greeen"
//         ></div>
//         <div className="relative  md:mt-3 h-screen md:h-[25vw] md:py-24 pt-[10vh] px-[55px] rounded md:bg-transparent bg-[#1F1F1F]">
//           <h1 className="leading-none text-[#CDCDCD] md:text-[#1F1F1F] z-20  f1 text-[9vw]">
//             Hey
//             <br /> I'm Samar
//           </h1>
//           <h3 className="fr absolute f2 hidden md:block right-20 mt-[1px] z-10 text-[1.5vw]">
//             Frontend-developer | Creative-developer
//           </h3>

//           <p className="text-[#CDCDCD] block md:hidden mt-10">
//             "I’m a passionate freelance frontend developer with experience in
//             HTML, CSS, JavaScript, React, Tailwind CSS, AJAX, Git, Canvas and
//             creative tools like GSAP, SwiperJS, and Framer Motion.
//             <br />I love taking on new challenges and enjoy finding creative
//             solutions to build better online experiences."
//           </p>
//           <div className="absolute z-20 flex justify-center w-[80%] text-green-500 gap-16 bottom-32 md:text-[#606060b1]  md:bottom-[-180px]">
//             <a
//               href="mailto:xamarbro10@gmail.com"
//               target="blank"
//               className="cursor-none"
//             >
//               <MdEmail
//                 className="size-9 md:email  "
//                 onMouseEnter={(e) => moveIn(e)}
//                 onMouseLeave={(e) => moveOut(e)}
//               />
//             </a>
//             <a
//               href="https://github.com/SamarjitBaro"
//               target="blank"
//               className="cursor-none"
//             >
//               <FaGithub
//                 className="size-9 md:email   "
//                 onMouseEnter={(e) => moveIn(e)}
//                 onMouseLeave={(e) => moveOut(e)}
//               />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/samarjit-baro-b33734239"
//               className="cursor-none"
//               target="blank"
//             >
//               <FaLinkedin
//                 className="size-9 md:email  "
//                 onMouseEnter={(e) => moveIn(e)}
//                 onMouseLeave={(e) => moveOut(e)}
//               />
//             </a>
//           </div>
//         </div>
//         <Frame
//           animationStartY={animationStartPoint} // Animation starts at the top
//           scrollHeight={scrollHeight}
//           numFrames={287}
//           width={window.innerWidth}
//           height={window.innerHeight}
//           setIsLoader={setIsLoaded}
//         />
//       </div>
//     </>
//   );
// }

// export default App;
