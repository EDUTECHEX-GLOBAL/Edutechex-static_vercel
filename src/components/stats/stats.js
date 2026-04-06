import React from 'react';
import './stats.css';
import iconCareer from '../../assets/Career Navigation.svg';
import iconAssess from '../../assets/Assessments.svg';
import iconCourses from '../../assets/Online Course.svg';
import iconCerts from '../../assets/Industry Certifications.svg';

const Stats = () => {
  const statsData = [
    { cls: 'blue', icon: iconCareer, val: '10 K', lbl: 'Career Navigation' },
    { cls: 'teal', icon: iconAssess, val: '100 +', lbl: 'Real Time Assessments' },
    { cls: 'purple', icon: iconCourses, val: '60 K', lbl: 'Online Courses' },
    { cls: 'cyan', icon: iconCerts, val: '60 K', lbl: 'Industry Certifications' },
  ];

  return (
    <section className="stats-section">
      {statsData.map(s => (
        <div className={`stat-card ${s.cls}`} key={s.lbl}>
          <div className="stat-icon"><img src={s.icon} alt={s.lbl} className="stat-img" /></div>
          <div className="stat-info"><h3>{s.val}</h3><p>{s.lbl}</p></div>
        </div>
      ))}
    </section>
  );
};

export default Stats;