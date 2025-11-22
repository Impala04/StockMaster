import React, { useState, useEffect } from 'react';
import { GLOBAL_STYLES, MOCK_USER, MOCK_KPIS, MOCK_PRODUCTS, MOCK_CHART_DATA } from './constants';
import { ViewState, User } from './types';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { KPICard } from './components/KPICard';
import { InventoryTable } from './components/InventoryTable';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Plus, Download, Filter, Mail, Lock, Search } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function App() {
  // Global CSS Injection
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = GLOBAL_STYLES;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  const [user, setUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.LOGIN);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Login Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setUser(MOCK_USER);
      setCurrentView(ViewState.DASHBOARD);
      setIsLoading(false);
    }, 800);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView(ViewState.LOGIN);
    setEmail('');
    setPassword('');
  };

  // --- Render Views ---

  if (currentView === ViewState.LOGIN) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-bg px-4">
        <div className="w-full max-w-[400px] bg-surface rounded-2xl shadow-lg border border-border p-8">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-md">
              N
            </div>
            <h1 className="text-2xl font-bold text-text">Welcome back</h1>
            <p className="text-muted mt-2 text-sm">Enter your credentials to access the IMS.</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="you@company.com" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              icon={<Mail size={18} />}
            />
            <Input 
              label="Password" 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              icon={<Lock size={18} />}
            />
            <Button type="submit" className="w-full" isLoading={isLoading}>
              Sign In
            </Button>
          </form>
          
          <p className="mt-6 text-center text-xs text-muted">
            Forgot password? <a href="#" className="text-primary hover:underline">Reset it</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-bg font-sans text-text">
      {user && (
        <Sidebar 
          isOpen={isMobileMenuOpen}
          currentView={currentView}
          onViewChange={setCurrentView}
          onCloseMobile={() => setIsMobileMenuOpen(false)}
          onLogout={handleLogout}
        />
      )}

      <div className="flex-1 flex flex-col min-w-0">
        {user && (
          <Navbar 
            user={user} 
            onMenuClick={() => setIsMobileMenuOpen(true)}
          />
        )}

        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <div className="max-w-[1280px] mx-auto space-y-8">
            
            {currentView === ViewState.DASHBOARD && (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-text">Dashboard</h1>
                    <p className="text-muted mt-1">Overview of your inventory performance.</p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="secondary" leftIcon={<Download size={18}/>}>Export Report</Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {MOCK_KPIS.map(kpi => <KPICard key={kpi.id} kpi={kpi} />)}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Chart Section */}
                  <div className="lg:col-span-2 bg-surface rounded-xl border border-border p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-6">Stock Movement Trends</h3>
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={MOCK_CHART_DATA}>
                          <defs>
                            <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#0B76FF" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#0B76FF" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E6E9EE" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6B7280'}} dy={10} />
                          <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6B7280'}} />
                          <Tooltip 
                            contentStyle={{backgroundColor: '#FFFFFF', borderRadius: '8px', border: '1px solid #E6E9EE', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'}}
                            itemStyle={{color: '#0F1724', fontWeight: 600}}
                          />
                          <Area type="monotone" dataKey="stock" stroke="#0B76FF" strokeWidth={3} fillOpacity={1} fill="url(#colorStock)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  {/* Quick Actions / Recent Activity Placeholder */}
                  <div className="bg-surface rounded-xl border border-border p-6 shadow-sm flex flex-col">
                    <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <Button variant="secondary" className="w-full justify-start" leftIcon={<Plus size={18}/>}>Create New Receipt</Button>
                      <Button variant="secondary" className="w-full justify-start" leftIcon={<Filter size={18}/>}>Adjust Stock</Button>
                      <Button variant="secondary" className="w-full justify-start" leftIcon={<Download size={18}/>}>Download CSV Template</Button>
                    </div>
                  </div>
                </div>
                
                <div>
                   <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Recent Products</h3>
                    <Button variant="ghost" size="sm">View All</Button>
                   </div>
                   <InventoryTable products={MOCK_PRODUCTS.slice(0, 5)} />
                </div>
              </>
            )}

            {currentView === ViewState.PRODUCTS && (
              <>
                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-text">Products</h1>
                    <p className="text-muted mt-1">Manage your product catalog and stock levels.</p>
                  </div>
                  <Button leftIcon={<Plus size={18}/>}>Add Product</Button>
                </div>
                
                {/* Filters Bar */}
                <div className="bg-surface p-4 rounded-lg border border-border flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted h-4 w-4" />
                    <input 
                      type="text" 
                      placeholder="Search by SKU, name..." 
                      className="w-full h-10 pl-10 pr-4 rounded-md border border-border bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 text-sm"
                    />
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <Button variant="secondary" leftIcon={<Filter size={16}/>}>Filter</Button>
                    <Button variant="secondary" leftIcon={<Download size={16}/>}>Export</Button>
                  </div>
                </div>

                <InventoryTable products={MOCK_PRODUCTS} />
              </>
            )}
            
            {(currentView === ViewState.RECEIPTS || currentView === ViewState.SETTINGS) && (
               <div className="flex flex-col items-center justify-center h-[400px] bg-surface rounded-xl border border-border border-dashed">
                 <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    <Lock className="text-muted" size={24} />
                 </div>
                 <h3 className="text-lg font-semibold text-text">Module Locked</h3>
                 <p className="text-muted max-w-md text-center mt-2">
                   This module is part of the full enterprise version. This demo showcases the Dashboard and Product Management flows.
                 </p>
                 <Button className="mt-6" onClick={() => setCurrentView(ViewState.DASHBOARD)}>
                   Return to Dashboard
                 </Button>
               </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}

export default App;