import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200/50 px-8 py-4 flex items-center justify-between transition-all duration-300">
      <div className="flex-1 flex justify-start">
        <div className="relative w-full max-w-md group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-400 group-focus-within:text-blue-500 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border-none rounded-2xl text-sm bg-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all shadow-sm"
            placeholder="Search projects, skills..."
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
          <Settings size={20} />
        </button>
        <div className="h-8 w-px bg-slate-200 mx-2"></div>
        <button className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shadow-sm border border-blue-200 hover:bg-blue-200 transition-colors">
          SB
        </button>
      </div>
    </header>
  );
}
