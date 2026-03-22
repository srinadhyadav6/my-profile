import React from 'react';
import Header from './Header';
import WelcomeCard from './WelcomeCard';
import AboutCard from './AboutCard';
import ProfileCard from './ProfileCard';
import EducationCard from './EducationCard';
import SkillsCard from './SkillsCard';
import ProjectsCard from './ProjectsCard';
import AchievementsCard from './AchievementsCard';
import PersonalInfoCard from './PersonalInfoCard';
import ExperienceCard from './ExperienceCard';

export default function Dashboard({ activeTab }) {
  const renderContent = () => {
    switch(activeTab) {
      case 'About':
        return (
          <div className="max-w-3xl mx-auto flex flex-col gap-8">
            <AboutCard />
            <ExperienceCard />
          </div>
        );
      case 'Projects':
        return <div className="max-w-4xl mx-auto"><ProjectsCard /></div>;
      case 'Education':
        return <div className="max-w-3xl mx-auto"><EducationCard /></div>;
      case 'Achievements':
        return <div className="max-w-3xl mx-auto"><AchievementsCard /></div>;
      case 'Contact':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProfileCard />
            <PersonalInfoCard />
          </div>
        );
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 flex flex-col gap-8">
              <AboutCard />
              <ExperienceCard />
              <SkillsCard />
              <ProjectsCard />
              <AchievementsCard />
            </div>
            <div className="lg:col-span-4 sticky top-28 flex flex-col gap-8">
              <ProfileCard />
              <EducationCard />
              <PersonalInfoCard />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col flex-1 pl-64 min-h-screen bg-slate-50">
      <Header />
      
      <main className="flex-1 p-8 max-w-7xl w-full mx-auto animate-fade-in transition-all duration-500">
        <div className="mb-8">
          <WelcomeCard />
        </div>
        
        {renderContent()}
        
        <footer className="mt-12 py-8 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-400 font-medium italic">
            "I hereby declare that the information provided above is true to the best of my knowledge."
          </p>
          <p className="mt-2 text-slate-500 font-bold">Srinadh Bethi</p>
        </footer>
      </main>
    </div>
  );
}
