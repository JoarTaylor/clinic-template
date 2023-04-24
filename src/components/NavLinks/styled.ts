import styled from "styled-components";
import { breakpoints } from "../../styles/theme";

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${breakpoints.laptop} {
    flex-direction: row;
    gap: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${breakpoints.mobile} {
    flex-direction: column;
    justify-content: space-between;
    gap: 0;
    height: 100%;
  }
`;
