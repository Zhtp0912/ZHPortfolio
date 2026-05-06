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
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Portfolio</h2>
          <p className="text-gray-400">A selection of projects I&apos;ve built</p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640:  { slidesPerView: 1 },
            768:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="!pb-10"
        >
          {projects.map((proj) => (
            <SwiperSlide key={proj.title}>
              <div className="rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">

                {/* Image */}
                <div
                  onClick={() => setSelectedImage(proj.img)}
                  className="relative h-48 w-full cursor-pointer overflow-hidden bg-gray-50"
                >
                  <Image
                    src={proj.img}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 hover:opacity-100 text-white text-sm font-medium bg-black/50 px-3 py-1.5 rounded-lg transition-opacity duration-300">
                      View Full
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-5 py-5 flex flex-col gap-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base">{proj.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{proj.desc}</p>
                  </div>
                  {/* Tag */}
                  <span className="self-start px-3 py-1.5 rounded-lg text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 transition-colors duration-150 cursor-default">
                    Project
                  </span>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={selectedImage}
                alt="Expanded"
                width={800}
                height={600}
                className="object-contain w-full max-h-[80vh] bg-gray-900"
              />
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white bg-black/50 hover:bg-black/80 w-9 h-9 rounded-full flex items-center justify-center text-lg transition-colors duration-200"
            >
              &times;
            </button>
          </div>
        </div>
      )}

    </section>
  );
}