import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthModal from "./components/Auth/AuthModal";
import "./styles/global.css"; // optional global styles
import HomePage from "./pages/homePage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // Every route goes here
      <>
        <Route path="/" element={<AuthModal />} />
        <Route path="/home" element={<HomePage />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
