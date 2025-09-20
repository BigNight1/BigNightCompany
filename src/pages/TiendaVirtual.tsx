import { ShoppingCart } from 'lucide-react';
import StoreScreenshotCard from '../components/StoreScreenshotCard';
import { storeScreenshots } from '../data/storeScreenshots';
import { useScrollToTop } from '../hooks/useScrollToTop';

function TiendaVirtual() {
  useScrollToTop(); // Scroll to top when component mounts

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* Elementos de fondo flotantes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Tu Tienda Virtual
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Así se ve tu ecommerce
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubre todas las páginas y funcionalidades que tendrás en tu tienda online. 
              <strong> Diseño profesional, funcionalidad completa y experiencia de usuario optimizada.</strong>
            </p>

            {/* Métricas de la tienda */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
                <p className="text-sm text-gray-600">Páginas incluidas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <p className="text-sm text-gray-600">Responsive</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24h</div>
                <p className="text-sm text-gray-600">Implementación</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
                <p className="text-sm text-gray-600">Productos</p>
              </div>
            </div>

            {/* CTAs principales */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href="https://wa.me/51965728013?text=Hola! Me gusta mucho el diseño de la tienda. ¿Puedo obtener más información sobre el proceso?" target="_blank" rel="noopener noreferrer" className="nav-link bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-pulse-glow focus:from-blue-700 focus:to-purple-700">
                🚀 Quiero esta tienda
              </a>
              <a href="https://venta-de-polo.vercel.app/" target="_blank" rel="noopener noreferrer" className="nav-link bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:bg-blue-50">
                💳 Ver Demo Interactiva
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Capturas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tour completo de tu tienda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada página está diseñada para maximizar las conversiones y ofrecer la mejor experiencia a tus clientes
            </p>
          </div>

          {/* Grid de capturas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storeScreenshots.map((screenshot) => (
              <StoreScreenshotCard
                key={screenshot.id}
                screenshot={screenshot}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección Panel Administrativo - NUEVA */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Panel Administrativo
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Control total de tu negocio
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Panel de administración completo para gestionar pedidos, productos, inventario y métricas. 
              <strong> Todo lo que necesitas para administrar tu tienda online.</strong>
            </p>

            {/* Métricas del panel admin */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
                <p className="text-sm text-gray-300">Módulos Admin</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <p className="text-sm text-gray-300">Acceso</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Real-time</div>
                <p className="text-sm text-gray-300">Métricas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                <p className="text-sm text-gray-300">Control</p>
              </div>
            </div>
          </div>

          {/* Grid de capturas del panel admin */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storeScreenshots
              .filter(screenshot => screenshot.category === 'admin')
              .map((screenshot) => (
                <StoreScreenshotCard
                  key={screenshot.id}
                  screenshot={screenshot}
                />
              ))}
          </div>

          {/* CTA específico del panel admin */}
          <div className="text-center mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">
                ¿Quieres control total de tu tienda?
              </h3>
              <p className="text-gray-300 mb-6">
                Con el panel administrativo tendrás <strong>control completo</strong> sobre pedidos, productos, inventario y métricas de ventas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="https://wa.me/51965728013?text=Hola! Me interesa mucho el panel administrativo. ¿Puedo ver más detalles sobre la gestión de pedidos y productos?" target="_blank" rel="noopener noreferrer" className="nav-link bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-pulse-glow focus:from-blue-600 focus:to-purple-600">
                  🎛️ Quiero el Panel Admin
                </a>
                <a href="https://venta-de-polo.vercel.app/" target="_blank" rel="noopener noreferrer" className="nav-link bg-transparent text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:bg-white/10">
                  💳 Ver Demo Completa
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Beneficios */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir nuestra plataforma?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No es solo una tienda, es una solución completa para hacer crecer tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Diseño Profesional
              </h3>
              <p className="text-gray-600">
                Interfaz moderna y atractiva que genera confianza en tus clientes y aumenta las conversiones.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Funcionalidad Completa
              </h3>
              <p className="text-gray-600">
                Desde el catálogo hasta el pago, todo está incluido. No necesitas plugins adicionales.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Optimizado para Ventas
              </h3>
              <p className="text-gray-600">
                Cada elemento está diseñado para maximizar las conversiones y mejorar la experiencia del usuario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Listo para tener tu tienda online?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Esta es exactamente la tienda que tendrás. <strong>Diseño profesional, funcionalidad completa y lista para vender.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/51965728013?text=Hola! Quiero obtener mi tienda de polos AHORA. ¿Está disponible?" target="_blank" rel="noopener noreferrer" className="nav-link bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:bg-gray-100">
              🚀 OBTENER MI TIENDA AHORA
            </a>
            <a href="https://venta-de-polo.vercel.app/" target="_blank" rel="noopener noreferrer" className="nav-link bg-transparent text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:bg-white focus:text-blue-600">
              💳 VER DEMO INTERACTIVA
            </a>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-lg font-semibold mb-2">
              🔥 Solo quedan 3 cupos disponibles este mes
            </p>
            <p className="text-sm opacity-90">⏰ Oferta termina en 3 días</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TiendaVirtual;
