import { Link } from 'react-router-dom';
import { 
  Shield, 
  CreditCard, 
  Headphones, 
  Settings, 
  AlertTriangle,
  FileText,
  RefreshCw,
  CheckCircle
} from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

function Terminos() {
  useScrollToTop(); // Scroll to top when component mounts
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FileText className="w-4 h-4 mr-2" />
              Términos y Condiciones
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Términos y Condiciones
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Condiciones claras y transparentes para nuestro servicio de ecommerce
            </p>
          </div>
        </div>
      </section>

      {/* Términos y Condiciones */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* 1. Dominio y Hosting */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. Dominio y Hosting</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>El dominio se comprará a nombre del proveedor para agilizar el proyecto.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Una vez completado y cancelado el servicio, el dominio será transferido al cliente a través del proveedor.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>El primer pago de S/ 299 incluye el dominio por 1 año y la configuración completa del ecommerce.</span>
                </li>
              </ul>
            </div>

            {/* 2. Propiedad del Ecommerce */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2. Propiedad del Ecommerce</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>El cliente adquiere una licencia de uso del ecommerce, con control total sobre los productos, pedidos y configuraciones.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>El código fuente, diseño y arquitectura no son propiedad del cliente.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Si el cliente desea comprar la propiedad total del ecommerce y el código fuente, el costo será diferente y se cotiza por separado.</span>
                </li>
              </ul>
            </div>

            {/* 3. Suspensión y Eliminación de Datos */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border border-red-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-4">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">3. Suspensión y Eliminación de Datos</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Si el cliente deja de pagar el servicio por 3 meses, los datos se eliminan permanentemente.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>El cliente puede solicitar una copia de sus datos antes de la eliminación.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Tiene 3 días hábiles para pagar después de la fecha límite; de lo contrario, el servidor será suspendido y el ecommerce no estará disponible.</span>
                </li>
              </ul>
            </div>

            {/* 4. Pagos y Política de Devoluciones */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">4. Pagos y Política de Devoluciones</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Primer pago: S/ 299 (incluye dominio, hosting por 1 año, configuración inicial y soporte técnico básico).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Pago mensual: S/ 199 (incluye mantenimiento del servicio y soporte técnico).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>No hay devoluciones después de la configuración inicial del ecommerce.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Si el cliente no desea continuar con el servicio, simplemente deja de pagar el plan mensual (S/ 199).</span>
                </li>
              </ul>
            </div>

            {/* 5. Soporte Técnico */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">5. Soporte Técnico</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>El soporte técnico está incluido en el plan mensual.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Si el cliente requiere cambios personalizados o nuevas funcionalidades, el costo será S/ 25 por hora.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Mejoras generales del sistema serán informadas al cliente. Algunas pueden ser gratuitas, otras tendrán costo adicional.</span>
                </li>
              </ul>
            </div>

            {/* 6. Funcionalidades Personalizadas */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 border border-indigo-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mr-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">6. Funcionalidades Personalizadas</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>El cliente puede solicitar funcionalidades personalizadas, previa cotización.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Las modificaciones no cambian la propiedad del código fuente, que sigue siendo del proveedor.</span>
                </li>
              </ul>
            </div>

            {/* 7. Prohibiciones */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border border-red-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-4">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">7. Prohibiciones</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Queda prohibido usar la plataforma para actividades ilegales, fraudes o ventas no permitidas.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Si se detecta mal uso, el servicio será suspendido inmediatamente.</span>
                </li>
              </ul>
            </div>

            {/* 8. Propiedad Intelectual */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 border border-teal-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">8. Propiedad Intelectual</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>El cliente es dueño únicamente de los datos que suba (productos, pedidos, imágenes).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>El ecommerce es un servicio tipo SaaS (Single Tenant), no se entrega el código fuente bajo ninguna circunstancia.</span>
                </li>
              </ul>
            </div>

            {/* 9. Actualizaciones y Mejoras */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 border border-pink-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">9. Actualizaciones y Mejoras</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-pink-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Se informará al cliente sobre nuevas mejoras y actualizaciones.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-pink-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Algunas serán gratuitas; otras tendrán costo adicional, dependiendo de la complejidad.</span>
                </li>
              </ul>
            </div>

            {/* Aceptación */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Aceptación</h2>
                <p className="text-lg text-gray-700">
                  Al realizar el primer pago, el cliente acepta todas las condiciones anteriores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Tienes alguna duda sobre nuestros términos?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Estamos aquí para aclarar cualquier punto antes de comenzar
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/planes"
              className="nav-link bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:bg-gray-100"
            >
              🚀 Ver Planes
            </Link>
            <a 
              href="https://wa.me/51965728013" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link bg-transparent text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:bg-white focus:text-blue-600"
            >
              💬 Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terminos;
