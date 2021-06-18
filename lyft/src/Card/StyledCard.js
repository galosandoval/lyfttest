import styled from "styled-components";

export const StyledCard = styled.div`
  height: 100vh;
  /* background: #f8f8f8; */
  background: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);
  display: grid;
  place-items: center;
  font-family: "Jost", sans-serif;
  color: #f8f8f8;
  .card-container {
    padding: 100px;
    text-align: center;
    /* background-color: #f8f8f8; */
    border-radius: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  .card {
    height: 200px;
  }
  .card-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card-form input {
    margin-bottom: 10px;
    border-radius: 20px;
    border: none;
    text-align: center;
    background-color: rgb(125, 47, 125);
    opacity: .5;
    height: 25px;
    color: #f8f8f8;
    font-family: "Jost", sans-serif;
  }
  button {
    font-family: "Jost", sans-serif;
    border-radius: 20px;
    border: none;
    height: 25px;
    transition: ease .4s;
    color: rgb(125, 47, 125);
    background-color: #f8f8f8;
  }
  button:hover{
    background-color: #9fe2bf;
    cursor: pointer;
  }
  h2 {
    transition: all ease 1s;
  }
`;
