import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { FormControl } from "@mui/material";

export const Box = styled.div`
  margin: auto;

  display: flex;
  justify-content: center;

  width: 100%;
  height: 90%;

  font-family: 'Roboto', sans-serif;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    margin: 0;

    justify-content: flex-start;
  }
;`;

export const Form = styled.form`
  width: 70%;
  display: flex;

  background-color: #FBF7F6;

  padding: 5em;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    order: 2;
    width: auto;
    padding: 1em;
  }
`;

export const Aside = styled.div`
  width: 30%;
  overflow-y: auto;

  ul {
    list-style: none;
  }


  @media screen and (max-width: 600px) {
    order: 3;
    width: auto;
  }
  
`;

export const Debtors = styled.li`
  background-color: orange;
  border-radius: 4px;
  font-weight: 300;
  font-size: 18px;
  padding: 0.5em;
  margin: 0.5em;
  cursor: pointer;

`;

export const SelectControll = styled(FormControl)`
  background-color: white;
`;

export const Text = styled(TextField)`
  background-color: white;
`;

export const BtnGroup = styled(Stack)`
  display: flex;
  margin-top: 10em;
  justify-content: end;

  @media screen and (max-width: 600px) {
    margin-top: 3em;
  }
`;
