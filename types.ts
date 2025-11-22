export enum ViewState {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  PRODUCTS = 'PRODUCTS',
  RECEIPTS = 'RECEIPTS',
  SETTINGS = 'SETTINGS'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Manager' | 'Staff';
  avatarUrl?: string;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  stockLevel: number;
  reorderPoint: number;
  unitPrice: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  lastUpdated: string;
}

export interface KPI {
  id: string;
  label: string;
  value: string | number;
  trend?: number; // percentage
  trendDirection?: 'up' | 'down' | 'neutral';
  icon: 'box' | 'alert' | 'truck' | 'dollar';
  isLowStock?: boolean;
}

export interface StockHistory {
  name: string;
  stock: number;
}