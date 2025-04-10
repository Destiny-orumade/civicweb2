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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // Every route goes here
      <>
        <Route path="/" element={<Signup />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="home" element={<Dashboard />} />
          <Route path="settings" element={<Dashboard />} /> */}
          {/* Add more nested routes here */}
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
