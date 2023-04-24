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
