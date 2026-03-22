import React from 'react';
import Card from './common/Card';
import { Cpu, Code, Database, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: "Embedded & Hardware",
    icon: Cpu,
    skills: ["Arduino (Uno/Nano)", "Verilog HDL", "RTL Design", "CMOS Design", "Digital Logic", "Microcontrollers", "PCB Design Basics"]
  },
  {
    title: "Programming & Tools",
    icon: Code,
    skills: ["Python", "C", "MATLAB", "Scilab", "Vivado", "ModelSim", "Multisim", "Proteus", "LTSpice"]
  },
  {
    title: "Protocols",
    icon: Database,
    skills: ["UART", "I2C", "CAN", "SPI"]
  },
  {
    title: "Concepts",
    icon: Globe,
    skills: ["Signal Processing", "Embedded Systems", "IoT", "Network Traffic Monitoring (Wireshark)"]
  }
];

export default function SkillsCard() {
  return (
    <Card title="Technical Skills" icon={Code}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-2 mb-3">
              <category.icon size={16} className="text-blue-500" />
              <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">{category.title}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-600 rounded-xl text-xs font-semibold hover:border-blue-200 hover:bg-blue-50 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
