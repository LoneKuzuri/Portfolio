import React from 'react';
import './skills.css';

const Skills = () => {
  const sdata = [
    {
      title: 'Web Design',
      list: [
        'UI/UX Design',
        'Responsive Design',
        'Wireframing',
        'User Research'
      ]
    },
    {
      title: 'Frontend',
      list: [
        'Javascript',
        'ReactJS',
        'NextJS',
        'CSS3',
      ]
    },
    {
      title: 'Backend',
      list: [
        'NodeJS',
        'MongoDB',
        'ExpressJS',
        'Vercel',
      ]
    },
    {
      title: 'Soft Skills',
      list: [
        'Effective Communication',
        'Collaboration',
        'Commitment',
        'Leadership',
      ]
    },
  ];

  return (
    <div className="skill-section">
      <h2 className="section-heading">Skills<span className="purple-dot">.</span></h2>
      <div className="skills-grid">
        {sdata.map((skillGroup, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-title">{skillGroup.title}</h3>
            <ul className="skill-list">
              {skillGroup.list.map((item, i) => (
                <li key={i} className="skill-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
