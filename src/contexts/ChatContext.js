import { createContext, useEffect, useState } from "react";
import axios from "axios";

import usePersistedState from "../hooks/use-persisted-state.hook";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [conversationLog, setConversationLog] = usePersistedState(
    [],
    "conversation-log"
  );
  const [engine, setEngine] = usePersistedState("text-curie-001", "engine");

  const engines = [
    { id: "text-davinci-002", nickname: "daVinci" },
    { id: "text-curie-001", nickname: "Curie" },
    { id: "text-babbage-001", nickname: "Babbage" },
    { id: "text-ada-001", nickname: "Ada" },
  ];

  return (
    <ChatContext.Provider
      value={{ conversationLog, setConversationLog, engine, setEngine, engines }}
    >
      {children}
    </ChatContext.Provider>
  );
};
