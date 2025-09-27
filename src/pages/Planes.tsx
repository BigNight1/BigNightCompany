import {
  CheckCircle,
  Star,
  Zap,
  Shield,
  Clock,
  Users,
  TrendingUp,
  Headphones,
  Target,
  ShoppingCart,
} from "lucide-react";
import { useScrollToTop } from '../hooks/useScrollToTop';

// Testimonios mejorados con métricas específicas
const testimonials = [
  {
    name: "María González",
    role: "Boutique Bella",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content:
      "En 24 horas tenía mi tienda funcionando. Vendí S/2,500 en la primera semana.",
    rating: 5,
    metric: "S/2,500 en 7 días",
  },
  {
    name: "Carlos Mendoza",
    role: "Polos Express",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content:
      "Recuperé mi inversión en 15 días. Ahora vendo S/8,500/mes sin complicaciones.",
    rating: 5,
    metric: "S/8,500/mes",
  },
  {
    name: "Ana Torres",
    role: "Fashion Store",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "La plataforma es súper fácil de usar. Mis ventas aumentaron 300% en el primer mes.",
    rating: 5,
    metric: "+300% ventas",
  },
];

function Planes() {
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
                Planes que se Pagan Solos
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Elige el plan perfecto para tu negocio.{" "}
              <strong>
                95% de clientes recuperan su inversión en 30 días.
              </strong>
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
          </div>
        </div>
      </section>

      {/* Sección de Planes - Mejorada */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Plan Implementación Completa - Mejorado */}
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl border border-blue-200 hover:shadow-2xl transition-all duration-300">
              {/* Badge OFERTA LIMITADA */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
                  🎯 OFERTA LIMITADA
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Implementación Completa
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    S/299
                  </span>
                  <span className="text-lg text-gray-500 ml-2">pago único</span>
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  <span className="line-through">~~S/999~~</span>
                  <span className="text-green-600 font-semibold ml-2">
                    (50% descuento)
                  </span>
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold">
                  ⚡ Recupera inversión en 30 días
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Tienda completa lista en 24 horas
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Backend + Frontend incluidos
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Hosting y dominio incluido
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    SSL certificado gratuito
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Integración Tupay completa
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Panel de administración</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Soporte técnico 24/7</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Garantía de 30 días</span>
                </div>
              </div>

              <button className="nav-link w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-pulse-glow focus:from-blue-700 focus:to-purple-700">
                🚀 Obtener por S/299
              </button>
            </div>

            {/* Plan Mantenimiento Mensual - Mejorado */}
            <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl border border-purple-200 hover:shadow-2xl transition-all duration-300">
              {/* Badge RECOMENDADO */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                  ⭐ RECOMENDADO
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Mantenimiento Mensual
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    S/199
                  </span>
                  <span className="text-lg text-gray-500 ml-2">por mes</span>
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  Sin contratos anuales • Cancelación en cualquier momento
                </div>
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg text-sm font-semibold">
                  🛡️ Incluye actualizaciones de seguridad
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Soporte prioritario 24/7
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Actualizaciones automáticas
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Backup diario de datos</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Monitoreo de seguridad</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Optimización de velocidad
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Reportes de rendimiento</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Integración con redes sociales
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Cancelación sin penalización
                  </span>
                </div>
              </div>

              <button className="nav-link w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-pulse-glow focus:from-purple-700 focus:to-pink-700">
                💳 Empezar por S/199/mes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Comparación - Mejorada */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegirnos vs. otras plataformas?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comparación de costos y beneficios a 1 año
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">
                      Característica
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Nuestra Plataforma
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Shopify
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      WooCommerce
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Desarrollo Personalizado
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Costo inicial</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">
                      S/299
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      S/2,400+
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      S/1,500+
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      S/15,000+
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Costo anual</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">
                      S/2,388
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      S/4,800+
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      S/3,600+
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      S/5,000+
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">
                      Tiempo implementación
                    </td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">
                      24 horas
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      1-2 semanas
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      2-4 semanas
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      3-6 meses
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">
                      Soporte en español
                    </td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">
                      ✅ 24/7
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      ❌ Limitado
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      ❌ Comunitario
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      ❌ Costoso
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Pagos Tupay</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">
                      ✅ Incluido
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      ❌ No disponible
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      ⚠️ Configuración compleja
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      ⚠️ Desarrollo adicional
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Hosting incluido</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">
                      ✅ Sí
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      ✅ Sí
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      ❌ No
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      ❌ No
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-green-100 text-green-800 px-6 py-4 rounded-xl inline-block">
              <p className="font-semibold">
                💰 Ahorras hasta S/12,000 en el primer año
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección "Why Choose Us" - Mejorada */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué más de 150 emprendedores nos eligen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ventajas únicas que hacen la diferencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Implementación Rápida
              </h3>
              <p className="text-gray-600">
                Tu tienda lista en 24 horas. Sin conocimientos técnicos
                requeridos.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Garantía Triple
              </h3>
              <p className="text-gray-600">
                30 días de garantía, devolución si no vendes, implementación sin
                riesgos.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Soporte 24/7
              </h3>
              <p className="text-gray-600">
                Asistencia técnica en español cuando la necesites.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Resultados Garantizados
              </h3>
              <p className="text-gray-600">
                95% de clientes recuperan su inversión en 30 días.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Todo Incluido
              </h3>
              <p className="text-gray-600">
                Backend, frontend, hosting, dominio, SSL y soporte técnico.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ROI Comprobado
              </h3>
              <p className="text-gray-600">
                Promedio de ventas: S/8,500/mes entre nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios - Mejorada */}
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
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
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

      {/* Sección FAQ - Mejorada */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Resolvemos tus dudas más comunes
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Cuánto tiempo toma implementar mi tienda?
              </h3>
              <p className="text-gray-600">
                Tu tienda estará lista en 24 horas. El proceso incluye
                configuración completa, subida de productos y activación de
                pagos.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Puedo personalizar los colores de mi tienda?
              </h3>
              <p className="text-gray-600">
                Sí, puedes personalizar completamente los colores, logos y
                diseño de tu tienda para que coincida con tu marca.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Qué pasa si quiero agregar más productos?
              </h3>
              <p className="text-gray-600">
                Puedes agregar productos ilimitados sin costo adicional. El
                panel de administración te permite gestionar todo fácilmente.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Incluye integración con redes sociales?
              </h3>
              <p className="text-gray-600">
                Sí, incluye integración con Facebook, Instagram y WhatsApp para
                maximizar tus ventas en redes sociales.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Puedo exportar mis datos si cambio de plataforma?
              </h3>
              <p className="text-gray-600">
                Absolutamente. Tienes acceso completo a todos tus datos y puedes
                exportarlos en cualquier momento sin restricciones.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Qué métodos de pago están disponibles?
              </h3>
              <p className="text-gray-600">
                Integración completa con Tupay: tarjetas de crédito/débito,
                Yape, Plin, efectivo, transferencias y pagos en agentes.
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
            <button className="nav-link bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:bg-gray-100">
              🚀 OBTENER MI TIENDA AHORA
            </button>
            <button className="nav-link bg-transparent text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:bg-white focus:text-blue-600">
              💳 VER DEMO GRATIS
            </button>
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

export default Planes;
