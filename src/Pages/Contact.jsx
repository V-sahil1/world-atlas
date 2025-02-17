import React from "react";

function Contact() {
  const handleFormData = (formdata) =>{
    const formInputData = Object.fromEntries(formdata.entries());
    console.log(formInputData);
    

  }
  return (
    <>
      <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>
        <div className="contact-wrapper container">
          <form action={handleFormData}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              name="username"
              required
              autoComplete="false"
            />

            <input
              type="email"
              required
              autoComplete="false"
              placeholder="Enter your email"
              name="email"
              className="form-control"
            />
            <textarea
              required
              rows="10"
              autoComplete="off"
              placeholder="Enter your message"
              name="massage"
              className="form-control"
            ></textarea>
            <button type="submit" value="send" style={{display:'flex',justifyContent:'center'}}>
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
