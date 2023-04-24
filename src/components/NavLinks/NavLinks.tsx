import React from "react";
import CustomLink from "../common/CustomLink/CustomLink";
import * as S from "./styled";
import Regionsthlm from "../../assets/icons/regionsthml";
import Box from "../common/Box/Box";

type NavLinksProps = {
  toggleBurgerMenu?: () => void;
};

const NavLinks: React.FC<NavLinksProps> = ({ toggleBurgerMenu }) => {
  return (
    <S.Container>
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
      <Box row alignCenter justifyCenter>
        <Regionsthlm />
      </Box>
    </S.Container>
  );
};

export default NavLinks;
