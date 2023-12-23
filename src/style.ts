import styled, { css } from "styled-components";
import header from "assets/header.svg";

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fefdf8;
`;

export const Header = styled.div<{ isModalopen: boolean }>`
  background-image: url(${header});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  font-size: 2rem;
  padding: 10px;
  font-weight: 700;
  border-radius: 0 0 20px 20px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  ${(props) =>
    props.isModalopen &&
    css`
      filter: blur(1.5px);
    `}
`;

export const TextLayout = styled.div<{ isModalopen: boolean }>`
  padding: 20px 15px;
  ${(props) =>
    props.isModalopen &&
    css`
      filter: blur(1.5px);
    `}
`;
export const Count = styled.span`
  font-weight: 800;
  color: #5ea152;
`;

export const MainText = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
`;

export const SubText = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

export const Tree = styled.img<{ isModalopen: boolean }>`
  width: 100%;
  ${(props) =>
    props.isModalopen &&
    css`
      filter: blur(1.5px);
    `}
`;

export const Dark = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
`;
