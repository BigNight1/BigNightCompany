import { useState } from 'react';
import ImageModal from './ImageModal';
import { BarChart3, ShoppingCart } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
  description: string;
  gradientBg: string;
  iconName: 'BarChart3' | 'ShoppingCart';
  iconColor: string;
}

function FeatureCard({
  title,
  imageSrc,
  imageAlt,
  subtitle,
  description,
  gradientBg,
  iconName,
  iconColor
}: FeatureCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

     return (
     <div className="relative">
       <div className={`bg-gradient-to-br ${gradientBg} rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1`}>
         <div className="text-center">
           <div className="bg-white rounded-xl shadow-lg">
             <div className="text-center text-gray-500">
               {/* Imagen ocupando todo el espacio */}
                               <div className="w-full h-80 bg-white rounded-lg flex items-center justify-center overflow-hidden relative group p-4">
                  <img 
                    src={imageSrc} 
                    alt={imageAlt}
                    className="w-full h-full object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                   onError={(e) => {
                     // Fallback si la imagen no existe
                     const target = e.currentTarget as HTMLImageElement;
                     target.style.display = 'none';
                     const fallback = target.nextElementSibling as HTMLElement;
                     if (fallback) {
                       fallback.style.display = 'flex';
                     }
                   }}
                 />
                 {/* Overlay clickeable con indicador */}
                 <div 
                   className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg flex items-center justify-center cursor-pointer"
                   onClick={handleImageClick}
                 >
                   <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                     <span className="text-sm font-semibold text-gray-700">👁️ Ver en grande</span>
                   </div>
                 </div>
                 <div className="hidden flex-col items-center justify-center" style={{ color: iconColor }}>
                   {iconName === 'BarChart3' ? (
                     <BarChart3 className="w-16 h-16 mb-4" />
                   ) : (
                     <ShoppingCart className="w-16 h-16 mb-4" />
                   )}
                   <p className="text-lg font-semibold">{subtitle}</p>
                   <p className="text-sm">{description}</p>
                 </div>
               </div>
               <div className="mt-3">
                 <p className="text-lg font-semibold">{subtitle}</p>
                 <p className="text-sm">{description}</p>
               </div>
             </div>
           </div>
         </div>
       </div>
       
       {/* Modal para mostrar la imagen en grande */}
       <ImageModal
         isOpen={isModalOpen}
         onClose={handleCloseModal}
         imageSrc={imageSrc}
         imageAlt={imageAlt}
         title={title}
       />
     </div>
   );
 }

export default FeatureCard;
