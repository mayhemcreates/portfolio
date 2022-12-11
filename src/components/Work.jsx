import React from 'react';
import { work } from '../data';

export default function Work () {
  return (
  <section id="">
    <div>
      <h2>Work</h2>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {work.map((work) => (
            <div key={work.title} className="work__card">
              <img className="skills__logo--small" src={work.image} alt={work.alt} />
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {work.title}
                </span>
              </div>
            </div>
          ))}
        </div>
    </div>
  </section>
  )
}
