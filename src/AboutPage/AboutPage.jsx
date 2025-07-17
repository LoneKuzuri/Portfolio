import React, { useState } from 'react';
import './AboutPage.css';

const experienceData = [
  {
    company: 'Apple',
    role: 'Engineer @ Apple',
    date: 'May 2018 - Present',
    points: [
      'Developed interactive apps using Ember.js for Apple Music.',
      'Shipped the Apple Music Extension for Facebook Messenger.',
      'Contributed to MusicKit.js JavaScript framework.',
    ],
  },
  {
    company: 'Spotify',
    role: 'UI Engineer @ Spotify',
    date: 'July - Dec 2017',
    points: [
      'Wrote performant code for various projects.',
      'Worked across multiple platforms and CMS.',
      'Collaborated with multidisciplinary teams.',
    ],
  },
  {
    company: 'Microsoft',
    role: 'Frontend Developer @ Microsoft',
    date: 'Jan - Apr 2018',
    points: [
      'Built a marketing website for a startup.',
      'Shaped brand direction across packaging and web.',
      'Communicated directly with clients.',
    ],
  },
  {
    company: 'Stripe',
    role: 'Frontend Developer @ Stripe',
    date: 'Jan - June 2017',
    points: [
      'Maintained client websites using HTML, CSS, JS.',
      'Tested across browsers and devices.',
      'Worked with clients like JetBlue, U.S. Cellular.',
    ],
  },
];

const skillsData = [
  {
    title: 'Web Design',
    list: ['UI/UX Design', 'Responsive Design', 'Wireframing', 'User Research'],
  },
  {
    title: 'Frontend',
    list: ['JavaScript', 'ReactJS', 'NextJS', 'CSS3'],
  },
  {
    title: 'Backend',
    list: ['NodeJS', 'MongoDB', 'ExpressJS', 'Vercel'],
  },
  {
    title: 'Soft Skills',
    list: ['Communication', 'Collaboration', 'Commitment', 'Leadership'],
  },
];

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="about-page">
      {/* About Me */}
      <section className="about-section">
        <h1 className="about-title">About <span className="highlight">Me</span></h1>
        <p className="about-text">
          Hello! I'm <strong>Sunil Pandey</strong>, a passionate Frontend Developer from Nepal 🇳🇵.
          I enjoy crafting user-friendly interfaces using React, JavaScript, and modern CSS tools. <br /><br />
          I'm constantly learning and building cool web experiences that blend design and code.
        </p>
      </section>

      {/* Experience */}
      <section className="experience-section">
        <h2 className="section-title">Experience<span className="highlight">.</span></h2>
        <div className="experience-container">
          <div className="company-buttons">
            {experienceData.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`company-btn ${index === activeIndex ? 'active' : ''}`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className="experience-details">
            <h3 className="role">{experienceData[activeIndex].role}</h3>
            <p className="date">{experienceData[activeIndex].date}</p>
            <ul className="points">
              {experienceData[activeIndex].points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section">
        <h2 className="section-title">Skills<span className="highlight">.</span></h2>
        <div className="skills-grid">
          {skillsData.map((group, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-title">{group.title}</h3>
              <ul className="skill-list">
                {group.list.map((item, i) => (
                  <li key={i}>✓ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
