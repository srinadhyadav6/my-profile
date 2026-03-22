import React from 'react';
import Card from './common/Card';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: "B.Tech – Electronics & Communication Engineering",
    school: "Vignana Bharathi Institute of Technology (VBIT), JNTU Hyderabad",
    period: "2022 – 2026",
    score: "CGPA: 7.1/10 (Pursuing 8th semester)"
  },
  {
    degree: "Intermediate (Class XI & XII)",
    school: "MJP Telangana BC Welfare Residential Jr. College, Lakshettipet",
    period: "2020 – 2022",
    score: "Percentage: 81.6%"
  },
  {
    degree: "Class X (SSC)",
    school: "MJP Telangana BC Welfare Residential School, Kamalapur",
    period: "2019 – 2020",
    score: "GPA: 10/10"
  }
];

export default function EducationCard() {
  return (
    <Card title="Education" icon={GraduationCap}>
      <div className="space-y-6">
        {education.map((item, index) => (
          <div key={index} className={`relative pl-8 ${index !== education.length - 1 ? 'pb-6 border-l-2 border-slate-100 ml-3' : 'ml-3'}`}>
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></div>
            <h3 className="font-bold text-slate-800 leading-tight">{item.degree}</h3>
            <p className="text-sm text-slate-500 font-medium my-1">{item.school}</p>
            <div className="flex items-center gap-4 mt-2">
              <span className="flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">
                <Calendar size={12} /> {item.period}
              </span>
              <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded-lg">
                {item.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
