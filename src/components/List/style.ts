import styled, { css } from "styled-components";
import listBackground from "assets/listBackground.svg";

export const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LeftArrow = styled.img<{ page: number }>`
  width: 4rem;
  ${(props) =>
    props.page < 1 &&
    css`
      visibility: hidden;
    `}
`;

export const RightArrow = styled.img<{ page: number; length: number }>`
  width: 4rem;
  ${(props) =>
    props.page >= props.length - 1 &&
    css`
      visibility: hidden;
    `}
`;

export const List = styled.div`
  width: 70%;
  aspect-ratio: 4/5;
  background-image: url(${listBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  filter: blur(0px);
  padding: 30px 30px 0 30px;
`;

export const NameLayout = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ToFrom = styled.div`
  font-size: 1.15rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1px;
`;

export const Name = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  color: white;
  width: 5rem;
  background: transparent;
  border: none;
  outline: none;
  margin-bottom: 7.5px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.75);
  }
`;

export const Arrow = styled.img`
  width: 2.5rem;
`;

export const Message = styled.div`
  width: 100%;
  min-height: 55%;
  font-size: 1rem;
  color: white;
  margin-top: 10px;
  margin-bottom: 20px;
  word-break: break-all;
`;

export const Cancel = styled.button`
  font-size: 0.9rem;
  font-weight: 500;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 10px;
  color: white;
  background-color: #db4455;
  border: none;
  border-radius: 7.5px;
`;
