import React from "react";
import "./topbar.css"

import { Settings } from "@material-ui/icons";
export default function Topbar() {
  return (
    <div className="topbar ">
      <div className="topbarWrapper ">
        <div className="topLeft">
          <span className="logo">DES</span>
        </div>
         <div>          
            <img src="/img2.jpg"  alt="" className="topAvatar" />
            </div>
      </div>
    </div>
  );
}
