import styled from "styled-components/native";

import theme from '../constants/Colors';

const LoginScreenStyles = styled.View``;
export default LoginScreenStyles;

export const Image = styled.Image`
  height: 15em;
  width: 15em;
  margin: auto;
  padding: 2em;
  margin-top: 20%;
  margin-bottom:5em;
`;

export const TextInput = styled.TextInput`
  height: 3em;
  margin:1em auto;
  width:80%;
  background-color: ${theme.dark.tint};
  color:${theme.dark.text};
  padding:1em;
  border-radius:1em;
`;
