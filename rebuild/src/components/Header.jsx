import React, { useState, useEffect, useContext } from 'react';

export default function Header(props) {

    return (
        <div className="header">
            <div className="title"><h1>
                Sheldon Frith
    </h1></div>
            <p className="headerDescription">Welcome to my coding portfolio. I currently specialize in Javascript web development
            (React, Node, Express, etc.) but have experience with other technologies and languages including
        Java, Python and Visual Basic. </p>
            <img className="profilePhoto" src={'/images/meWithIzzy.png'} />
        </div>
    );
}
