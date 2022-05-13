import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as OpenAiIcon } from "../assets/openai_icon.svg";

import { ChatContext } from "../contexts/ChatContext";

const Conversation = () => {
  const { conversationLog } = useContext(ChatContext);
  const dummyRef = useRef(null);

  useEffect(() => {
    dummyRef.current.scrollIntoView();
  }, [conversationLog]);

  return (
    <Wrapper>
      {conversationLog.slice(0).reverse().map((message) => (
        <Message key={message.id} sender={message.sender}>
          {message.sender === "openai" && (
            <OpenAiIcon width="24px" heigth="24px" />
          )}
          <Text sender={message.sender}>{message.text}</Text>
          <Time sender={message.sender}>{message.time}</Time>
        </Message>
      ))}
      <DummyDiv ref={dummyRef} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow-y: scroll;
  scroll-behavior: smooth;

  // Hide scrollbar
  // IE, Edge and Firefox
  -ms-overflow-style: none;
  scrollbar-width: none;
  // Chrome, Safari and Opera
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Message = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: ${({ sender }) =>
    sender === "user" ? "flex-end" : "flex-start"};
  position: relative;

  &:hover span {
    visibility: visible;
  }
`;

const Text = styled.p`
  padding: 8px;
  max-width: 240px;
  border-radius: 16px;
  background-color: ${({ sender }) =>
    sender === "user" ? "var(--color-blue)" : "var(--color-red)"};
  color: var(--color-main);
`;

const Time = styled.span`
  position: absolute;
  ${({ sender }) => (sender === "user" ? "right: 0;" : "left: 32px;")}
  bottom: -32px;
  z-index: 1;

  padding: 8px;
  border-radius: 8px;
  white-space: nowrap;

  background-color: var(--color-main);
  font-size: 12px;

  visibility: hidden;
`;

const DummyDiv = styled.div`
  visibility: hidden;
`;

export default Conversation;
