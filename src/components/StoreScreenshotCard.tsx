import { useState, useEffect } from 'react';
import { StoreScreenshot } from '../data/storeScreenshots';
import { Eye, X, CheckCircle } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

interface StoreScreenshotCardProps {
  screenshot: StoreScreenshot;
}

function StoreScreenshotCard({ screenshot }: StoreScreenshotCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Normalizar imageSrc para que siempre sea un array
  const images = Array.isArray(screenshot.imageSrc) ? screenshot.imageSrc : [screenshot.imageSrc];
  const mainImage = images[0]; // Imagen principal para la card

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
        {/* Imagen principal */}
        <div className="relative overflow-hidden">
          <img
            src={mainImage}
            alt={screenshot.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) {
                fallback.style.display = 'flex';
              }
            }}
          />
          
          {/* Fallback si la imagen no existe */}
          <div className="hidden w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex-col items-center justify-center">
            <div className="text-6xl mb-4">{screenshot.icon}</div>
            <p className="text-gray-500 text-sm">Imagen no disponible</p>
          </div>

          {/* Overlay con botón de ver */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <button
              onClick={handleImageClick}
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transform"
            >
              <Eye className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Badge de categoría */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {screenshot.icon} {screenshot.category}
          </div>

          {/* Indicador de múltiples imágenes */}
          {images.length > 1 && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              📷 {images.length}
            </div>
          )}
        </div>

        {/* Contenido */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {screenshot.title}
          </h3>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            {screenshot.description}
          </p>

          {/* Features */}
          <div className="space-y-2">
            {screenshot.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
            {screenshot.features.length > 3 && (
              <p className="text-xs text-gray-500 mt-2">
                +{screenshot.features.length - 3} características más
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Modal para ver la imagen en grande */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={handleCloseModal}
        >
          <div 
            className="relative w-full max-w-7xl max-h-[95vh] bg-white rounded-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal - Fijo */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-900 truncate">
                  {screenshot.icon} {screenshot.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-1 line-clamp-2">{screenshot.description}</p>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 flex-shrink-0 ml-4"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
              </button>
            </div>

            {/* Contenido scrolleable */}
            <div className="flex-1 overflow-y-auto">
              {/* Imagen en grande con carousel */}
              <div className="p-4 sm:p-6">
                <ImageCarousel 
                  images={images}
                  alt={screenshot.title}
                />
                
                {/* Fallback para modal */}
                <div className="hidden w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex-col items-center justify-center rounded-lg">
                  <div className="text-6xl sm:text-8xl mb-4">{screenshot.icon}</div>
                  <p className="text-gray-500 text-sm sm:text-base">Imagen no disponible</p>
                </div>
              </div>

              {/* Features completas */}
              <div className="p-4 sm:p-6 border-t border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
                  Características incluidas:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {screenshot.features.map((feature, index) => (
                    <div key={index} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StoreScreenshotCard;
