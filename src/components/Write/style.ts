import styled from "styled-components";
import writeBackground from "assets/writeBackground.svg";

export const Write = styled.form`
  position: fixed;
  width: 70%;
  aspect-ratio: 2/3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${writeBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  filter: blur(0px);
  padding: 30px;
`;

export const ToFrom = styled.div`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 1px;
`;

export const Name = styled.input`
  font-size: 0.8rem;
  color: white;
  background: transparent;
  border: none;
  outline: none;
  margin-bottom: 7.5px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.75);
  }
`

export const Message = styled.input`
  font-size: 0.6rem;
  color: white;
  background: transparent;
  border: none;
  outline: none;
  margin-top: 10px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.75);
  }
`