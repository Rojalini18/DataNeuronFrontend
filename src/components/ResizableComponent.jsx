import React from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResizableComponent = ({ image }) => {
  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <img src={image} style={{ height: "100%", width: "100%" }} />
      </div>
    </>
  );
};

export default ResizableComponent;
