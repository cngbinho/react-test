import styled from "styled-components";

import InputComponent from "../Input";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5%;
  width: 32%;

  @media (max-width: 783px) {
    width: 15.7%;
  }
`;

export const Input = styled(InputComponent).attrs({
  type: "text",
  placeholder: "Pesquise pelo símbolo ou nome"
})`
  font-size: 1.5em;
  width: 95%;
  height: 2.5rem;
  padding: 1.3% 0 1.3% 2%;
  margin-bottom: 1%;
  border: 1px solid #a9a6a6;
  border-radius: 5px;

  transition: all 0.1s ease-in-out;
`;

export const DropItens = styled.div`
  width: 95%;
  background-color: #fff;
  padding: 1%;
  box-shadow: 0px 3px 5px 2px rgba(39, 39, 39, 0.2);
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #a9a6a6;
  justify-content: space-between;
  color: #000;
  padding: 1.3% 0 0.6% 1.3%;

  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &&:hover {
    background-color: #eee;
  }
`;

export const Item = styled.span`
  font-weight: 500;
  color: #000;
`;
