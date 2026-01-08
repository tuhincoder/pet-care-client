import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import BackToTopButton from "../components/BackToTopButton";
import WhatsAppChat from "../components/SocialLogin/WhatsAppChat";

const MainLayout = () => {
  return (
    <div>
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
