import { KPI, Product, StockHistory } from './types';

export const MOCK_USER = {
  id: 'u-1',
  name: 'Alex Sterling',
  email: 'alex@nexus-ims.com',
  role: 'Manager' as const,
  avatarUrl: 'https://picsum.photos/200',
};

export const MOCK_KPIS: KPI[] = [
  { id: '1', label: 'Total Products', value: '1,234', trend: 12, trendDirection: 'up', icon: 'box' },
  { id: '2', label: 'Low Stock Items', value: '23', trend: 5, trendDirection: 'down', icon: 'alert', isLowStock: true },
  { id: '3', label: 'Pending Receipts', value: '8', icon: 'truck' },
  { id: '4', label: 'Total Valuation', value: '$452,000', trend: 2.4, trendDirection: 'up', icon: 'dollar' },
];

export const MOCK_PRODUCTS: Product[] = [
  { id: '1', sku: 'NX-1001', name: 'Wireless Noise-Canceling Headphones', category: 'Electronics', stockLevel: 142, reorderPoint: 20, unitPrice: 299.00, status: 'In Stock', lastUpdated: '2023-10-25' },
  { id: '2', sku: 'NX-1002', name: 'Ergonomic Office Chair Pro', category: 'Furniture', stockLevel: 12, reorderPoint: 15, unitPrice: 450.00, status: 'Low Stock', lastUpdated: '2023-10-24' },
  { id: '3', sku: 'NX-1003', name: 'Mechanical Keyboard RGB', category: 'Electronics', stockLevel: 85, reorderPoint: 10, unitPrice: 129.50, status: 'In Stock', lastUpdated: '2023-10-26' },
  { id: '4', sku: 'NX-1004', name: 'USB-C Docking Station', category: 'Accessories', stockLevel: 0, reorderPoint: 5, unitPrice: 89.99, status: 'Out of Stock', lastUpdated: '2023-10-20' },
  { id: '5', sku: 'NX-1005', name: '27-inch 4K Monitor', category: 'Electronics', stockLevel: 45, reorderPoint: 10, unitPrice: 349.00, status: 'In Stock', lastUpdated: '2023-10-25' },
  { id: '6', sku: 'NX-1006', name: 'Standing Desk Frame', category: 'Furniture', stockLevel: 33, reorderPoint: 8, unitPrice: 299.00, status: 'In Stock', lastUpdated: '2023-10-22' },
  { id: '7', sku: 'NX-1007', name: 'Laptop Stand Aluminum', category: 'Accessories', stockLevel: 210, reorderPoint: 30, unitPrice: 45.00, status: 'In Stock', lastUpdated: '2023-10-26' },
];

export const MOCK_CHART_DATA: StockHistory[] = [
  { name: 'Mon', stock: 1180 },
  { name: 'Tue', stock: 1200 },
  { name: 'Wed', stock: 1150 },
  { name: 'Thu', stock: 1220 },
  { name: 'Fri', stock: 1234 },
  { name: 'Sat', stock: 1230 },
  { name: 'Sun', stock: 1234 },
];

// CSS Variables injection string
export const GLOBAL_STYLES = `
  :root {
    /* Colors */
    --color-bg: #F7FAFC;
    --color-surface: #FFFFFF;
    --color-primary: #0B76FF;
    --color-primary-600: #0A66E6;
    --color-primary-700: #084FCC;
    --color-accent: #00C2A8;
    --color-danger: #E03131;
    --color-warning: #FFB020;
    --color-muted: #6B7280;
    --color-text: #0F1724;
    --color-border: #E6E9EE;

    /* Typography */
    --font-family-sans: "Inter", "Segoe UI", Roboto, Arial, sans-serif;
    --font-size-base: 16px;
    --line-height-base: 24px;

    /* Radii */
    --radius-sm: 6px;
    --radius-md: 12px;
    --radius-lg: 20px;

    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(12, 18, 28, 0.04);
    --shadow-md: 0 6px 18px rgba(12, 18, 28, 0.08);
    --shadow-lg: 0 20px 40px rgba(12, 18, 28, 0.12);
  }
  
  body {
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-family-sans);
  }
`;