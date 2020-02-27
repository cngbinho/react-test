import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 100vh;
  margin: auto;

  && svg {
    cursor: pointer;
  }

  @media (max-width: 783px) {
    justify-content: flex-start;
  }
`;

export const Chart = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top 5%;
`;

export const InfoBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c1c1c1;
  width: 100%;
  margin: 3% 0;

  && span {
    margin-left: 4%;
  }
`;

export const NavBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: blue;
  width: 5%;
  height: 3.7em;
  color: white;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 783px) {
    flex-direction: column;
    align-items: flex-start;
  }
  margin: ${props => props.margin};
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  && span {
    line-height: 0;
    font-weight: bold;
    width: 100%;
  }

  @media (max-width: 783px) {
    flex-direction: column;
    align-items: flex-start;
  }
  margin: ${props => props.margin};
`;

export const Fields = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5%;
  width: 98%;

  && span {
    margin-right: 3%;
  }

  @media (max-width: 783px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;
