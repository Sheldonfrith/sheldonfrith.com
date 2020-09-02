import React, {useState, useEffect} from 'react';

//initialize state structure here
export const GlobalContext = React.createContext({
    activeTab: '',
    setActiveTab: ()=> {},
    setTabAreaChildren: ()=> {},
    tabAreaChildren: {},
});


export default function GlobalProvider({children}) {
const [tabAreaChildren, setTabAreaChildren] = useState(null);
const [activeTab, setActiveTab] = useState(null);


return (
<GlobalContext.Provider
value={{
    activeTab: activeTab,
    setActiveTab: setActiveTab,
    setTabAreaChildren: setTabAreaChildren,
    tabAreaChildren: tabAreaChildren,
}}
>
{children}
</GlobalContext.Provider>
);
}
