import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-white text-stone-700">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
