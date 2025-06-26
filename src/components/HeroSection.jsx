import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Garden1 from "../assets/garden1.jpg";
import Garden2 from "../assets/garden2.jpg";
import Garden3 from "../assets/garden3.jpg";

const HeroSection = () => {
    const banners = [
        {
            id: 1,
            image: Garden1,
            title: 'Transform Your Outdoor Space',
            description: 'Discover premium plants and expert gardening tips to create your dream garden',
            buttonText: 'Explore'
        },
        {
            id: 2,
            image: Garden2,
            title: 'Seasonal Planting Guide',
            description: 'Learn what to plant this season for a thriving, colorful garden all year round',
            buttonText: 'Learn More'
        },
        {
            id: 3,
            image: Garden3,
            title: 'Organic Gardening Solutions',
            description: 'Natural pest control and fertilizer options for a healthier garden ecosystem',
            buttonText: 'Learn More'
        }
    ];

    return (
        <div className="w-full h-[65vh] min-h-[400px] max-h-[700px] bg-gray-100 relative overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={1}
                spaceBetween={0}
                className="h-full"
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <div className="relative w-full h-full">
                            {/* Banner Image with subtle zoom effect */}
                            <motion.div
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 10 }}
                                className="w-full h-full"
                            >
                                <img
                                    src={banner.image}
                                    alt="Banner"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            <div className="absolute inset-0 bg-black/30" />

                            {/* Banner Content with fade-in animation */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4"
                            >
                                <motion.h1
                                    initial={{ y: 20 }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl drop-shadow-lg"
                                >
                                    {banner.title}
                                </motion.h1>
                                <motion.p
                                    initial={{ y: 20 }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-lg md:text-xl mb-8 max-w-xl drop-shadow-md"
                                >
                                    {banner.description}
                                </motion.p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-green-600 hover:bg-white hover:text-green-800 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300"
                                >
                                    {banner.buttonText}
                                </motion.button>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Subtle scroll indicator */}
            <motion.div
                animate={{
                    y: [0, 10, 0],
                    opacity: [0.6, 1, 0.6]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity
                }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-2xl cursor-pointer"
                onClick={() => {
                    window.scrollTo({
                        top: window.innerHeight * 0.7,
                        behavior: 'smooth'
                    });
                }}
            >
                ↓
            </motion.div>
        </div>
    );
};

export default HeroSection;