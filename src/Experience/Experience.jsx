import React, { useState } from 'react';
import './Experience.css';

const experienceData = [
  {
    company: 'FourBit Technologies',
    role: 'Frontend Developer Intern',
    company_label: '@ FourBit Technologies',
    date: 'March – June 2025',
    type: 'Internship',
    points: [
      'Worked with a team to build a marketing website and e-commerce platform for blistabloc, an ambitious startup.',
      'Helped solidify a brand direction for blistabloc that spans both packaging and web.',
      'Interfaced with clients on a weekly basis, providing technological expertise.',
    ],
  },
  {
    company: 'Corpola Tech',
    role: 'Frontend Developer Intern',
    company_label: '@ Corpola Tech',
    date: 'Dec 2025 – Present',
    type: 'Internship · Current',
    points: [
      'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and React.js.',
      'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.',
      'Clients included Reliance College.',
    ],
  },
];

const CompanyDetails = ({ data, visible }) => {
  const { role, company_label, date, type, points } = data;
  return (
    <div className={`details ${visible ? 'details-visible' : ''}`}>
      <div className="details-header">
        <div>
          <h3>
            {role}&nbsp;<span className="purple-text">{company_label}</span>
          </h3>
          <p className="date">{date}</p>
        </div>
        <span className="experience-badge">{type}</span>
      </div>
      <ul>
        {points.map((point, i) => (
          <li key={i} style={{ animationDelay: `${i * 0.08}s` }}>
            <span className="tick">&#10003;</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleSwitch = (index) => {
    if (index === activeIndex) return;
    setVisible(false);
    setTimeout(() => {
      setActiveIndex(index);
      setVisible(true);
    }, 180);
  };

  return (
    <div className="experience-section">
      <h2 className="section-title">
        Experience<span className="purple-dot">.</span>
      </h2>

      <div className="experience-container">
        <div className="company-list">
          {experienceData.map((exp, index) => (
            <button
              key={index}
              className={`company-button ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleSwitch(index)}
            >
              <span className="company-button-name">{exp.company}</span>
              {exp.type.includes('Current') && (
                <span className="company-button-dot" aria-label="Current role" />
              )}
            </button>
          ))}
        </div>

        <CompanyDetails data={experienceData[activeIndex]} visible={visible} />
      </div>
    </div>
  );
};

export default Experience;