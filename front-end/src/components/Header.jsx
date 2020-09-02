import React, { useState, useEffect, useContext } from 'react';
import TabList from './TabList';

export default function Header(props) {

    return (
        <div className="header">
            <div className="title"><h1>
                Sheldon Frith
        </h1></div>
        <TabList/>
        </div>
    );
}
