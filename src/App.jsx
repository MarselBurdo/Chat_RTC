import React from "react";
import Entry from "./components/Entry/Entry";
import { Switch, Route } from "react-router-dom";

import Chat from "./components/Chat/Chat";

function App() {
  return (
    <Switch>
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
