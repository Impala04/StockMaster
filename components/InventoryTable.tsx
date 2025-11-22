import React from 'react';
import { Product } from '../types';
import { MoreHorizontal, Edit2, ArrowUpDown } from 'lucide-react';
import { Button } from './Button';

interface InventoryTableProps {
  products: Product[];
}

export const InventoryTable: React.FC<InventoryTableProps> = ({ products }) => {
  return (
    <div className="w-full bg-surface rounded-xl shadow-sm border border-border overflow-hidden">
      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b border-border">
            <tr>
              <th className="h-16 px-6 text-xs font-semibold text-muted uppercase tracking-wider w-[140px]">
                <div className="flex items-center gap-1 cursor-pointer hover:text-text">SKU <ArrowUpDown size={12}/></div>
              </th>
              <th className="h-16 px-6 text-xs font-semibold text-muted uppercase tracking-wider">Product Name</th>
              <th className="h-16 px-6 text-xs font-semibold text-muted uppercase tracking-wider">Category</th>
              <th className="h-16 px-6 text-xs font-semibold text-muted uppercase tracking-wider text-right">Stock</th>
              <th className="h-16 px-6 text-xs font-semibold text-muted uppercase tracking-wider">Status</th>
              <th className="h-16 px-6 text-xs font-semibold text-muted uppercase tracking-wider text-right">Price</th>
              <th className="h-16 px-6 w-[60px]"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors h-[56px] group">
                <td className="px-6 py-3 font-mono text-sm text-primary font-medium">{product.sku}</td>
                <td className="px-6 py-3 text-sm font-medium text-text">{product.name}</td>
                <td className="px-6 py-3 text-sm text-muted">{product.category}</td>
                <td className="px-6 py-3 text-sm text-text text-right font-mono">{product.stockLevel}</td>
                <td className="px-6 py-3">
                  <span className={`
                    inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${product.status === 'In Stock' ? 'bg-green-100 text-green-800' : ''}
                    ${product.status === 'Low Stock' ? 'bg-warning/20 text-warning/90' : ''}
                    ${product.status === 'Out of Stock' ? 'bg-red-100 text-red-800' : ''}
                  `}>
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-sm text-text text-right">${product.unitPrice.toFixed(2)}</td>
                <td className="px-6 py-3 text-right">
                  <button className="text-muted hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity p-2">
                    <Edit2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden divide-y divide-border">
        {products.map((product) => (
          <div key={product.id} className="p-4 flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-mono text-primary font-medium bg-primary/5 px-2 py-1 rounded">{product.sku}</span>
                <h4 className="font-medium text-text mt-2">{product.name}</h4>
                <p className="text-sm text-muted">{product.category}</p>
              </div>
              <button className="text-muted p-2"><MoreHorizontal size={20} /></button>
            </div>
            
            <div className="flex items-center justify-between pt-2 mt-1 border-t border-dashed border-border">
              <div className="flex flex-col">
                <span className="text-xs text-muted uppercase">Stock</span>
                <span className="text-lg font-semibold text-text">{product.stockLevel}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-muted uppercase">Status</span>
                 <span className={`
                    mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${product.status === 'In Stock' ? 'bg-green-100 text-green-800' : ''}
                    ${product.status === 'Low Stock' ? 'bg-warning/20 text-warning/90' : ''}
                    ${product.status === 'Out of Stock' ? 'bg-red-100 text-red-800' : ''}
                  `}>
                    {product.status}
                  </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};