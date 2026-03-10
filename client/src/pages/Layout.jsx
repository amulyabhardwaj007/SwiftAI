import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useUser, SignIn } from "@clerk/clerk-react";

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <SignIn />
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col bg-slate-50">
      <nav className="flex min-h-16 w-full items-center justify-between border-b border-slate-200 bg-white/80 px-8 backdrop-blur-xl">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-400 text-sm font-bold text-white">
            S
          </span>
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">
            Swift
          </span>
        </button>

        {sidebar ? (
          <X
            onClick={() => setSidebar(false)}
            className="h-6 w-6 cursor-pointer text-gray-600 sm:hidden"
          />
        ) : (
          <Menu
            onClick={() => setSidebar(true)}
            className="h-6 w-6 cursor-pointer text-gray-600 sm:hidden"
          />
        )}
      </nav>

      <div className="flex h-[calc(100vh-64px)] flex-1 w-full overflow-hidden">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
