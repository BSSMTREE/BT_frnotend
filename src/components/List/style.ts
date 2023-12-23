import styled from "styled-components";
import listBackground from "assets/listBackground.svg";

export const List = styled.div`
  position: fixed;
  width: 70%;
  aspect-ratio: 2/3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${listBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  filter: blur(0px);
  padding: 30px 30px 0 30px;
`;
