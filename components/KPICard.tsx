import React from 'react';
import { KPI } from '../types';
import { Box, Truck, AlertTriangle, DollarSign, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const iconMap = {
  box: Box,
  truck: Truck,
  alert: AlertTriangle,
  dollar: DollarSign,
};

export const KPICard: React.FC<{ kpi: KPI }> = ({ kpi }) => {
  const Icon = iconMap[kpi.icon];
  
  const isLowStock = kpi.isLowStock;
  
  // Dynamic styles based on low stock alert
  const cardBg = isLowStock 
    ? 'bg-gradient-to-r from-[#FFF7F7] to-[#FFF1F1] border-danger/30' 
    : 'bg-surface border-border';

  const iconBg = isLowStock ? 'bg-danger' : 'bg-primary';

  return (
    <div className={`relative overflow-hidden rounded-xl border p-5 shadow-sm transition-all duration-200 hover:shadow-md ${cardBg}`}>
      <div className="flex items-start justify-between">
        <div className="space-y-4">
          <div className={`flex h-10 w-10 items-center justify-center rounded-full ${iconBg} text-white shadow-sm`}>
            <Icon size={20} strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted">{kpi.label}</h3>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-semibold text-text mt-1">{kpi.value}</p>
              {kpi.trend !== undefined && (
                <span className={`flex items-center text-xs font-medium ${
                  kpi.trendDirection === 'up' ? 'text-accent' : 
                  kpi.trendDirection === 'down' ? 'text-danger' : 'text-muted'
                }`}>
                  {kpi.trendDirection === 'up' ? <TrendingUp size={12} className="mr-1" /> : 
                   kpi.trendDirection === 'down' ? <TrendingDown size={12} className="mr-1" /> : 
                   <Minus size={12} className="mr-1" />}
                  {Math.abs(kpi.trend)}%
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};