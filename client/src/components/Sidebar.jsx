import React from "react";
import { useClerk, useUser } from "@clerk/clerk-react";
import {
  Eraser,
  FileText,
  Home,
  Image,
  LogOut,
  Scissors,
  SquarePen,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/ai", label: "Dashboard", Icon: Home },
  { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
  { to: "/ai/blog-titles", label: "Blog Titles", Icon: SquarePen },
  { to: "/ai/generate-images", label: "Generate Images", Icon: Image },
  { to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
  { to: "/ai/remove-object", label: "Remove Object", Icon: Scissors },
  { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
  { to: "/ai/community", label: "Community", Icon: Users },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  if (!user) return null;

  return (
    <div
      className={`max-sm:absolute top-16 bottom-0 flex w-64 flex-col items-center justify-between border-r border-slate-200 bg-white/90 shadow-sm ${
        sidebar ? "translate-x-0" : "max-sm:-translate-x-full"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="my-7 w-full">
        <img
          src={user.imageUrl}
          className="mx-auto w-13 rounded-full"
          alt="user Avatar"
        />
        <h1 className="mt-1 text-center">{user.fullName}</h1>
        <div className="mt-5 px-6 text-sm font-medium text-gray-600">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3.5 py-2.5 ${
                  isActive
                    ? "bg-slate-950 text-white shadow-lg shadow-slate-200"
                    : "hover:bg-slate-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`h-4 w-4 ${isActive ? "text-white" : ""}`} />
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="flex w-full items-center justify-between border-t border-slate-200 p-4 px-7">
        <div onClick={openUserProfile} className="flex cursor-pointer items-center gap-2">
          <img src={user.imageUrl} alt="user-image" className="w-8 rounded-full" />
          <div className="text-sm font-medium">{user.fullName}</div>
        </div>
        <LogOut
          onClick={signOut}
          className="w-4.5 cursor-pointer text-gray-400 transition hover:text-gray-700"
        />
      </div>
    </div>
  );
};

export default Sidebar;
