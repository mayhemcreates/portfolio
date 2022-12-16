import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/3f7927f0-7d4a-11ed-b38f-a1ed22f366b1"

export default function Contact () {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

 if (submitted) {
    return (
      <>
        <h2>Thank you</h2>
        <p>I'll be in touch soon</p>
      </>
    );
  }


  return (
  <section id="contact">
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2>Let's work together</h2>
          <p>You can drop me a line using this form, or connect with me on linkedin</p>
        </div>
        <div className="col-6 p-5 contact__form contact__form--red">
          <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank" >
            <label htmlFor="name" className="contact__form--label">
              Name
            </label>
            <input
              type="text"
              placeholder="full name"
              id="name"
              name="name"
              className="mb-4 contact__form--input"
            />
          <div className="">
            <label htmlFor="email" className="contact__form--label">
              Email
            </label>
            <input
              type="email"
              placeholder="name@domain.com"
              id="email"
              name="email"
              className="mb-4 contact__form--input"
            />
          </div>
          <div className="">
            <label
              htmlFor="message"
              className="contact__form--label">
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              cols="30"
              name="message"
              className="contact__form--input"
              placeholder="let me know how I can help"
            />
          </div>
          <button
            type="submit"
            className="">
            Submit
          </button>
        </form>
       </div>
        </div>
        </div>
    </section>
  )
}
