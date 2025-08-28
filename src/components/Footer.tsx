import { Link } from "react-router-dom";
import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          <div className="text-center sm:text-left">
                           <div className="flex items-center justify-center sm:justify-start space-x-3 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img
                  src="/Logo.webp"
                  alt="BigNightCompany"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold">
                BigNight Company
              </span>
            </div>
                               <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                     Plataforma completa de ecommerce para tiendas de polos. Backend y
                     frontend incluidos, lista para vender en 24 horas.
                   </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4 text-base sm:text-lg">
              Producto
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              
              <li>
                <Link to="/planes" className="hover:text-white">
                  Planes
                </Link>
              </li>
              <li>
                <a
                  href="https://venta-de-polo.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Demo
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Soporte</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <a
                  href="https://www.linkedin.com/in/edu-armas/"
                  className="hover:text-white"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/51965728013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4 text-base sm:text-lg">
              Informacion
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <Link to="/terminos" className="hover:text-white">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left relative">
            {/* Línea vertical divisoria */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gray-700 transform -translate-x-6"></div>
            
            <h4 className="font-semibold mb-4 text-base sm:text-lg">
              Síguenos
            </h4>
            <div className="flex items-center justify-center sm:justify-start space-x-6 sm:space-x-4 lg:space-x-6">
              <a
                href="https://www.facebook.com/eduarmas11/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
              >
                <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.instagram.com/edu.armas11/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
              >
                <SiInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@bignight11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
              >
                <FaTiktok className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>

                       <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Plataforma SaaS. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">RUC: 10753203660</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
