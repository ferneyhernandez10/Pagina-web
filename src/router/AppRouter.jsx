import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TryProducts from "../pages/TryProducts";
import Launchpad from "../pages/Launchpad";
import HowItWorks from "../pages/HowItWorks";
import OurMission from "../pages/OurMission";
import Layout from "../components/Layout";
import SignUp from "../pages/SignUp";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Tryproducts" element={<TryProducts />} />
          <Route path="/launchpad" element={<Launchpad />} />
          <Route path="/HowItWorks" element={<HowItWorks />} />
          <Route path="/OurMission" element={<OurMission />} />
          <Route path="/sign-in" element={<SignUp />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
