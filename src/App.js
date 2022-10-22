import React from "react";
import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";

import "./App.css";

const projectID = "32ec87c9-09c7-4a6f-a97d-5272b03efa4e";
export function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      projectID={projectID}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
