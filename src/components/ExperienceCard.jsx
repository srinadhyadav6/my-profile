import Card from './common/Card';
import { BriefcaseBusiness, Calendar } from 'lucide-react';

export default function ExperienceCard() {
  return (
    <Card title="Work Experience" icon={BriefcaseBusiness}>
      <div className="relative pl-8">
        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></div>
        <h3 className="font-bold text-slate-800 leading-tight text-lg">Software Intern</h3>
        <p className="text-sm text-slate-500 font-medium my-1">Present</p>
        <div className="flex items-center gap-4 mt-2 mb-3">
          <span className="flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
            <Calendar size={12} /> Current Role
          </span>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed font-medium">
          Currently working as a Software Intern, applying academic knowledge and technical skills to practical, real-world software projects while continuously learning new technologies.
        </p>
      </div>
    </Card>
  );
}
