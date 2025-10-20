"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { projects } from "../../data/home";

export default function PortfolioCarousel() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900">Portfolio</h2>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
      >
        {projects.map((proj) => (
          <SwiperSlide key={proj.title}>
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 border border-gray-100">
              <div onClick={() => setSelectedImage(proj.img)} className="relative overflow-hidden rounded-lg mb-4 h-64 cursor-pointer">
                <Image src={proj.img} alt={proj.title} width={400} height={250} className="object-contain w-full h-64 bg-gray-100" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{proj.title}</h3>
              <p className="text-gray-600 text-sm">{proj.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full p-4">
            <Image src={selectedImage} alt="Expanded" width={800} height={1200} className="object-contain max-h-screen max-w-full" />
            <button onClick={() => setSelectedImage(null)} className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black p-2 rounded-full text-2xl">&times;</button>
          </div>
        </div>
      )}
    </section>
  );
}
