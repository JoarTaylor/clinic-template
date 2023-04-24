import React from "react";
import CustomLink from "../common/CustomLink/CustomLink";
import * as S from './styled'

type NavLinksProps = {
  toggleBurgerMenu?: () => void;
};

const NavLinks: React.FC<NavLinksProps> = ({ toggleBurgerMenu }) => {

  return (
    <S.LinksContainer>
      <CustomLink callback={toggleBurgerMenu} to="/Kliniken">
        Kliniken
      </CustomLink>
      <CustomLink callback={toggleBurgerMenu} to="/Personal">
        Personal
      </CustomLink>
      <CustomLink callback={toggleBurgerMenu} to="/Kurser">
        Kurser
      </CustomLink>
      <CustomLink callback={toggleBurgerMenu} to="/Kontakt">
        Kontakt
      </CustomLink>
      <CustomLink callback={toggleBurgerMenu} to="/Öppettider">
        Öppettider
      </CustomLink>
    </S.LinksContainer>
  );
};

export default NavLinks;
