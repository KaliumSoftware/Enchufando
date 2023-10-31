import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog
} from 'react-icons/hi';
import { HiOutlineReceiptPercent } from 'react-icons/hi2';

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'home-admin',
    label: 'Inicio',
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
    path: '/admin/products',
    icon: <HiOutlineCube />
  },

  {
    key: 'transactions',
    label: 'Transacciones',
    path: '/admin/transactions',
    icon: <HiOutlineDocumentText />
  },

  {
    key: 'generate-code',
    label: 'Generar código',
    path: '#',
    icon: <HiOutlineReceiptPercent />
  }
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'configuración',
    label: 'Configuración',
    path: '/dashboard/settings',
    icon: <HiOutlineCog />
  },
  {
    key: 'ayuda',
    label: 'Ayuda & Soporte',
    path: '/support',
    icon: <HiOutlineQuestionMarkCircle />
  }
];

export const types = ['Todos', 'Roscado', 'Krona', 'Espiga'];

export const category = [
  'Ver todas',
  'Acople',
  'Adaptador',
  'Brida',
  'Buje',
  'Canilla',
  'Codo',
  'Cruz',
  'Cupla',
  'Curva',
  'Enchufe',
  'Flexible',
  'Junta',
  'Montura',
  'Niple',
  'Rosca con tuerca',
  'Tapón',
  'Tapa',
  'Tee',
  'Unión',
  'Valvula'
];
