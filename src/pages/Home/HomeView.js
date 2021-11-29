import React from "react";
import PropTypes from "prop-types";
import { DASHBOARD, ROOT } from "navigation/CONSTANTS";
import { useHistory } from "react-router-dom";

const HomeView = (props) => {
  const history = useHistory();
  const goTo = (path) => {
    history.push(path || ROOT);
  };
  return <div></div>;
};

HomeView.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HomeView;
