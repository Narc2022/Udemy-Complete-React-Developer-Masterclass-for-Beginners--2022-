import React from "react";

function Person({ person, key }) {
  return (
    <div>
      <h1>
        {key} I am {person.name}.I am {person.age} years old .From{" "}
        {person.Country}
      </h1>
    </div>
  );
}

export default Person;
