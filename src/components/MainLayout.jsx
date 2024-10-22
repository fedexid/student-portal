import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-primary">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
