import React, {useState, useEffect, useContext} from 'react';
import ReCAPTCHA from "react-google-recaptcha";


export default function ContactInfo(props) {

    function onChange(value) {
        console.log("Captcha value:", value);
      }
    return (
    <div className="contactInfo">
        <p>Email: s h e l d o n f r i t h [ a t ] h o t m a i l . [c o m ]</p>
        <p>Phone:</p>
        <p>LinkedIn</p>
        <p>GitHub</p>
        <ReCAPTCHA
    sitekey="AIzaSyAapzlAPqM2raZeI3fp7Gy7BllhYEy2OkM"
    onChange={onChange}
  />
    </div>
    );

}