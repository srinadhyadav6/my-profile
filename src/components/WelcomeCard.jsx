import { Sparkles } from 'lucide-react';

export default function WelcomeCard() {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden group">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="relative z-10 flex items-start gap-4">
        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm mt-1">
          <Sparkles className="text-blue-100" size={28} />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-3 tracking-tight">Welcome back, Srinadh! 👋</h1>
          <p className="text-blue-100 text-lg max-w-xl font-medium leading-relaxed">
            You have <strong className="text-white">4 projects</strong> in progress and <strong className="text-white">1 recently published research paper</strong>. Ready to build something new today?
          </p>
        </div>
      </div>
    </div>
  );
}
