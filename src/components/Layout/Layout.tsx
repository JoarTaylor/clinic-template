import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Box from "../common/Box/Box";

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <Box>
      <Navbar />
      <Box row justifyCenter>
        <Outlet />
      </Box>
      <Box row justifyCenter>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
