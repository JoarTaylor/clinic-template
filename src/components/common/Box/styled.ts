import styled from "styled-components";

type DivProps = {
  row?: boolean;
  spaceBetween?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
};

export const Div = styled.div<DivProps>`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  justify-content: ${({ spaceBetween }) =>
    spaceBetween ? "space-between" : ""};
  align-items: ${({ alignCenter }) => (alignCenter ? "align-center" : "")};
  justify-content: ${({ justifyCenter }) => (justifyCenter ? "center" : "")};
`;
