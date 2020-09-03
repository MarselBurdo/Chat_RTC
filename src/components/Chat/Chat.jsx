import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";


import Messagetable from "../Messagetable/Messagetable";
import { StyledChat,NavLink, StyledButton, StyledCard, StyledContainer } from "../Styled/Styled";
import Info from "../Info/Info";
import Inputfield from "../Inputfield/Inputfield";

let socket;

function Chat() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  console.log(users);
  const server = "http://localhost:4444";

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    setName(name);
    setRoom(room);
    socket = io(server);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [server, window.location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <>
      <StyledChat>
        <Info room={room} />
        <Messagetable messages={messages} name={name} />
        <Inputfield
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      <NavLink
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/video?name=${name}&room=${room}`}
        >
          <StyledButton primary>Go video Chat</StyledButton>
        </NavLink>
      </StyledChat>
      <StyledContainer who> <div>In {room}:
      {users && users.map((user)=>(`${user.name}, `))}
        </div> 
      </StyledContainer>
    </>
  );
}

export default Chat;
