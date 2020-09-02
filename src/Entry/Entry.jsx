import React, { useState } from "react";
import {
  StyledButton,
  StyledCard,
  StyledSelect,
  StyledInput,
  NavLink,
} from "../Styled/Styled";

const rooms = ["JavaScript", "Go", "Kotlin", "Java", "C#"];

function Entry() {
  const [room, setRoom] = useState(" ");
  const [name, setName] = useState("");
  console.log(room, name);
  return (
    <>
      <StyledCard>
        <StyledInput onChange={(e) => setName(e.target.value)} />

        <StyledSelect
          className="aside"
          onChange={(e) => setRoom(e.target.value)}
        >
          <option value="default"></option>
          {rooms.map((element, i) => (
            <option value={`${element}`} key={i}>
              {element}
            </option>
          ))}
        </StyledSelect>
        <NavLink
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <StyledButton primary>Go room</StyledButton>
        </NavLink>
      </StyledCard>
    </>
  );
}

export default Entry;
