import React from 'react';
import {
  LayoutDashboard,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { supabase } from '../supabaseClient';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'About', icon: User },
  { name: 'Projects', icon: Briefcase },
  { name: 'Education', icon: GraduationCap },
  { name: 'Achievements', icon: Award },
  { name: 'Contact', icon: Mail },
];

export default function Sidebar({ activeTab, onTabChange }) {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-slate-300 flex flex-col shadow-xl z-20 transition-all duration-300">
      <div className="p-6 border-b border-slate-800 flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg cursor-pointer hover:bg-blue-500 transition-colors" onClick={() => onTabChange('Dashboard')}>
          SB
        </div>
        <div>
          <h2 className="text-white font-bold text-lg leading-tight tracking-tight">Srinadh Bethi</h2>
          <p className="text-xs text-slate-400 font-medium">Software Intern</p>
        </div>
      </div>

      <div className="flex-1 py-6 flex flex-col gap-2 px-4 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          return (
            <button
              key={item.name}
              onClick={() => onTabChange(item.name)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group w-full ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon size={20} className={isActive ? "text-white" : "text-slate-400 group-hover:text-blue-400"} />
              <span className="font-medium">{item.name}</span>
              {isActive && <ChevronRight size={16} className="ml-auto opacity-70" />}
            </button>
          )
        })}
      </div>

      <div className="p-4 border-t border-slate-800">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center w-full gap-2 px-4 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all font-medium"
        >
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
        <div className="mt-4 text-center text-[10px] text-slate-600 font-medium tracking-wide uppercase">
          © {new Date().getFullYear()} Srinadh B.
        </div>
      </div>
    </aside>
  );
}
