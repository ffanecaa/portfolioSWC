import { Footer } from "./Footer";
import { Header } from "./Header";
import PropTypes from "prop-types";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
     <Footer/>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};