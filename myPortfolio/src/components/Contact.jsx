import React from 'react'
import "../styles/Contact.css";


function Contact() {
  return (
    <section className="contact" id="Contact">
      <h2 className="heading">
        Contact <span> Me</span>
      </h2>

      <form
        action="https://formsubmit.co/tlemcani.waliid@gmail.com"
        method="post"
      >
        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              placeholder=" Full Name"
              required
              maxLength="10"
            />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="text" placeholder=" Email Adress" required />
            <span className="focus"></span>
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
            <input type="number" placeholder=" Mobile Number" required />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="text" placeholder=" Email Subject " />
            <span className="focus"></span>
          </div>
        </div>
        <div className="textarea-field">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder=" Your message "
            required
          ></textarea>
          <span className="focus"></span>
        </div>
        <div className="btn-box btns">
          <button type="Submit" className="btn">
            Send
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact