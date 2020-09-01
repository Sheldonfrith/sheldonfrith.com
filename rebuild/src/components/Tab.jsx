import React, {useState, useEffect, useContext} from 'react';

export default function Tab({activeTab, label, onClick}) {
const onClick2 = () => {
    onClick(label);
}

const getClassName = () => {
    if (activeTab === label) {
        return 'tabListItem tabListActive';
    }
    return 'tabListItem';
}

return (
<li className={getClassName()} onClick={onClick2}>
    {label}
</li>
);
}
