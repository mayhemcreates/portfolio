import React from 'react';
import { faHands} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function About () {


  return (
    <section id="about" className="container">
      <div class="row">
        <div class="col-6">
          <h2>Front End Development for the arts and small businesses.</h2>
          <FontAwesomeIcon icon={faHands} />
          <p>Hi, I'm Harrie.</p>
          <p>I am a front end developer and graphic designer specialising in accessibility, reliability and creativity.</p>
          <p>I work with clients who are looking to enhance their online presence, delivering easily maintainable, accessible and creative web apps.</p>
          <p>Have a gander at what I have to offer, and get in touch if I can help with your next web app project</p>
          <button>
            <span>Get in touch</span>
          </button>
        </div>
      </div>
    </section>
  )

}
