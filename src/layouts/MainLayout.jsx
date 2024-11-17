
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="bg-secondary-subtle">
            <Navbar />
            <div className="container mt-5">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
