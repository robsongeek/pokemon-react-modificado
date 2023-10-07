import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme-context";
import { StyledThemeButton } from "./styles";
import styled from "styled-components";

export const ThemeTogglerButton = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <StyledThemeButton onClick={toggleTheme}>
      <Span>Trocar de tema</Span>
    </StyledThemeButton>
  );
};

const Span = styled.span`
  background-color: aquamarine;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    background-color: orange;
  }
`;
