import React, { useEffect, useRef, useState } from "react";

import Slide0 from "../../image/ScreenShoot/1.jpg";
import Slide1 from "../../image/ScreenShoot/2.jpg";
import Slide2 from "../../image/ScreenShoot/3.jpg";
import Slide3 from "../../image/ScreenShoot/4.jpg";
import Slide4 from "../../image/ScreenShoot/5.jpg";
import Slide5 from "../../image/ScreenShoot/6.jpg";
import Slide6 from "../../image/ScreenShoot/7.jpg";
import Slide7 from "../../image/ScreenShoot/8.jpg";

const img = [Slide0, Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7];

const ProductInformation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  let startX = 0;
  let isDragging = false;


  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);
  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 230, behavior: "smooth" });
    }
  };
  const handleBack = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -230, behavior: "smooth" });
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      // Thêm một khoảng nhỏ (2px) để kiểm tra chính xác hơn
      const tolerance = 2;

      setAtStart(scrollLeft === 0);
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - tolerance);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      // Thêm sự kiện scroll để kiểm tra khi người dùng cuộn
      scrollRef.current.addEventListener("scroll", checkScrollPosition);
    }

    // Đảm bảo vị trí cuộn được kiểm tra sau khi trang đã tải
    setTimeout(() => {
      checkScrollPosition();
    }, 1000); // Đợi một chút để đảm bảo phần tử scroll đã sẵn sàng

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);


  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleNext1 = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex === img.length - 1 ? 0 : prevIndex + 1) % img.length
    );
  };

  const handleBack1 = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? img.length - 1 : prevIndex - 1
    );
  };

  // Xử lý sự kiện vuốt đổi ảnh
  const handleStart = (e: React.TouchEvent | React.MouseEvent) => {
    startX =
      e.type === "touchstart"
        ? (e as React.TouchEvent).changedTouches[0].clientX
        : (e as React.MouseEvent).clientX;
    isDragging = true;
  };

  const handleEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    isDragging = false;

    const endX =
      e.type === "touchend"
        ? (e as React.TouchEvent).changedTouches[0].clientX
        : (e as React.MouseEvent).clientX;

    if (startX - endX > 50) {
      handleNext1();
    } else if (endX - startX > 50) {
      handleBack1();
    }
  };

  // useEffect để lắng nghe sự kiện nhấn phím next back bàn phím
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext1();
      } else if (e.key === "ArrowLeft") {
        handleBack1();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // useEffect để lắng nghe sự kiện nhấn phím Esc
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Xử lý ảnh thumb với các màn khác nhau
  const thumbnailRefs = useRef<(HTMLImageElement | null)[]>([]);

  const visibleThumbnails = Math.min(10, img.length);
  const getVisibleThumbnails = () => {
    if (window.innerWidth >= 800 || img.length <= 5) {
      return img;
    } else {
      const half = Math.floor(visibleThumbnails / 2);
      const start = Math.max(currentIndex - half, 0);
      const end = Math.min(currentIndex + half, img.length - 1);
      return img.slice(start, end + 1).slice(0, 5);
    }
  };

  return (
    <>
      <section className="">
        <div className="w-[100%] max-w-[1503px] mx-auto relative overflow-hidden mt-[20px]">
          <div
            ref={scrollRef}
            className="w-[100%] max-w-[1000px] h-auto flex-shrink-0 flex-grow-0 flex-auto flex gap-[10px] overflow-x-auto scroll-smooth no-scrollbar"
          >
            {img.map((img, index) => (
              <a
                href={img}
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  openModal(index);
                }}
                className="w-[100%] max-w-[200px] h-auto flex-shrink-0 flex-grow-0 flex-auto flex gap-[10px] overflow-x-auto scroll-smooth no-scrollbar"
              >
                <img
                  className="w-[100%] max-w-[200px] mx-auto block"
                  src={img}
                  alt="Image error"
                />
              </a>
            ))}
          </div>
          {!atStart && (
            <button
              onClick={handleBack}
              className="left-0 absolute top-[50%] p-[5px] text-3xl cursor-pointer text-black transform -translate-y-1/2 z-100"
            >
              <div className="mb-[3.3px] mr-[3.3px]">&#10094;</div>
            </button>
          )}
          {!atEnd && (
            <button
              onClick={handleNext}
              className="right-0 absolute top-[50%] p-[5px] text-3xl cursor-pointer text-black transform -translate-y-1/2 z-100"
            >
              <div className="mb-[3.3px] ml-[3.3px]">&#10095;</div>
            </button>
          )}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
              onTouchStart={handleStart}
              onTouchEnd={handleEnd}
              onMouseDown={handleStart}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
            >
              <button
                className="absolute top-1 right-2 text-white text-4xl w-[30px] h-[30px] flex items-center justify-center rounded-full z-50"
                onClick={closeModal}
              >
                &times;
              </button>

              <div className="flex flex-col items-center">
                <img
                  className={`w-auto max-w-full h-[100%] max-h-[580px] relative transition-transform duration-300 ease-in-out transform 
                    
                      ? "scale-95 opacity-75"
                      : "scale-100 opacity-100"
                  }`}
                  src={img[currentIndex]}
                  alt="Modal view"
                />
                <div className="flex w-[720px] gap-[13px] mt-5 justify-center overflow-hidden relative flex-shrink-0">
                  {getVisibleThumbnails().map((thumbnail, index) => (
                    <div key={index} className="w-auto max-h-[100px] h-[100%]">
                      <img
                        ref={(el) => (thumbnailRefs.current[index] = el)}
                        src={thumbnail}
                        alt=""
                        className={`w-auto max-h-[100px] h-[100%] cursor-pointer transition-all duration-300 ${
                          thumbnail === img[currentIndex]
                            ? "border-4 border-white opacity-100"
                            : "opacity-50"
                        }`}
                        onClick={() =>
                          handleThumbnailClick(img.indexOf(thumbnail))
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="absolute left-0 text-white text-4xl max-w-[35px] w-[100%] max-h-[35px] h-[100%] flex items-center justify-center border-white rounded-full"
                onClick={handleBack1}
              >
                <div className="mb-[3.3px] mr-[3.3px]">&#10094;</div>
              </button>
              <button
                className="absolute right-0 text-white text-4xl max-w-[35px] w-[100%] max-h-[35px] h-[100%] flex items-center justify-center border-white rounded-full"
                onClick={handleNext1}
              >
                <div className="mb-[3.3px] ml-[3.3px]">&#10095;</div>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductInformation;
