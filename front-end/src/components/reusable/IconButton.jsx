import React, {useState, useEffect, useContext, useCallback} from 'react';
import {GitHub, LinkedIn} from '@material-ui/icons';
import SvgIcon from '@material-ui/core/SvgIcon';
import useMyState from '../../lib/Hooks/useMyState';
import useMyEffect from '../../lib/Hooks/useMyEffect';
import Button from '@material-ui/core/Button';
import {ReactComponent as UpWork} from '../../assets/icon-upwork.svg';

export default function IconButton({icon, iconColor, iconSize, text, onClick, isNotMaterialUI, margin = '0 1.8rem'}) {

    const [ThisIcon, setThisIcon] =useMyState(null, 'object')

    useMyEffect([true],()=>{

        if (!isNotMaterialUI){
            let styleObj = {cursor: 'pointer'};
            if (iconColor) styleObj['color'] = iconColor;
            if (iconSize) styleObj['fontSize'] = iconSize;
            switch(icon){
                case 'GitHub':
                    setThisIcon(<GitHub style={styleObj}/>);
                    break;
                case 'LinkedIn':
                    setThisIcon(<LinkedIn style={styleObj}/>);
                    break;
                default:
                    throw new Error('error in IconButton, icon not found');
            }
            } else {
                switch (icon) {
                    case "UpWork":
                        setThisIcon((<SvgIcon style={{fontSize: iconSize, color: iconColor}}><UpWork/></SvgIcon>));
                        break;
                }
                
            }
    },[isNotMaterialUI,setThisIcon,icon, text])
    
return (
<div onClick={onClick} style={{margin: margin,display: 'flex', flexDirection: 'center', alignItems: 'center', justifyContent: 'center'}}>
   {ThisIcon}
    {text?<span>{text}</span>:<></>}
</div>
);
}
