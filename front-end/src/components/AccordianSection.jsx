import React, { useState, useEffect, useContext } from 'react';

export default function AccordianSection({ onClick, label, children, isOpen }) {

    return (
        <div>
            <div
                style={{
                    background: isOpen ? 'white' : 'lightGrey',
                    padding: '0.2rem'
                }}
            >
                <div onClick={()=> onClick(label)} 
                style={{ 
                    cursor: 'pointer',
                    borderWidth: '0 0 0.2rem 0',
                    borderStyle: 'solid',
                    margin: '0',
                    }}>
                    <h2 style={{textAlign: 'center', margin: '0'}}>{label}</h2>
                    <div style={{ float: 'right' }}>
                        {/* Arrow icons */}
                        {/* {!isOpen && <span>&#9650;</span>}
                        {isOpen && <span>&#9660;</span>} */}
                    </div>
                </div >
                {
                    isOpen && (
                        <div
                        >
                            {children}
                        </div >
                    )}
            </div >
        </div >
    );
}
