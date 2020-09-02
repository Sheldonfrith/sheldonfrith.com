import React, {useState, useEffect, useContext} from 'react';


export default function ContactInfo(props) {

    function onChange(value) {
        console.log("Captcha value:", value);
      }
    return (
    <div className="contactInfo">
        <p>Email: sheldonfrith@hotmail.com</p>
        <p>Phone: 1 289 527 two six six one</p>
        <a href="https://www.linkedin.com/in/sheldon-frith-33547878/">LinkedIn</a>
        <br/>
        <a href="https://github.com/Sheldonfrith">GitHub</a>
    </div>
    );

}