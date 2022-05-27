import React from "react";

const CatComponent = (props) => {
  return (
    <h1>
      catName: {props.catName},eyeColor:{props.eyeColor}
      ,age:
      {props.age}
    </h1>
  );
};
CatComponent.defaultProps = {
  catName: "Joe",
  eyeColor: "deepblue",
  age: "5",
};

export default CatComponent;
