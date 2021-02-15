import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{

  font-family: 'Roboto', sans-serif;
}
`;

export const FinishedTasksWrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  max-width: 300px;
  margin: 30px auto;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
  float: left;
`;

export const UnfinishedWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 30px auto;

  max-width: 300px;
  margin-right: 50px;
  // min-height: 150px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
  float: right;
`;

export const AddButtonStyled = styled.button`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  color: #fff;
  background-color: #00af91;
  text-decoration: none;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  // float: right;
`;

export const UpdateButtonStyled = styled.button`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  color: #fff;
  background-color: #00aff1;
  text-decoration: none;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  // float: right;
`;

export const SubmitButtonStyled = styled.button`
display: inline-block;
border: none;
padding: 10px 20px;
margin: 5px;
border-radius: 5px;
color: #fff;
  background-color: #0077a5;
  text-decoration: none;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  // float: right;
`;

export const DeleteButtonStyled = styled.button`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  color: #fff;
  background-color: #af001e;
  text-decoration: none;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  // float: right;
`;
