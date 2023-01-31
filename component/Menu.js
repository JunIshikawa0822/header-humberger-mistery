import React from "react";
import { slide as Menu } from "react-burger-menu";
import HeadCSS from "../styles/Home.module.css";

export default props=> {
  return (
    <Menu {...props}>
        <a className={HeadCSS.menu} href = "#">HomePage</a>
        <a className={HeadCSS.menu} href = "#">For Manager</a> 
        <a className={HeadCSS.menu} href = "#">For Trainer</a> 
        <a className={HeadCSS.menu} href = "#">For Analyzing Stuff</a> 
     </Menu>
  );
}