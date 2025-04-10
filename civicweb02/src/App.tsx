import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import AuthModal from "./components/Auth/AuthModal";
import Signup from "./pages/Signup";
import DashboardLayout from "./components/Dashboard/Dashboard_Layout";
import Dashboard from "./pages/Dashboard";
import "./styles/global.css"; // optional global styles
import HomePage from "./pages/homePage";
import AuthModal from "./components/Auth/AuthModal";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // Every route goes here
      <>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
