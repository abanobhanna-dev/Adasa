import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { NavBar } from "./../Navbar/nav";
export default function Layout() {
  return (
    <>
      <div className="bg-[#0a0a0a] min-h-screen text-white">
      <NavBar />
        <Outlet />
      <Footer />
      </div>
    </>
  );
}
