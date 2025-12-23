import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function ScreenshotSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-rotate screenshots
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Screenshot data
  const screenshots = [
    {
      url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=iPhone%20app%20interface%20showing%20photo%20metadata%20editor%20with%20options%20to%20remove%20location%20data&sign=7333cf6735b8bc8613b2c09f32de71c7",
      alt: "Silent Exif Main Interface",
    },
    {
      url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=iPhone%20app%20screen%20showing%20batch%20processing%20of%20photos%20for%20metadata%20removal&sign=41570c17182edf2abca9458a14195c29",
      alt: "Batch Processing Feature",
    },
    {
      url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=iPhone%20app%20interface%20showing%20before%20and%20after%20comparison%20of%20photo%20metadata&sign=bdc293e7ac9bcedb596c628467e22890",
      alt: "Metadata Comparison View",
    },
  ];

  return (
    <div ref={sliderRef} className="relative overflow-hidden rounded-2xl">
      <div 
        className="flex transition-transform duration-500 ease-out" 
        style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)` }}
      >
        {screenshots.map((screenshot, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`${isMobile ? 'w-full' : 'w-1/2'} flex-shrink-0 px-2`}
          >
            <img
              src={screenshot.url}
              alt={screenshot.alt}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </motion.div>
        ))}
        {/* Duplicate first screenshot for seamless looping */}
        <div className={`${isMobile ? 'w-full' : 'w-1/2'} flex-shrink-0 px-2`}>
          <img
            src={screenshots[0].url}
            alt={screenshots[0].alt}
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}