export interface StoreScreenshot {
  id: string;
  title: string;
  description: string;
  imageSrc: string | string[]; // Soporte para una imagen o múltiples imágenes
  category: 'inicio' | 'productos' | 'checkout' | 'confirmacion' | 'email' | 'login' | 'carrito' | 'detalles-producto' | 'admin';
  features: string[];
  icon: string;
}

export const storeScreenshots: StoreScreenshot[] = [
  {
    id: 'inicio',
    title: 'Página de Inicio',
    description: 'Tu tienda con diseño profesional y personalizable. Incluye banner promocional, hero section y navegación intuitiva.',
    imageSrc: '/screenshots/inicio.png',
    category: 'inicio',
    features: [
      'Diseño responsive y moderno',
      'Banner promocional personalizable',
      'Hero section con call-to-action',
      'Navegación intuitiva',
      'Búsqueda integrada'
    ],
    icon: '🏠'
  },
  {
    id: 'productos',
    title: 'Catálogo de Productos',
    description: 'Gestión completa de productos con filtros, categorías y vista detallada. Perfecto para mostrar tu inventario.',
    imageSrc: ['/screenshots/productos.png', '/screenshots/productos-2.png'],
    category: 'productos',
    features: [
      'Grid de productos responsive',
      'Filtros por categoría y precio',
      'Vista detallada de productos',
      'Gestión de inventario',
      'Imágenes de alta calidad'
    ],
    icon: '👕'
  },
  {
    id: 'producto-detalle',
    title: 'Página de Producto',
    description: 'Vista detallada con opciones de talla, color y cantidad. Incluye descripción completa y botón de compra.',
    imageSrc: ['/screenshots/producto-detalle.png', '/screenshots/producto-detalle-2.png', '/screenshots/producto-detalle-3.png'],
    category: 'detalles-producto',
    features: [
      'Múltiples imágenes del producto',
      'Opciones de talla y color',
      'Descripción detallada',
      'Precio y descuentos',
      'Botón de agregar al carrito'
    ],
    icon: '🔍'
  },
  {
    id: 'carrito',
    title: 'Carrito de Compras',
    description: 'Carrito intuitivo con resumen de productos, cantidades y total. Fácil gestión antes del checkout.',
    imageSrc: '/screenshots/carrito.png',
    category: 'carrito',
    features: [
      'Resumen de productos',
      'Modificación de cantidades',
      'Cálculo automático de totales',
      'Códigos de descuento',
      'Proceso de checkout'
    ],
    icon: '🛒'
  },
  {
    id: 'checkout',
    title: 'Proceso de Checkout',
    description: 'Formularios optimizados para datos de envío y facturación. Experiencia de compra fluida y segura.',
    imageSrc: ['/screenshots/checkout.png', '/screenshots/checkout-2.png'],
    category: 'checkout',
    features: [
      'Formularios de envío',
      'Datos de facturación',
      'Métodos de pago',
      'Validación en tiempo real',
      'Resumen de compra'
    ],
    icon: '💳'
  },
  {
    id: 'pago-tupay',
    title: 'Pago con Tupay',
    description: 'Integración completa con Tupay. QR codes, códigos numéricos y múltiples métodos de pago peruanos.',
    imageSrc: '/screenshots/pago-tupay.png',
    category: 'confirmacion',
    features: [
      'QR code para pagos',
      'Código numérico',
      'Múltiples métodos de pago',
      'Confirmación automática',
      'Seguridad garantizada'
    ],
    icon: '📱'
  },
  {
    id: 'confirmacion',
    title: 'Confirmación de Compra',
    description: 'Página de agradecimiento con detalles de la compra. Experiencia completa del cliente.',
    imageSrc: [
      '/screenshots/confirmacion.png',
      '/screenshots/confirmacion-2.png',
      '/screenshots/confirmacion-3.png'
    ],
    category: 'confirmacion',
    features: [
      'Mensaje de agradecimiento',
      'Detalles de la compra',
      'Número de pedido',
      'Seguimiento de envío',
      'Productos relacionados'
    ],
    icon: '✅'
  },
  {
    id: 'email',
    title: 'Email de Confirmación',
    description: 'Email automático enviado al cliente con todos los detalles de su compra. Comunicación profesional.',
    imageSrc: '/screenshots/email.png',
    category: 'email',
    features: [
      'Diseño profesional',
      'Detalles de la compra',
      'Información de envío',
      'Seguimiento del pedido',
      'Contacto de soporte'
    ],
    icon: '📧'
  },
  {
    id: 'login',
    title: 'Login de Clientes',
    description: 'Sistema de autenticación seguro para clientes. Registro e inicio de sesión intuitivos.',
    imageSrc: '/screenshots/login.png',
    category: 'login',
    features: [
      'Login seguro',
      'Registro de usuarios',
      'Recuperación de contraseña',
      'Perfil de usuario',
      'Historial de compras'
    ],
    icon: '🔐'
  },
  {
    id: 'resumen-admin',
    title: 'Dashboard Administrativo',
    description: 'Panel de control completo con métricas en tiempo real. Resumen general de ventas, pedidos y clientes.',
    imageSrc: '/screenshots/Resumen-admin.png',
    category: 'admin',
    features: [
      'Métricas en tiempo real',
      'Ventas totales',
      'Pedidos pendientes',
      'Productos en stock',
      'Clientes activos',
      'Filtros por fecha'
    ],
    icon: '📊'
  },
  {
    id: 'pedidos-admin',
    title: 'Gestión de Pedidos',
    description: 'Administración completa de pedidos con filtros, búsqueda y gestión de estados. Vista detallada de cada pedido.',
    imageSrc: [
      '/screenshots/Pedidos-admin.png',
      '/screenshots/Pedidos-admin-2.png'
    ],
    category: 'admin',
    features: [
      'Lista completa de pedidos',
      'Filtros por estado',
      'Búsqueda de pedidos',
      'Vista detallada de pedidos',
      'Gestión de estados',
      'Información del cliente'
    ],
    icon: '📦'
  },
  {
    id: 'productos-admin',
    title: 'Gestión de Productos',
    description: 'Panel completo para administrar productos, inventario y categorías. Agregar, editar y gestionar stock.',
    imageSrc: '/screenshots/Productos-admin.png',
    category: 'admin',
    features: [
      'Lista de productos',
      'Gestión de inventario',
      'Filtros por categoría',
      'Búsqueda de productos',
      'Agregar nuevos productos',
      'Editar productos existentes'
    ],
    icon: '🛍️'
  }
];

export const categories = [
  { id: 'inicio', name: 'Inicio', icon: '🏠' },
  { id: 'productos', name: 'Productos', icon: '👕' },
  { id: 'carrito', name: 'Carrito', icon: '🛒' },
  { id: 'checkout', name: 'Checkout', icon: '💳' },
  { id: 'confirmacion', name: 'Confirmación', icon: '✅' },
  { id: 'email', name: 'Email', icon: '📧' },
  { id: 'login', name: 'Login', icon: '🔐' },
  { id: 'admin', name: 'Panel Admin', icon: '⚙️' }
];
