import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { css } from 'emotion';

const ROOT_CSS = css({ 
  height: 450,
  });

function Messagetable({ messages, name }) {
  return (
    <ScrollToBottom className={ROOT_CSS}>
      {messages.map((message, i) => (
        <div key={i} style={{ fontSize: "13px" }}>
          {message.text} write--> {name}
        </div>
      ))}
    </ScrollToBottom>
    
  );
}

export default Messagetable;
