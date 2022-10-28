import Content from "./Content";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, noPadding }) => {
  return (
    <div className="relative bg-black flex flex-col w-full min-h-screen">
      <Navbar />
      <Content noPadding={noPadding}>{children}</Content>
      <Footer />
    </div>
  );
};

export default Layout;
