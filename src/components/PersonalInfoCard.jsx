import Card from './common/Card';
import { User, Languages, Heart, Cake } from 'lucide-react';

export default function PersonalInfoCard() {
  const details = [
    { label: "Date of Birth", value: "28/02/2004", icon: Cake, color: "text-rose-500" },
    { label: "Languages", value: "Telugu, English, Hindi", icon: Languages, color: "text-blue-500" },
    { label: "Hobbies", value: "Reading, Gaming, Motivation", icon: Heart, color: "text-rose-400" }
  ];

  return (
    <Card title="Personal Details" icon={User}>
      <div className="space-y-4">
        {details.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 group">
            <div className={`p-2 rounded-xl bg-slate-50 transition-colors group-hover:bg-white group-hover:shadow-sm ${item.color}`}>
              <item.icon size={18} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">{item.label}</p>
              <p className="text-sm font-bold text-slate-700">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
