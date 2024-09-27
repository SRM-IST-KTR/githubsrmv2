import React, { useState, useEffect } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import img1 from "../../public/Home/1.JPG";
import img2 from "../../public/Home/2.JPG";
import img3 from "../../public/Home/3.JPG";
import img4 from "../../public/Home/4.JPG";
import img5 from "../../public/Home/5.JPG";
import img6 from "../../public/Home/6.JPG";
import img7 from "../../public/Home/7.JPG";
import img8 from "../../public/Home/8.JPG";
import img9 from "../../public/Home/9.JPG";
import img10 from "../../public/Home/10.JPG";
import img11 from "../../public/Home/11.jpg";

const serviceData = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11
];

const ServiceSlider = () => {
    const [slidesPerView, setSlidesPerView] = useState(6);
    const [imagesLoaded, setImagesLoaded] = useState(
        serviceData.map(() => false)
    );

    useEffect(() => {
        const handleResize = () => {
            const newSlidesPerView = window.innerWidth <= 767 ? 1 : 3;
            setSlidesPerView(newSlidesPerView);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleImageLoad = (index) => {
        setImagesLoaded((prevState) => {
            const updatedImagesLoaded = [...prevState];
            updatedImagesLoaded[index] = true;
            return updatedImagesLoaded;
        });
    };

    return (
        <Swiper
            slidesPerView={slidesPerView}
            // effect={"coverflow"}

            grabCursor={true}
            centeredSlides={true}
            loop={true}
            // coverflowEffect={{
            //     rotate: 20,
            //     depth: -120,
            //     modifier: 1,
            //     slideShadows: false
            // }}
            pagination={{
                dynamicBullets: true
            }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: true
            }}
            modules={[Autoplay, Pagination]}
            className="overflow-hidden"
        >
            {serviceData.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="rounded-lg flex p-2 flex-col gap-x-6 sm:gap-x-0 cursor-pointer overflow-hidden ">
                        {!imagesLoaded[index] && (
                            <div className="flex justify-center items-center">
                                <p className="text-black">Loading Image...</p>
                            </div>
                        )}
                        <Image
                            src={item}
                            alt="Latest Events Images"
                            className=" w-[800px] h-[400px] rounded-lg max-md:object-cover"
                            onLoad={() => handleImageLoad(index)}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        // <Swiper
        //     pagination={{
        //         dynamicBullets: true
        //     }}
        //     modules={[Pagination]}
        //     className="mySwiper"
        // >
        //     {serviceData.map((item, index) => (
        //         <SwiperSlide key={index}>
        //             <div className="rounded-lg flex p-2 flex-col gap-x-6 sm:gap-x-0 cursor-pointer overflow-hidden ">
        //                 {!imagesLoaded[index] && (
        //                     <div className="flex justify-center items-center">
        //                         <p className="text-black">Loading Image...</p>
        //                     </div>
        //                 )}
        //                 <img
        //                     src={item.path}
        //                     alt="Latest Events Images"
        //                     className="object-fill w-full  rounded-lg"
        //                     onLoad={() => handleImageLoad(index)}
        //                 />
        //             </div>
        //         </SwiperSlide>
        //     ))}
        // </Swiper>
    );
};

export default ServiceSlider;
