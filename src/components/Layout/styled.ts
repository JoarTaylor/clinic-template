import styled from "styled-components";
import { breakpoints, theme } from "../../styles/theme";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  ${breakpoints.laptop} {
    width: 70%;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: gray;
`;
