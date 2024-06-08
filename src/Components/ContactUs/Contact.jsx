import React, { useState } from 'react'
import css from './Contact.module.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from 'react';

function Contact() {

  useLayoutEffect(() => {
    console.log("Scrolling to top");
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [user, setUserr] = useState({
    name : "",
    email: "",
    mobile_number : "",
    city : "",
    feedback : ""
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserr({
      ...user,
      [name]: value,
    });
  };
  
  
  const handle_contact_us = async (e) => {
    try{
    e.preventDefault();
  
    const res = await axios.post(
      `https://api.nurtureeats.in/api/contact_us`,
      {
        user: user,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    console.log("Responsee:", res.data);

    e.target.reset();
    setUserr("");

    setSuccessMessage('Feedback sent successfully!');

      // Clear success message after a few seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 4000); 

    }
    catch(err){
      console.log("Error in submiting contact us : " , err);
    }
  };


  return (
    <div className={css.overall}>
      <div className={css.contactme}>

        <div className={css.companyinfo}>
          <h2>NURTURE EATS Quality Policy</h2><hr className={css.rule} />
          <p>
            NurtureEats believes in offering you the best only because you deserve
            it. This is reflected in the sourcing process of the ingredients,
            their selection, the manufacturing process, packaging and finally the
            distribution of the final product. Always keeping you in mind.
          </p>
          <p>
            NurtureEats Pvt Ltd, Prayagraj, Uttar Pradesh, 211002
            Customer Care 09650169402
            <br />
            Mon-fri 9.30AM to 5.30PM <br />
            Feedback/Suggestions: <a href='mailto:ankur.keshari@nurtreeats.in'> ankur.keshari@nurtreeats.in </a>
          </p>
        </div>
      </div>
      <div className={css.mapandcont}>
        <div className={css.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14410.011291309767!2d81.85105227955584!3d25.45488029705152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acaa4a0c68183%3A0xef336b46259cd9b0!2sGeorge%20Town%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709974514589!5m2!1sen!2sin"
            width="600"
            height="600"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className={css.contactsec}>
          <h1>Contact Us</h1>
          <p>Give us your valuable Suggestions or Feedback using the form below:</p>

          <form onSubmit={handle_contact_us}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required value={user.name} onChange={handleChange} />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required onChange={handleChange} />
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input type="tel" id="mobileNumber" name="mobileNumber" required onChange={handleChange} />
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" required onChange={handleChange} />

            <label htmlFor="Feedback">Feedback or Suggestion: </label>
            <textarea id="feedback" name="feedback" onChange={handleChange} />
            {successMessage && <div className={css.successMessage}>{successMessage}</div>}
            <br></br>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;