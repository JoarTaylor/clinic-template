import styled from "styled-components";
import { breakpoints, theme } from "../../styles/theme";

type Backdrop = {
  isModalOpen: boolean;
};

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${theme.colors.primary};
`;

export const TitleContainer = styled.div`
  margin-right: 20px;

  ${breakpoints.mobile} {
    margin: 0 auto;
  }

  h1 {
    margin: 0;
    font-size: 32px;
  }
`;

export const Modal = styled.div<Backdrop>`
  display: ${({ isModalOpen }) => (isModalOpen ? "block" : "none")};
  background-color: ${theme.colors.primary};
  padding: 80px 20px 20px 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 35%;
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
  position: absolute;
  left: 20px;
  ${breakpoints.laptop} {
    display: none;
  }
  z-index: 10000;
`;

export const NavLinksContainer = styled.div`
  ${breakpoints.mobile} {
    display: none;
  }
  width: 100%;
`;
