import React from 'react';
import { User } from '../types';
import { Menu, Bell, Search, ChevronDown } from 'lucide-react';

interface NavbarProps {
  user: User;
  onMenuClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ user, onMenuClick }) => {
  return (
    <header className="h-16 bg-surface border-b border-border flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
      
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="p-2 text-muted hover:bg-gray-50 rounded-md lg:hidden focus:outline-none focus:ring-2 focus:ring-primary/20"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        
        {/* Desktop Search */}
        <div className="hidden md:flex items-center relative w-64 lg:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted h-4 w-4" />
          <input 
            type="text" 
            placeholder="Search inventory, orders, SKUs..." 
            className="w-full h-10 pl-10 pr-4 rounded-md border border-border bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 text-sm transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 lg:gap-6">
        <button className="relative p-2 text-muted hover:text-primary transition-colors rounded-full hover:bg-gray-50">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-danger rounded-full border-2 border-surface"></span>
        </button>

        <div className="h-8 w-px bg-border hidden sm:block"></div>

        <button className="flex items-center gap-3 hover:bg-gray-50 p-1.5 rounded-lg transition-colors">
          <img 
            src={user.avatarUrl} 
            alt={user.name} 
            className="w-8 h-8 rounded-full object-cover border border-border"
          />
          <div className="hidden sm:block text-left">
            <p className="text-sm font-medium text-text">{user.name}</p>
            <p className="text-xs text-muted">{user.role}</p>
          </div>
          <ChevronDown size={16} className="text-muted hidden sm:block" />
        </button>
      </div>
    </header>
  );
};