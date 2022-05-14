import { useContext } from "react";
import styled from "styled-components";
import { MdInfo } from "react-icons/md";

import { ChatContext } from "../contexts/ChatContext";

import { ReactComponent as OpenAiIcon } from "../assets/openai_icon.svg";

const Header = () => {
  const { engine, setEngine, engines } = useContext(ChatContext);

  const handleEngineChange = (ev) => {
    const value = ev.target.value;
    setEngine(value);
  };

  return (
    <Wrapper>
      <OpenAiContainer>
        <OpenAiIcon width="36px" heigth="36px" />
        <OpenAiTitle>OpenAI</OpenAiTitle>
        <OpenAISelect onChange={handleEngineChange} value={engine}>
          {engines.map((engine) => (
            <option key={engine.id} value={engine.id}>
              {engine.nickname}
            </option>
          ))}
        </OpenAISelect>
      </OpenAiContainer>
      <InfoLink href="https://openai.com/" target="_blank">
        <MdInfo size={24} />
      </InfoLink>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OpenAiContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const OpenAiTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: var(--color-red);
`;

const OpenAISelect = styled.select`
  border: none;
  background: none;
  font-family: "Montserrat";
  font-size: 20px;
`;

const InfoLink = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  text-decoration: none;
  color: var(--color-red);

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--color-main);
  }
`;

export default Header;
