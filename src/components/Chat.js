import styled from "styled-components";

import Header from "./Header";
import Conversation from "./Conversation";
import Form from "./Form";

const Chat = () => {
  return (
    <Wrapper>
      <Header />
      <Conversation />
      <Form />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-dark);
  min-width: 320px;
  max-width: 400px;
  width: 100%;
  max-height: 720px;
  height: 100%;
  padding: 16px;
  border-radius: 26px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default Chat;
