import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Burger from "../../assets/icons/burger";
import NavLinks from "../NavLinks/NavLinks";
import * as S from "./styled";

type navbarProps = {};

const Navbar: React.FC<navbarProps> = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <S.ModalBackdrop onClick={toggleBurgerMenu} isModalOpen={isModalOpen} />
      <S.Modal isModalOpen={isModalOpen}>
        <NavLinks toggleBurgerMenu={toggleBurgerMenu} />
      </S.Modal>
      <S.Container>
        <S.BurgerContainer onClick={toggleBurgerMenu}>
          <Burger />
        </S.BurgerContainer>
        <S.TitleContainer>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <h1>Rehab</h1>
          </Link>
        </S.TitleContainer>
        <S.NavLinksContainer>
          <NavLinks />
        </S.NavLinksContainer>
      </S.Container>
    </>
  );
};

export default Navbar;
