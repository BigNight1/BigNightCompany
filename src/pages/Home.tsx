import {
  ShoppingCart,
  Zap,
  Shield,
  Users,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Truck,
  CreditCard,
  Smartphone,
  Globe,
  BarChart3,
  Settings,
  Headphones,
  Target,
} from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import { featureCardsData } from "../data/featureCards";
import { useScrollToTop } from "../hooks/useScrollToTop";

// Datos de testimonios mejorados con métricas específicas
const testimonials = [
  {
    name: "María González",
    role: "Boutique Bella",
    content:
      "En 24 horas tenía mi tienda funcionando. Vendí S/2,500 en la primera semana.",
    rating: 5,
    metric: "S/2,500 en 7 días",
  },
  {
    name: "Carlos Mendoza",
    role: "Polos Express",
    content:
      "Recuperé mi inversión en 15 días. Ahora vendo S/8,500/mes sin complicaciones.",
    rating: 5,
    metric: "S/8,500/mes",
  },
  {
    name: "Ana Torres",
    role: "Fashion Store",
    content:
      "La plataforma es súper fácil de usar. Mis ventas aumentaron 300% en el primer mes.",
    rating: 5,
    metric: "+300% ventas",
  },
];

function Home() {
  useScrollToTop(); // Scroll to top when component mounts

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Optimizado */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* Elementos de fondo flotantes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            {/* Badge de urgencia */}
            <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
              <Clock className="w-4 h-4 mr-2" />
              🔥 Solo 3 cupos disponibles este mes
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tu Tienda de Polos Online
              </span>
              <br />
              <span className="text-gray-800">en 24 Horas</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Plataforma completa de ecommerce con{" "}
              <strong>backend y frontend incluidos</strong>. Lista para vender
              en 24 horas. <strong>Recupera tu inversión en 30 días.</strong>
            </p>

            {/* Métricas sociales */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                <span>+150 emprendedores vendiendo</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                <span>4.9/5 satisfacción</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                <span>S/8,500 promedio/mes</span>
              </div>
            </div>

            {/* CTAs principales */}
                          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a href="https://wa.me/51965728013?text=Hola! Quiero obtener mi tienda de polos por S/499. ¿Me puedes dar más información?" target="_blank" rel="noopener noreferrer" className="nav-link bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-pulse-glow focus:from-blue-700 focus:to-purple-700">
                  🚀 Obtener mi tienda por S/499
                </a>
                <a href="https://venta-de-polo.vercel.app/" target="_blank" rel="noopener noreferrer" className="nav-link bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:bg-blue-50">
                  💳 Ver Demo Gratuita
                </a>
              </div>

            {/* Garantía triple */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">
                  GARANTÍA TRIPLE
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">30 días garantía</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">
                    Devolución si no estás satisfecho
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">Implementación sin riesgos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Beneficios - Mantener estructura actual */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir nuestra plataforma?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todo lo que necesitas para vender polos online, sin complicaciones
              técnicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Implementación Rápida
              </h3>
              <p className="text-gray-600">
                Tu tienda online lista en 24 horas. Sin conocimientos técnicos
                requeridos.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Todo Incluido
              </h3>
              <p className="text-gray-600">
                Backend, frontend, hosting, dominio, SSL y soporte técnico
                incluido.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Resultados Garantizados
              </h3>
              <p className="text-gray-600">
                95% de clientes recuperan su inversión en 30 días o menos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Características - Mantener estructura actual */}
      <section id="caracteristicas" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Características completas de tu tienda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todo lo que necesitas para vender polos online de manera
              profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Catálogo Completo
              </h3>
              <p className="text-gray-600 text-sm">
                Gestión de productos, inventario y categorías
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Pagos Tupay</h3>
              <p className="text-gray-600 text-sm">
                Múltiples métodos de pago integrados
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Envíos Flexibles
              </h3>
              <p className="text-gray-600 text-sm">
                Configuración de costos y zonas de envío
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Panel Admin</h3>
              <p className="text-gray-600 text-sm">
                Gestión completa de pedidos y ventas
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Responsive Design
              </h3>
              <p className="text-gray-600 text-sm">
                Optimizado para móviles y tablets
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                SEO Optimizado
              </h3>
              <p className="text-gray-600 text-sm">
                Posicionamiento en Google incluido
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Soporte 24/7</h3>
              <p className="text-gray-600 text-sm">
                Asistencia técnica cuando la necesites
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Fácil Configuración
              </h3>
              <p className="text-gray-600 text-sm">
                Panel intuitivo sin complicaciones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Métricas Sociales - NUEVA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Números que hablan por sí solos
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Resultados reales de emprendedores que confiaron en nuestra
              plataforma
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-sm opacity-90">
                Recuperan inversión en 30 días
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">S/8,500</div>
              <p className="text-sm opacity-90">Promedio de ventas mensuales</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24h</div>
              <p className="text-sm opacity-90">Tiempo de implementación</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <p className="text-sm opacity-90">Satisfacción del cliente</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="https://wa.me/51965728013?text=Hola! Quiero obtener estos resultados para mi tienda de polos. ¿Me puedes ayudar?" target="_blank" rel="noopener noreferrer" className="nav-link bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:bg-gray-100">
              🚀 Quiero estos resultados
            </a>
          </div>
        </div>
      </section>

      {/* Sección 3D Visual - Mantener estructura actual */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ve tu tienda en acción
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interfaz moderna y profesional lista para convertir visitantes en
              clientes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {featureCardsData.map((card, index) => (
              <FeatureCard
                key={index}
                title={card.title}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                subtitle={card.subtitle}
                description={card.description}
                gradientBg={card.gradientBg}
                iconName={card.iconName}
                iconColor={card.iconColor}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://venta-de-polo.vercel.app/" target="_blank" rel="noopener noreferrer" className="nav-link bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-pulse-glow focus:from-blue-700 focus:to-purple-700">
              💳 Ver Demo Completa
            </a>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios - Mejorada con métricas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Emprendedores reales que transformaron su negocio con nuestra
              plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </p>

                <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-semibold inline-block">
                  {testimonial.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Garantías - Mejorada */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Garantías que te dan tranquilidad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tu inversión está protegida con nuestras garantías completas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                30 Días de Garantía
              </h3>
              <p className="text-gray-600">
                Si no estás satisfecho, te devolvemos el 100% de tu dinero sin
                preguntas.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Resultados Garantizados
              </h3>
              <p className="text-gray-600">
                Si no estás satisfecho en 30 días, te devolvemos el dinero. Sin
                riesgos.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Soporte Prioritario
              </h3>
              <p className="text-gray-600">
                Asistencia técnica 24/7 para resolver cualquier duda o problema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Más urgente */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-6 inline-block animate-pulse">
            🚨 SOLO 3 CUPOS DISPONIBLES ESTE MES
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Quieres ser el próximo en vender S/8,500/mes?
          </h2>

          <p className="text-xl mb-8 opacity-90">
            Únete a más de 150 emprendedores que ya están vendiendo online sin
            complicaciones
          </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href="https://wa.me/51965728013?text=Hola! Quiero obtener mi tienda de polos AHORA. ¿Está disponible?" target="_blank" rel="noopener noreferrer" className="nav-link bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:bg-gray-100">
                🚀 OBTENER MI TIENDA AHORA
              </a>
              <a href="https://venta-de-polo.vercel.app/" target="_blank" rel="noopener noreferrer" className="nav-link bg-transparent text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:bg-white focus:text-blue-600">
                💳 VER DEMO GRATIS
              </a>
            </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-lg font-semibold mb-2">
              🔥 Solo quedan 2 cupos disponibles
            </p>
            <p className="text-sm opacity-90">⏰ Oferta termina en 3 días</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
