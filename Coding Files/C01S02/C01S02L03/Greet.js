import React from "react";

const user = {
  firstname: "yogesh",
  lastname: "santosh",
};

export default function Greet() {
  return (
    <div>
      <h1> Hello,{user.firstname}!</h1>
    </div>
  );
}
