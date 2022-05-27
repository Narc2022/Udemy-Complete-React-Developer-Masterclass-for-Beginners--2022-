import React from "react";

function NameList() {
  const names = ["dhoni", "sachin", "Virat","dhoni"];
  const nameList = names.map((name) => 
    <h1 key={name}>{name}
    </h1>);
  );

  return <div>{nameList}</div>;
}

export default NameList;

