import React from 'react';
import { work } from '../data';

export default function Work () {
  return (
  <section id="work">
    <div className="container">
      <div className="row">
        <div className="col-3">
          <h2>My Work</h2>
          <p>Scroll right to see all my projects. Hover over the cards to see details.</p>
        </div>
        <div className="col-9">
          <div className="work__container">
            {work.map((work) => (
              <div key={work.title} >
                <div className="work__card">
                  <img src={work.image} alt={work.alt} className="work__card" />
                  <div className="overlay">
                    <div className="text">
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
