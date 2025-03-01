import React from "react";
import "./NotFound.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="found-container">
      <h1>OOPS....page not found...</h1>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia ante enim. Vivamus erat libero, sagittis nec urna sit amet, semper egestas enim. Nunc sodales suscipit justo, a sodales ligula porttitor vitae. Nunc sodales finibus lectus, in posuere ligula interdum ullamcorper. Maecenas at justo eu ligu</span>
      <motion.span
        animate={{ y:[0,10,0]}}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ fontSize: "150px", display: "inline-block" }}
      >
        😪
      </motion.span>
      <Link to={"/"}>
        <h3>←BACK HOME PAGE</h3>
      </Link>
    </div>
  );
}

export default NotFound;
