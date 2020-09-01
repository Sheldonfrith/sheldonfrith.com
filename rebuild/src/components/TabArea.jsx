import React, { Component, useState } from 'react';
import Tab from './Tab';

export default function TabArea({children}){
    const [activeTab, setActiveTab] = useState(children[0].props.label);
    const onClickTabItem = (tab) => {
        setActiveTab(tab)
    }
    return (
        <div className="tabArea">
            <ol className="tabList">
            {children.map((child) => {
                const { label } = child.props;
                return (
                <Tab
                    activeTab={activeTab}
                    key={label}
                    label={label}
                    onClick={onClickTabItem}
                />
                );
            })}
            </ol>
            <div className="tabContent">
            {children.map((child) => {
                if (child.props.label !== activeTab) return undefined;
                return child.props.children;
            })}
            </div>
        </div>
    );
}