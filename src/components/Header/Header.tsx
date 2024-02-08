import React from "react";
import Box from "@mui/system/Box";

import "./Header.css";

export interface HeaderProps {
  prop?: string;
}

export function Header({ prop = "default value" }: HeaderProps) {
  return (
    <div className="header">
      <Box
        component="img"
        src={require("./../../assets/images/bx-logo.png")}
        alt="Buildbox"
        className="bx-logo"
      />
    </div>
  );
}
