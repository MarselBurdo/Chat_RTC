import React from "react";
import { StyledButton, StyledSector, StyledInput } from "../Styled/Styled";

function Inputfield({ setMessage, sendMessage, message }) {
  return (
    <>
      {" "}
      <StyledSector>
        <StyledInput
          chat
          type="text"
          placeholder="Message"
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        />

        <StyledButton primary onClick={(e) => sendMessage(e)}>Write</StyledButton>
      </StyledSector>
    </>
  );
}

export default Inputfield;
