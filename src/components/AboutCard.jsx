import Card from './common/Card';
import { UserCircle } from 'lucide-react';

export default function AboutCard() {
  return (
    <Card title="Career Objective" icon={UserCircle}>
      <div className="space-y-4 text-slate-600 leading-relaxed font-medium">
        <p>
          I am a motivated and enthusiastic fresher seeking an entry-level position where I can begin my professional career and apply my academic knowledge in practical projects.
        </p>
        <p>
          I have basic skills in embedded systems, Python programming, and IoT applications gained through academic projects. I am eager to learn new technologies and improve my technical abilities through hands-on experience.
        </p>
        <div className="pt-2 flex flex-wrap gap-2 text-xs">
          {['Independent Worker', 'Team Player', 'Detail Oriented', 'Dedicated'].map(tag => (
            <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </Card>
  );
}
