import React from "react";
import { ROOT } from "navigation/CONSTANTS";
import { Typography } from "@material-ui/core";
import { useAuth } from "navigation/Auth/ProvideAuth";
import { NavLinks } from "../../components/NavLinks";

export const AuthorizedPage1 = () => {
  const { user } = useAuth();
  return (
    <div>
      <NavLinks>Home</NavLinks>
      <Typography variant="h2">Welcome, {user.name}.</Typography>
      <Typography variant="overline">Authorized Page 1</Typography>
    </div>
  );
};
