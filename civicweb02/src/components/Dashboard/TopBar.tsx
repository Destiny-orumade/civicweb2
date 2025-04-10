interface TopbarProps {
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Topbar: React.FC<TopbarProps> = ({ setIsSidebarOpen }) => {
  return (
    <header className="p-4 shadow md:hidden bg-white">
      <button onClick={() => setIsSidebarOpen(true)}>☰</button>
    </header>
  );
};

export default Topbar;
