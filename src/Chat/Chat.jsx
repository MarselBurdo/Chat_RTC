import React, { useState, useEffect } from "react";
import queryString from "query-string";




function Chat() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  console.log(name,room );
  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    setName(name)
    setRoom(room)
  }, [window.location.search]);

  return <h1>chat</h1>;
}

export default Chat;
