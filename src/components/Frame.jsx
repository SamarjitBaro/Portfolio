import { useRef, useEffect, useState } from "react";

// function getCurrentFrame(index) {
//   return `frames/frame_${index.toString().padStart(4, "0")}.jpg`;
// }

const Frame = ({ scrollHeight, numFrames, width, height, animationStartY }) => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [frameIndex, setFrameIndex] = useState(0);

  // Load images
  function preloadImages() {
    for (let i = 1; i <= numFrames; i++) {
      const img = new Image();
      // const imgSrc = getCurrentFrame(i);
      img.src = `/video/frame_${i.toString().padStart(4, "0")}.jpg`;
      setImages((prevImages) => [...prevImages, img]);
    }
  }

  // Handle scroll events
  const handleScroll = () => {
    const scrollFraction =
      (window.scrollY - animationStartY) / (scrollHeight - window.innerHeight);

    const index = Math.min(
      numFrames - 1,
      Math.ceil(scrollFraction * numFrames)
    );

    if (index >= 0 && index < numFrames) {
      setFrameIndex(index);
    }
  };

  // Set up canvas
  const renderCanvas = () => {
    const context = canvasRef.current.getContext("2d");
    context.canvas.width = width;
    context.canvas.height = height;
  };

  // Render images to canvas
  useEffect(() => {
    preloadImages();
    renderCanvas();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || images.length < 1) {
      return;
    }

    const context = canvasRef.current.getContext("2d");
    let requestId;

    const render = () => {
      const img = images[frameIndex];
      const canvas = canvasRef.current;

      // Center and scale the image
      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;

      // Clear and draw the centered image
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, x, y, img.width * scale, img.height * scale);

      requestId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(requestId);
  }, [frameIndex, images]);

  return (
    <>
      <div className="w-screen h-screen  cursor-none ">
        <div className="parent relative  w-full h-[230vh]">
          <div className="w-full sticky top-0  left-0 h-[screen]">
            <canvas
              ref={canvasRef}
              className="h-full  canv w-full"
              id="frame"
            ></canvas>
          </div>
        </div>
      </div>
    </>
  );
};
export default Frame;










