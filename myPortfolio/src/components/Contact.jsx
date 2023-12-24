import React from 'react'
import "../styles/Contact.css";


function Contact() {
  return (
    <>
      <div className="heading">
        <h3>Let's Talk</h3>
        <h2>
          Contact <span> Me</span>
        </h2>
      </div>

      <div className="contact" id="Contact">
        <div className="contact-pic">
         
        </div>

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
      </div>
    </>
  );
}

export default Contact