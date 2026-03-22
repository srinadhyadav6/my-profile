import React from 'react';
import Card from './common/Card';
import { Briefcase, FileText, Zap, Shield, Search, Monitor, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Smart Blind Stick with 270° Obstacle Detection",
    description: "Visually impaired assistance system with 270° coverage using ultrasonic sensors, servo motors, GPS support, and soil moisture sensing.",
    impact: "PUBLISHED RESEARCH PAPER to 2nd International Conference.",
    icon: Zap,
    color: "bg-amber-100 text-amber-600",
    tags: ["Embedded", "Sensors", "Arduino", "IoT"]
  },
  {
    title: "Keylogger using Python",
    description: "Developed an application to monitor and record keystrokes in real-time, capturing keyboard input via system-level hooks.",
    impact: "Improved skills in event handling and cybersecurity auditing.",
    icon: FileText,
    color: "bg-blue-100 text-blue-600",
    tags: ["Python", "Security", "OS Hooks"]
  },
  {
    title: "Safety Net Deployment System",
    description: "Automated fall prevention system for construction sites using sensors and microcontrollers to deploy protective nets instantly.",
    impact: "Demonstrates practical automation for life safety.",
    icon: Shield,
    color: "bg-green-100 text-green-600",
    tags: ["Automation", "Safety Tech", "Microcontrollers"]
  },
  {
    title: "Network Traffic Analysis (Wireshark)",
    description: "Real-time monitoring and packet analysis of TCP/IP, HTTP, DNS, and ICMP protocols to troubleshoot connectivity issues.",
    impact: "Improved network security and protocol fundamentals.",
    icon: Search,
    color: "bg-indigo-100 text-indigo-600",
    tags: ["Networking", "Wireshark", "Cybersecurity"]
  },
  {
    title: "Student Desktop",
    description: "A comprehensive student management dashboard providing centralized access to resources and tools.",
    impact: "Streamlines daily student workflow with a centralized web desktop interface.",
    icon: Monitor,
    color: "bg-purple-100 text-purple-600",
    tags: ["Web Dev", "Dashboard", "Frontend"],
    link: "https://desktopstudent.netlify.app/"
  }
];

export default function ProjectsCard() {
  return (
    <Card title="Academic Projects" icon={Briefcase}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <div key={idx} className="p-5 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 transition-all group border-l-4 border-l-blue-500">
            <div className="flex items-start gap-4 mb-3">
              <div className={`p-2 rounded-xl flex-shrink-0 ${project.color}`}>
                <project.icon size={20} />
              </div>
              <div className="flex-1 flex items-start flex-col sm:flex-row gap-2">
                <h3 className="font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors flex-1">{project.title}</h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-bold" title="View Project">
                    <ExternalLink size={14} /> View
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm text-slate-500 mb-4 line-clamp-2">{project.description}</p>
            <div className="bg-slate-100/50 p-2.5 rounded-lg mb-4 italic text-xs font-medium text-slate-600">
              "{project.impact}"
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-slate-200 text-slate-600 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
