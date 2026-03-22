import React from 'react';
import Card from './common/Card';
import { Award, Trophy, MessageSquare } from 'lucide-react';

const items = [
  { name: "Wrestling: State Level Silver Medal", icon: Trophy, color: "text-amber-500" },
  { name: "Kabaddi: State Level Silver Medal", icon: Trophy, color: "text-blue-500" },
  { name: "Debates: State Level Runner-Up (Volunteer)", icon: MessageSquare, color: "text-green-500" },
  { name: "C Language & Python Certified - Cisco Academy", icon: Award, color: "text-indigo-500" }
];

export default function AchievementsCard() {
  return (
    <Card title="Achievements & Awards" icon={Award}>
      <div className="grid grid-cols-1 gap-3">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:scale-[1.01] transition-transform">
            <div className={`p-2 rounded-xl bg-white shadow-sm border border-slate-100 ${item.color}`}>
              <item.icon size={20} />
            </div>
            <span className="font-bold text-slate-700 text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
