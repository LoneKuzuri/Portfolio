import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    // {
    //   company: 'Apple',
    //   role: 'Engineer @ Apple',
    //   date: 'May 2018 - Present',
    //   points: [
    //     'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
    //     'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',
    //     'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps'
    //   ]
    // },
    // {
    //   company: 'Spotify',
    //   role: 'UI Engineer @ Spotify',
    //   date: 'July - December 2017',
    //   points: [
    //     'Write modern, performant, maintainable code for a diverse array of client and internal projects',
    //     'Work with a variety of different languages, platforms, frameworks, and CMS',
    //     'Communicate with multi-disciplinary teams of engineers, designers, and clients on a daily basis'
    //   ]
    // },
    {
      company: 'FourBit Technologies',
      role: 'Frontend Developer Intern @ FourBit Technologies',
      date: 'March - June 2025',
      points: [
        'Worked with a team to build a marketing website and e-commerce platform for blistabloc, an ambitious startup.',
        'Helped solidify a brand direction for blistabloc that spans both packaging and web.',
        'Interfaced with clients on a weekly basis, providing technological expertise.'
      ]
    },
    {
      company: 'Corpola Tech',
      role: 'Frontend Developer Intern@ Corpola Tech',
      date: 'Dec - Present 2025',
      points: [
        'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and React.js',
        'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.',
        'Clients included Reliance College'
      ]
    },
    // {
    //   company: 'WebFlow',
    //   role: 'Software Developer @ Webflow',
    //   date: 'July - December 2016',
    //   points: [
    //     'Implemented performance optimization strategies, resulting in a 20% improvement in page load times across the platform.',
    //     'Ensured cross-browser compatibility for the platform, enhancing the user experience for a diverse user base.',
    //     'Integrated interactive data analytics features into the platform.',
    //   ]
    // },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const CompanyDetails = ({ role, date, points }) => (
    <div className="details">
      <h3>{role}</h3>
      <p className="date">{date}</p>
      <ul>
        {points.map((point, index) => (
          <li key={index}>
            <span className="tick">&#10003;</span> {point}
          </li>
        ))}
      </ul>
    </div>
  );

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
              onClick={() => setActiveIndex(index)}
            >
              {exp.company}
            </button>
          ))}
        </div>

        <CompanyDetails
          role={experienceData[activeIndex].role}
          date={experienceData[activeIndex].date}
          points={experienceData[activeIndex].points}
        />
      </div>
    </div>
  );
};

export default Experience;
