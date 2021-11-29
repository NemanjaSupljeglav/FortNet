import React from "react";
import { ROOT } from "navigation/CONSTANTS";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Math } from "./Math";
import { NavLinks } from "../Home/components/NavLinks";
export const Page1 = () => {
  return (
    <div>
      <NavLinks>Home</NavLinks>
      <Typography variant="h2">Page 1</Typography>
      <Math />
    </div>
  );
};
