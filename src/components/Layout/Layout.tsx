import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import * as S from "./styled";

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <S.AppContainer>
      <Navbar />
      <S.MainContainer>
        <Outlet />
      </S.MainContainer>
      <S.FooterContainer>
        <Footer />
      </S.FooterContainer>
    </S.AppContainer>
  );
};

export default Layout;
