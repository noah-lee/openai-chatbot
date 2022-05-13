import { useState, useContext } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import styled from "styled-components";
import { MdSend } from "react-icons/md";

import { ChatContext } from "../contexts/ChatContext";

const Form = () => {
  const { setConversationLog, engine, engines } = useContext(ChatContext);
  const [input, setInput] = useState("");

  const getOpenAiResponse = async () => {
    const data = {
      prompt: input,
      temperature: 0.5,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
    };
    const res = await axios.post(
      `https://api.openai.com/v1/engines/${engine}/completions`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
        },
      }
    );
    const newMessage = {
      id: uuidv4(),
      text: res.data.choices[0].text,
      sender: "openai",
      time: moment(new Date()).format("dddd, MMMM Do YYYY, h:mm a"),
    };
    setConversationLog((prevState) => [...prevState, newMessage]);
  };

  const handleInputChange = (ev) => {
    const value = ev.target.value;
    setInput(value);
  };

  const handleSend = (ev) => {
    ev.preventDefault();
    setInput("");
    const newMessage = {
      id: uuidv4(),
      text: input,
      sender: "user",
      time: moment(new Date()).format("dddd, MMMM Do YYYY, h:mm a"),
    };
    setConversationLog((prevState) => [...prevState, newMessage]);
    getOpenAiResponse();
  };

  return (
    <Wrapper onSubmit={handleSend}>
      <Input
        required={true}
        placeholder={`Chat with ${engines.find(
          (option) => option.id === engine
        ).nickname}`}
        value={input}
        onChange={handleInputChange}
      />
      <Send>
        <MdSend size={24} color="var(--color-blue)" />
      </Send>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  height: 48px;

  display: flex;
  gap: 8px;
`;

const Input = styled.input`
  flex: 1;

  padding: 8px;
  border: none;
  border-radius: 16px;
  background-color: var(--color-main);
  color: var(--color-blue);
  font-size: 16px;
  font-family: "Montserrat";

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const Send = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  &:hover {
    background-color: var(--color-main);
  }
`;

export default Form;
