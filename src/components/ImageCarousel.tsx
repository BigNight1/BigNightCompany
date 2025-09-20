import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

function ImageCarousel({ images, alt }: ImageCarouselProps) {
  // Si solo hay una imagen, mostrar imagen simple
  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt={alt}
        className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-contain rounded-lg shadow-lg mx-auto"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) {
            fallback.style.display = 'flex';
          }
        }}
      />
    );
  }

  // Si hay múltiples imágenes, mostrar carousel
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          bulletClass: 'swiper-pagination-bullet-custom',
          bulletActiveClass: 'swiper-pagination-bullet-active-custom',
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        className="image-carousel"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center">
              <img
                src={image}
                alt={`${alt} - Imagen ${index + 1}`}
                className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-contain rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.style.display = 'flex';
                  }
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navegación personalizada */}
      <div className="flex justify-center items-center mt-4 space-x-4">
        <button className="swiper-button-prev-custom p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors duration-200">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="text-sm text-gray-500">
          {images.length} imagen{images.length > 1 ? 'es' : ''}
        </div>
        
        <button className="swiper-button-next-custom p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors duration-200">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Estilos personalizados para los puntos de paginación */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .image-carousel .swiper-pagination {
            position: relative !important;
            margin-top: 1rem !important;
          }
          
          .image-carousel .swiper-pagination-bullet-custom {
            width: 12px !important;
            height: 12px !important;
            margin: 0 6px !important;
            background: #d1d5db !important;
            opacity: 1 !important;
            transition: all 0.3s ease !important;
            border-radius: 50% !important;
            cursor: pointer !important;
          }
          
          .image-carousel .swiper-pagination-bullet-active-custom {
            background: #2563eb !important;
            transform: scale(1.2) !important;
          }
          
          .image-carousel .swiper-pagination-bullet-custom:hover {
            background: #9ca3af !important;
          }
        `
      }} />
    </div>
  );
}

export default ImageCarousel;
