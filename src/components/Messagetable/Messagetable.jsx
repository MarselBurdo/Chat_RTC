import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { css } from "emotion";
import moment from "moment";

const ROOT_CSS = css({
  height: 450,
});

//message area. name date
function Messagetable({ messages }) {
  return (
    <ScrollToBottom className={ROOT_CSS}>
      {messages.map((message, i) => (
        <div key={i} style={{ fontSize: "13px" }}>
          {message.text} write - {message.user}{" "}
          {moment(message.date).format("h:mm a")}
        </div>
      ))}
    </ScrollToBottom>
  );
}

export default Messagetable;
