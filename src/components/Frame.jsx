import { useRef, useLayoutEffect, useState } from "react";

const Frame = ({
  scrollHeight,
  numFrames,
  width,
  height,
  animationStartY,
  setIsLoader,
}) => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [frameIndex, setFrameIndex] = useState(0);

  const preloadImages = () => {
    let loadedCount = 0;
    const loadedImages = [];

    for (let i = 1; i <= numFrames; i++) {
      const img = new Image();
      img.src = `/video/frame_${i.toString().padStart(4, "0")}.jpg`; // Force image loading immediately
      img.onload = () => {
        loadedImages[i - 1] = img; // Maintain order of images
        loadedCount++;

        if (loadedCount === numFrames) {
          setImages(loadedImages); // Set all images once loaded
          setIsLoader(true); // Notify parent that loading is complete
        }
      };

      img.onerror = () => {
        console.error(`Failed to load image ${i}`);
      };
    }
  };

  const renderCanvas = () => {
    const context = canvasRef.current.getContext("2d");
    context.canvas.width = width;
    context.canvas.height = height;
  };

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

  useLayoutEffect(() => {
    preloadImages();
    renderCanvas();
  }, []);

  useLayoutEffect(() => {
    const throttledScroll = (func, limit) => {
      let inThrottle;
      return function (...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    };

    const onScroll = throttledScroll(handleScroll, 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    if (!canvasRef.current || images.length === 0) return;

    const context = canvasRef.current.getContext("2d");
    const img = images[frameIndex];
    const canvas = canvasRef.current;

    const scale = Math.max(
      canvas.width / img.width,
      canvas.height / img.height
    );
    const x = (canvas.width - img.width * scale) / 2;
    const y = (canvas.height - img.height * scale) / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, x, y, img.width * scale, img.height * scale);
  }, [frameIndex, images]);

  return (
    <div className="w-screen h-screen cursor-none">
      <div className="parent relative w-full h-[230vh]">
        <div className="w-full sticky top-0 left-0 h-[100vh]">
          <canvas
            ref={canvasRef}
            className="h-full canv w-full"
            id="frame"
          ></canvas>
        </div>
      </div>
    </div>
  );
};

export default Frame;
