import React, {useState, useEffect, useContext} from 'react';

export default function Sidebar(props) {

return (
<div className="sidebar">
<p className="sidebarDescription">Welcome to my coding portfolio. I currently specialize in Javascript web development
            (React, Node, Express, etc.) but have experience with other technologies and languages including
        Java, Python and Visual Basic. </p>
            <img className="profilePhoto" src={'/images/meWithIzzy.png'} />
</div>
);
}
