import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';

function Messagetable({messages, name}) {
  
  return (
    <ScrollToBottom>
{messages.map((message, i) => <div key={i}>{message.text} {message.user}</div>)}
    </ScrollToBottom>
  )
}

export default Messagetable
