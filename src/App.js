import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SubNav from "./Components/Subnav";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();

  // Add the paths where you don't want to show Navbar and Footer
  const hideNavbarFooterRoutes = ["/Trip-Planning"];

  const shouldHideNavbarFooter = hideNavbarFooterRoutes.includes(
    location.pathname
  );

  return (
    <div className="App">
      {!shouldHideNavbarFooter && <Navbar />}
      {!shouldHideNavbarFooter && <SubNav />}
      <AllRoutes />
      {!shouldHideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;
