import styled from "styled-components";
import React from "react";

const Button = styled.button`
  background: blue;
  color: white;
  border: 1px solid #ccc;
`;

function Styled() {
  return (
    <div>
      <Button>
        <h1>Dhoni</h1>
      </Button>
    </div>
  );
}

export default Styled;
