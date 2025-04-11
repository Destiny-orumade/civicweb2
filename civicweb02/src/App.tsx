import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/pages/homepage";
import SignUpPage from "@/pages/signup";
import SignInPage from "@/pages/signin";
import LearnMore from "@/pages/learn-more";
import Layout from "@/components/shared/layout";
import DashboardLayout from "./components/dashboard/layout";
import Dashboard from "./pages/dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn-more" element={<LearnMore />} />
        </Route>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
