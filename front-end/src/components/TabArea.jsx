import React, { Component, useState, useEffect } from 'react';
import Tab from './Tab';
import { useContext } from 'react';
import { GlobalContext } from './providers/GlobalContext';

export default function TabArea({children}){
    const globalContext = useContext(GlobalContext);
    useEffect (()=> {
        globalContext.setActiveTab(children[0].props.label)
    },[]
    );
    useEffect(()=> {
        globalContext.setTabAreaChildren(children);
    }, [children, globalContext.setTabAreaChildren]
    );
    const onClickTabItem = (tab) => {
        globalContext.setActiveTab(tab)
    }
    return (
        <div className="tabArea">
            <div className="tabContent">
            {children.map((child) => {
                if (child.props.label !== globalContext.activeTab) return undefined;
                return child.props.children;
            })}
            </div>
        </div>
    );
}