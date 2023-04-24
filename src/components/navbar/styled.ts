import styled from "styled-components";
import { breakpoints, theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  background-color: ${theme.colors.primary};
`;

export const title = styled.h1``;

export const TitleContainer = styled.div``;

type Backdrop = {
  isModalOpen: boolean;
};

export const Modal = styled.div<Backdrop>`
  display: ${({ isModalOpen }) => (isModalOpen ? "block" : "none")};
  background-color: ${theme.colors.primary};
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 50%;
  bottom: 0;
  z-index: 100;
  ${breakpoints.laptop} {
    display: none;
  }
`;

export const ModalBackdrop = styled.div<Backdrop>`
  display: ${(props) => (props.isModalOpen ? "block" : "none")};
  z-index: 50;
  background: white;
  opacity: 0.5;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;

  ${breakpoints.laptop} {
    display: none;
  }
`;

export const BurgerContainer = styled.div`
  ${breakpoints.laptop} {
    display: none;
  }
`;

export const NavLinksContainer = styled.div`
  ${breakpoints.mobile} {
    display: none;
  }
`;
