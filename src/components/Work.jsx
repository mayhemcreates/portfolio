import React from 'react';
import { work } from '../data';

export default function Work () {
  return (
  <section id="work">
    <div className="container">
      <div className="row">
        <div className="col-3">
          <h2>Work</h2>
          <p>Hover over the project cards to see details of my web app projects</p>
        </div>
        <div className="col-6">
          <div className="work__container">
            {work.map((work) => (
              <div key={work.title} >
                <div className="work__card">
                  <img src={work.image} className="work__card" />
                  <div className="overlay">
                    <div class="text">
                      <h3>{work.title}</h3>
                      <p>{work.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
