import React, {useState, useEffect, useContext} from 'react';

export default function Sidebar(props) {

return (
<div className="sidebar">
<img className="profilePhoto" src={'/images/meWithIzzy.png'} />
<p className="sidebarDescription">Welcome to my coding portfolio. I currently specialize in Javascript Web Development
            (React, Node, Express, etc.) but have experience with other technologies and languages including:</p>
            <ul>
                <li>Java</li>
                <li>Python</li>
                <li>SQL queries and databases</li>
                <li>Visual Basic and advanced Excel programming</li>
                <li>AWS servers, databases, vpc, etc.</li>
                <li>Firebase cloud services</li>
                <li>Github version control</li>
                <li>GraphQL and REST APIs</li>
                <li>Wordpress</li>
            </ul>
            
</div>
);
}
