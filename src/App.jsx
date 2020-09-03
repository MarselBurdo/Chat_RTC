import React from "react";
import { Switch, Route } from "react-router-dom";

import Entry from "./components/Entry/Entry";
import Video from "./components/Video/Video";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <Switch>
      <Route path="/video">
        <Video />
      </Route>
      <Route path="/chat">
        <Chat />
      </Route>
      <Route path="/">
        <Entry />
      </Route>
    </Switch>
  );
}

export default App;
