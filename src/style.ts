import styled from "styled-components";
import header from "assets/header.png";

export const Layout = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  background-image: url(${header});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  font-size: 2rem;
  padding: 10px;
  font-weight: 600;
  border-radius: 0 0 20px 20px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
`;
