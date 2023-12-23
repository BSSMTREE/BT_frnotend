import styled from "styled-components";
import header from "assets/header.svg";

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

export const TextLayout = styled.div`
  padding: 20px 15px;
`;
export const Count = styled.span`
  font-weight: 700;
`;

export const MainText = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const SubText = styled.div`
  font-size: 10px;
  font-weight: 400;
`

export const Tree = styled.img`
  width: 100%;
`
