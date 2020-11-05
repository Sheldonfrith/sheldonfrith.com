import React, { useState, useEffect, useContext, useCallback } from "react";
import { GitHub, LinkedIn } from "@material-ui/icons";
import SvgIcon from "@material-ui/core/SvgIcon";
import useMyState from "../../lib/Hooks/useMyState";
import useMyEffect from "../../lib/Hooks/useMyEffect";
import Button from "@material-ui/core/Button";
import  UpWork from "../svgs/UpworkLogo";
import  AWS from '../svgs/AWSLogo';
import  Bootstrap from '../svgs/BootstrapLogo';
import  CSS from '../svgs/CSSLogo';
import  DigitalOcean from '../svgs/DigitalOceanLogo';
import  Elementor from '../svgs/ElementorLogo';
import  Express from '../svgs/ExpressLogo';
import  Firebase from '../svgs/FirebaseLogo';
import  HTML from '../svgs/HTMLLogo';
import  Javascript from '../svgs/JavaScriptLogo';
import  Laravel from '../svgs/LaravelLogo';
import  Netlify from '../svgs/NetlifyLogo';
import  Node from '../svgs/NodeLogo';
import  PHP from '../svgs/PHPLogo';
import  ReactLogo from '../svgs/ReactLogo';
import  StyledComponents from '../svgs/StyledComponentsLogo';
import  Typescript from '../svgs/TypescriptLogo';
import  WooCommerce from '../svgs/WooCommerceLogo';
import  Wordpress from '../svgs/WordpressLogo';
import MYSQLLogo from '../svgs/MYSQLLogo';
import styled from 'styled-components';

import {useDeltaArray, useConditionalEffect} from 'react-delta';

const techLogos = [
 ['UpWork',<UpWork/>],
 ['AWS',<AWS/>],
 ['Bootstrap',<Bootstrap/>],
 ['CSS',<CSS/>],
 ['Digital Ocean',<DigitalOcean/>],
 ['Elementor',<Elementor/>],
 ['Express',<Express/>],
 ['Firebase',<Firebase/>],
 ['HTML',<HTML/>],
 ['Javascript',<Javascript/>],
 ['Laravel',<Laravel/>],
 ['Netlify',<Netlify/>],
 ['Node',<Node/>],
 ['PHP',<PHP/>],
 ['React',<ReactLogo/>],
 ['Styled Components',<StyledComponents/>],
 ['Typescript',<Typescript/>],
 ['Woo Commerce',<WooCommerce/>],
 ['Wordpress',<Wordpress/>],
 ['MySQL',<MYSQLLogo/>]
];
const Container = styled.div`
        margin: ${props=>props.margin};
        display: flex;
        flex-direction: center;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;
`;

const TooltipText = styled.span`
    visibility: hidden;
    background-color: ${props=>props.theme.orange};
    color: ${props=>props.theme.white};
    text-align: center;
    padding:0 1rem;
    position: absolute;
    z-index: 12;
    border-radius: 0.3rem;
    top: -1rem;
    ${Container}:hover & {
        visibility: visible;
    }
`;

export default function IconButton({
  icon,
  iconColor,
  iconSize,
  text,
  onClick,
  isNotMaterialUI,
  margin = "0 1.8rem",
  tooltip,
}) {
  const [thisIcon, setThisIcon] = useState(null);


  useEffect(()=>{
    console.log('use effect triggered with', isNotMaterialUI, icon, text);
    if (!isNotMaterialUI) {
      //IS material UI icon
      let styleObj = { cursor: "pointer" };
      if (iconColor) styleObj["color"] = iconColor;
      if (iconSize) styleObj["fontSize"] = iconSize;
      switch (icon) {
        case "GitHub":
          setThisIcon(<GitHub style={styleObj} />);
          break;
        case "LinkedIn":
          setThisIcon(<LinkedIn style={styleObj} />);
          break;
        default:
          throw new Error("error in IconButton, icon not found");
      }
    } else {
        const thisIndex = techLogos.findIndex(element => element[0]===icon);
        console.log(thisIndex, techLogos, icon)
        setThisIcon(
          <SvgIcon style={{ fontSize: iconSize, color: iconColor }}>
           {techLogos[thisIndex][1]}
        </SvgIcon>
        );
    }

  },[]);
  return (
    <Container 
      onClick={onClick}
      margin={margin}
    >
      {tooltip? <TooltipText>{tooltip}</TooltipText>:<></>}
      {thisIcon}
      {/* {text ? <span>{text}</span> : <></>} */}
    </Container>
  );
}
