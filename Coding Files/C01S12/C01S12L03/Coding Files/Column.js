import React from "react";

function Column() {
  const items = [
    {
      Title: "Dhoni",
    },
  ];
  return (
    <React.Fragment>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.Title}</p>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}

export default Column;

