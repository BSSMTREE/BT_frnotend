import styled from "styled-components";
import writeBackground from "assets/writeBackground.svg";

export const Write = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  aspect-ratio: 2/3;
  background-image: url(${writeBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  filter: blur(0px);
`;
