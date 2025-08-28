
export interface FeatureCardData {
  title: string;
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
  description: string;
  gradientBg: string;
  iconName: 'BarChart3' | 'ShoppingCart';
  iconColor: string;
}

export const featureCardsData: FeatureCardData[] = [
  {
    title: "Dashboard Principal",
    imageSrc: "/admin.png",
    imageAlt: "Dashboard Principal - Panel de Administración",
    subtitle: "Panel de Administración",
    description: "Métricas en tiempo real • Gestión de pedidos • Inventario",
    gradientBg: "from-gray-100 to-gray-200",
    iconName: "BarChart3",
    iconColor: "#2563eb" // blue-600
  },
  {
    title: "Tienda Online",
    imageSrc: "/VistaCliente.png",
    imageAlt: "Tienda Online - Vista del Cliente",
    subtitle: "Vista del Cliente",
    description: "Catálogo • Carrito • Checkout • Pagos",
    gradientBg: "from-blue-100 to-purple-100",
    iconName: "ShoppingCart",
    iconColor: "#16a34a" // green-600
  }
];
