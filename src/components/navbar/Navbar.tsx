import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Burger from "../../assets/icons/burger";
import Regionsthlm from "../../assets/icons/regionsthml";
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
            <S.title>Rehab</S.title>
          </Link>
        </S.TitleContainer>
        <S.NavLinksContainer>
          <NavLinks />
        </S.NavLinksContainer>
          <Regionsthlm />
      </S.Container>
    </>
  );
};

export default Navbar;
