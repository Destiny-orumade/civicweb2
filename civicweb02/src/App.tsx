import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import AuthModal from "./components/Auth/AuthModal";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import "./styles/global.css"; // optional global styles
import HomePage from "./pages/homePage";
import AuthModal from "./components/Auth/AuthModal";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // Every route goes here
      <>
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dsad" element={<AuthModal />} />
        <Route path="/" element={<HomePage />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
