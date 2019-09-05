import React from "react";
import Title from "../Title";

const Contact = () => {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contant us " />
          <form
            className="mt-5"
            action="https://formspree.io/jabaga99@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control formContact-input"
                placeholder="First Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control formContact-input"
                placeholder="yourname@correo.com"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control formContact-input"
                placeholder="subject"
              />
            </div>
            <div className="form">
              <textarea
                name="message"
                className="form-control formContact-text"
                rows="10"
                placeholder="Comment"
              ></textarea>
            </div>
            <div className="form-group mt-3">
              <input
                type="submit"
                value="Send"
                className="form-control formContact-input"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
