import React, {useState, useEffect, useContext} from 'react';
import { GlobalContext } from './providers/GlobalContext';
import Tab from './Tab'

export default function TabList(props) {
    const globalContext = useContext(GlobalContext);
    const onClickTabItem = (tab) => {
        globalContext.setActiveTab(tab)
    }

return (
<div>
<ol className="tabList">
            {globalContext.tabAreaChildren?globalContext.tabAreaChildren.map((child) => {
                const { label } = child.props;
                return (
                <Tab
                    activeTab={globalContext.activeTab}
                    key={label}
                    label={label}
                    onClick={onClickTabItem}
                />
                );
            }):undefined}
            </ol>
</div>
);
}
