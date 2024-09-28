import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DashboardHeader from "./dashboard/DashboardHeader";
import DashboardFooter from "./dashboard/DashboardFooter";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Dashboard from "./dashboard/Dashboard";
import Profile from "./dashboard/Profile";

// Helper function to determine which layout to render
const Layout = ({ children }) => {
  const location = useLocation();

  // Add all the dashboard and profile related routes here
  const dashboardRoutes = [
    "/dashboard",
    "/profile",
    // Add other dashboard-related URLs here
  ];

  // Check if the current path belongs to dashboard-related routes
  const isDashboard = dashboardRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {isDashboard ? <DashboardHeader /> : <Header />}
      <div>{children}</div>
      {isDashboard ? <DashboardFooter /> : <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Website Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />

          {/* Add other URLs as needed */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
