import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <Wrapper>
      <p>Created by Noah Lee</p>
      <AccentLink
        target="_blank"
        href="https://github.com/noah-lee/openai-chatbot"
      >
        <FaGithub size={16} />
        <p>GitHub</p>
      </AccentLink>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-size: 12px;
`;

const AccentLink = styled.a`
  display: flex;
  align-items: center;
  gap: 2px;
  text-decoration: none;
  color: var(--color-blue);
  font-weight: bold;
  cursor: pointer;
`;

export default About;
