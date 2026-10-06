import axios from "axios";
import React from "react";
import { getUsers } from "../apis/UserApi";

const About = () => {
  let data = getUsers()
  return <div></div>;
};

export default About;
