import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title: string;
}

function ImageModal({ isOpen, onClose, imageSrc, imageAlt, title }: ImageModalProps) {
  // Cerrar modal con tecla ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Overlay de fondo */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-[10000] w-full max-w-6xl max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header del modal */}
        <div className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        {/* Contenido del modal */}
        <div className="flex-1 p-6 bg-white">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
