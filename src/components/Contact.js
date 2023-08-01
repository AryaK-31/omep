import React from "react";

const Contact = () => {
  return (
    <div className="contact" >
      <div className="heading font-taglineP text-[#0a0342] underline underline-offset-[20px] decoration-yellow-500">Contact</div>
      <div className="map" data-aos="fade-right"  data-aos-offset="200" data-aos-duration="1100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2731697227514!2d73.75905951083348!3d18.651733865081454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2sPCCOE%20-%20Pimpri%20Chinchwad%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1685858798720!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="details">
        <div className="left" data-aos="fade-right"  data-aos-offset="200" data-aos-duration="1100">
          <div className="inquiries">
            <h3>Inquiries</h3>
            <p>
              For any inquiries, questions or commendations, please call:
              123-456-7890 or fill out the following form
            </p>
          </div>
          <div className="contactus">
            <h3>Contact Us</h3>
            <form action="">
              <label htmlFor="">First Name</label>
              <input type="text" />

              <label htmlFor="">Last Name</label>
              <input type="text" />

              <label htmlFor="">Email *</label>
              <input type="mail" />

              <label htmlFor="">Subject</label>
              <input type="text" />

              <label htmlFor="">Message</label>
              <textarea name="" id="" cols="30" rows="8"></textarea>
              <div className="submit hover:bg-yellow-600 hover:text-blue-950 transition-colors duration-300">Submit</div>
            </form>
          </div>
        </div>
        <div className="right" data-aos="fade-right"  data-aos-offset="200" data-aos-duration="1100">
          <div className="headoffice">
            <h3>Head Office</h3>
            <p>500 Terry Francine Street</p>
            <p style={{ marginBottom: "30px" }}>San Francisco, CA 94158</p>
            <p>info@mysite.com</p>
            <p>Tel: 123-456-7890</p>
            <p>Fax: 123-456-7890</p>
          </div>
          <div className="employement">
            <h3>Employment</h3>
            <p>
              To apply for a job with Sphere Constuctions, please send a cover
              letter together with your C.V. to: info@mysite.com
            </p>
          </div>
          <div className="line1"></div>
          <div className="getquote">
            <h3>Get a quote: 123-456-7890</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


