import React from 'react';
import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2>
              My Skills
            </h2>
            <p>
              I specialise in front-end development, with experience of full-stack frameworks.
            </p>
          </div>
          </div>
          <div className="skills__container">
            {skills.map((skill) => (
              <div key={skill.title} className="skills__card">
                <img className="skills__logo--small" src={skill.logo} alt={skill.title} />
                <h3>{skill.title}</h3>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
