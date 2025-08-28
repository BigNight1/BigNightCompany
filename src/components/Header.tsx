import { Link } from 'react-router-dom';
import { Clock, Users, Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="bg-white shadow-sm relative">
      {/* Banner de urgencia */}
                        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-3 text-center text-sm font-medium relative overflow-hidden">
                    {/* Elementos de fondo animados */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 animate-pulse"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 px-4 relative z-10">
                      <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                        <Clock className="w-4 h-4 mr-2 animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold">¡Oferta limitada! Solo 5 cupos disponibles</span>
                      </div>
                      <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-xs sm:text-sm font-semibold">+150 emprendedores ya vendiendo</span>
                      </div>
                      <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                        <Zap className="w-4 h-4 mr-2 animate-bounce" />
                        <span className="text-xs sm:text-sm font-semibold">Implementación en 24h</span>
                      </div>
                    </div>
                  </div>
      
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 shadow-sm hover:shadow-md transition-all duration-300">
                          <Link to="/" className="w-full h-full flex items-center justify-center">
                            <img src="/LogoNewBlack.png" alt="BigNight" className="w-full h-full object-contain" />
                          </Link>
                        </div>
                        <div className="hidden sm:block">
                          <h1 className="text-lg font-bold text-gray-900 uppercase">BigNight</h1>
                          <p className="text-xs text-gray-500">SaaS Ecommerce</p>
                        </div>
                      </div>
                      
                      {/* Desktop Navigation */}
                      <div className="hidden md:flex items-center space-x-8">
                        <Link 
                          to="/" 
                          className="nav-link text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium relative group px-3 py-2 rounded-lg hover:bg-gray-50"
                        >
                          Inicio
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link 
                          to="/planes" 
                          className="nav-link text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium relative group px-3 py-2 rounded-lg hover:bg-gray-50"
                        >
                          Planes
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <a href="https://wa.me/51965728013?text=Hola! Quiero obtener mi tienda de polos por S/499. ¿Me puedes dar más información?" target="_blank" rel="noopener noreferrer" className="nav-link bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-pulse-glow focus:from-blue-700 focus:to-purple-700">
                          Obtener por S/499
                        </a>
                      </div>

                      {/* Mobile Menu Button */}
                      <div className="md:hidden">
                        <button 
                          onClick={toggleMenu}
                          className="nav-link text-gray-600 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-gray-100 focus:bg-gray-100"
                        >
                          {isMenuOpen ? (
                            <X className="w-6 h-6" />
                          ) : (
                            <Menu className="w-6 h-6" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className={`md:hidden border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
                      isMenuOpen ? 'max-h-64 opacity-100 pt-4 pb-4' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="flex flex-col space-y-4 px-4">
                        <Link 
                          to="/" 
                          onClick={closeMenu}
                          className="nav-link text-gray-600 hover:text-blue-600 transition-all duration-300 text-center py-3 px-4 rounded-lg hover:bg-gray-50 font-medium focus:bg-gray-50"
                        >
                          Inicio
                        </Link>
                        <Link 
                          to="/planes" 
                          onClick={closeMenu}
                          className="nav-link text-gray-600 hover:text-blue-600 transition-all duration-300 text-center py-3 px-4 rounded-lg hover:bg-gray-50 font-medium focus:bg-gray-50"
                        >
                          Planes
                        </Link>
                        <a href="https://wa.me/51965728013?text=Hola! Quiero obtener mi tienda de polos por S/499. ¿Me puedes dar más información?" target="_blank" rel="noopener noreferrer" className="nav-link bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full animate-pulse-glow focus:from-blue-700 focus:to-purple-700">
                          <span className="flex items-center justify-center">
                            <Zap className="w-4 h-4 mr-2" />
                            Obtener por S/499
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
    </header>
  );
}

export default Header;
