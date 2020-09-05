import React, { useState } from "react";
import {
  StyledButton,
  StyledCard,
  StyledSelect,
  StyledInput,
  NavLink,
} from "../Styled/Styled";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/action";

const rooms = ["JavaScript", "Go", "Kotlin", "Java", "C", "PHP"];

function Entry() {
  const [room, setRoom] = useState(" ");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  return (
    <>
      <StyledCard>
        <StyledInput onChange={(e) => setName(e.target.value)} />
        <StyledSelect
          className="aside"
          onChange={(e) => setRoom(e.target.value)}
        >
          <option hidden selected>
            Choise room
          </option>
          {rooms.map((element, i) => (
            <option value={`${element}`} key={i}>
              {element}
            </option>
          ))}
        </StyledSelect>
        <NavLink
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?id=${uuidv4()}&room=${room}`}
        >
          <StyledButton
            primary
            onClick={() => {
              console.log(name);
              dispatch(addUser(name));
            }}
          >
            Go room
          </StyledButton>
        </NavLink>
      </StyledCard>
    </>
  );
}

export default Entry;
