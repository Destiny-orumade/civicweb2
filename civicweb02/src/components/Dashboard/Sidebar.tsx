import Logo from "../../assets/logo.png";
import images from "../../assets/dashboard";
import { Link } from "react-router-dom";
import "../../styles/Dashboard.css";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden md:block w-[215px] bg-[#003D1F] shadow-lg">
        {/* Make the icons to link to the pages they are meant to go to. Wrap them in a Link element. */}
        <div className="flex flex-col justify-evenly items-center gap-10 py-12">
          <img src={Logo} className="w-28" alt="CivicLink Logo" />
          <Link
            to=""
            className="flex flex-col gap-2 items-center justify-center"
          >
            <img
              src={images.account}
              className="w-12 h-12"
              alt="account icon"
            />
            <p className="text-white reg-text">Account</p>
          </Link>
          <Link
            to=""
            className="flex flex-col gap-2 items-center justify-center"
          >
            <img
              src={images.dashboard}
              className="w-12 h-12"
              alt="dashboard icon"
            />
            <p className="text-white reg-text">Dashboard</p>
          </Link>
          <Link
            to=""
            className="flex flex-col gap-2 items-center justify-center"
          >
            <img src={images.officials} alt="officials icon" />
            <p className="text-white reg-text">Officials</p>
          </Link>
          <Link
            to=""
            className="flex flex-col gap-2 items-center justify-center"
          >
            <img src={images.report} alt="report icon" />
            <p className="text-white reg-text">New Report</p>
          </Link>
          <Link
            to=""
            className="flex flex-col gap-2 items-center justify-center"
          >
            <img src={images.find} alt="find icon" />
            <p className="text-white reg-text">Find</p>
          </Link>
          <Link
            to=""
            className="flex flex-col gap-2 items-center justify-center"
          >
            <img src={images.volunteer} alt="volunteer icon" />
            <p className="text-white reg-text">Volunteer</p>
          </Link>
          <Link
            to=""
            className="flex flex-col gap-2 items-center justify-center"
          >
            <img src={images.help} alt="help icon" />
            <p className="text-white reg-text">Help Center</p>
          </Link>
        </div>
      </div>

      {/* Mobile sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div className="w-64 bg-white h-full p-4">
            <button onClick={() => setIsOpen(false)}>Close</button>
            {/* Sidebar content */}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
