import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
  HiOutlineAnnotation
} from 'react-icons/hi';

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'home-admin',
    label: 'Inicio admin',
    path: '/admin',
    icon: <HiOutlineViewGrid />
  },

  {
    key: 'clients',
    label: 'Clientes',
    path: '/admin/clients',
    icon: <HiOutlineUsers />
  },
  {
    key: 'products',
    label: 'Productos',
    path: '/admin/clients',
    icon: <HiOutlineCube />
  },

  {
    key: 'buys',
    label: 'Compras',
    path: '/dashboard/buys',
    icon: <HiOutlineShoppingCart />
  },
  {
    key: 'transactions',
    label: 'Transacciones',
    path: '/dashboard/transacciones',
    icon: <HiOutlineDocumentText />
  },

  {
    key: 'generate-code',
    label: 'Generar código',
    path: '#',
    icon: <HiOutlineAnnotation />
  }
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'configuración',
    label: 'Configuración',
    path: '/dashboard/configuration',
    icon: <HiOutlineCog />
  },
  {
    key: 'ayuda',
    label: 'Ayuda & Soporte',
    path: '/support',
    icon: <HiOutlineQuestionMarkCircle />
  }
];
