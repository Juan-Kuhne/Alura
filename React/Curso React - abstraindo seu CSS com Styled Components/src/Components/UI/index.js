import styled from "styled-components";

export const Icone = styled.img`
  height: 25px;
  width: 25px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;

  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;

export const Saldo = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

export const Detalhe = styled.span`
  color: #41d3be;
  font-size: 24px;
`;
