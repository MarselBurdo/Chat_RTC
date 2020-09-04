import React from "react";
import { StyledContainer } from "../Styled/Styled";

function Info({ room}) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <StyledContainer>
        <div>{room}</div>
      </StyledContainer>
      
      <StyledContainer right>
        <div>
          <a href="/">close</a>
        </div>
      </StyledContainer>
    </div>
  );
}

export default Info;
