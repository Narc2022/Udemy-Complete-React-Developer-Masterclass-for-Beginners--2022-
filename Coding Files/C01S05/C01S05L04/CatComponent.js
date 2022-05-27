import React from "react";

const CatComponent = (props) => {
  return (
    <h1>
      catName: {props.catName || "joe"},eyeColor:{props.eyeColor || "deep blue"}
      ,age:
      {props.age || "5"}
    </h1>
  );
};

export default CatComponent;
