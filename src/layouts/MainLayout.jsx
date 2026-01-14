import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import BackToTopButton from "../components/BackToTopButton";
import WhatsAppChat from "../components/SocialLogin/WhatsAppChat";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <div className="">
        <Outlet></Outlet>
      </div>
      <div className="">
        <WhatsAppChat />
        <BackToTopButton className="" />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
