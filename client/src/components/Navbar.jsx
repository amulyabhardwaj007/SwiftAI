import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div
      className="fixed z-50 flex w-full items-center justify-between border-b border-sky-100/80 bg-white/70 px-4 py-3 backdrop-blur-xl shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:px-20 xl:px-32"
    >
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-3 cursor-pointer"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-400 text-sm font-bold text-white shadow-lg shadow-sky-200">
          S
        </span>
        <span className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Swift
        </span>
      </button>

      {user ? (
        <UserButton />
      ) : (
        <button
          onClick={openSignIn}
          className="flex cursor-pointer items-center gap-2 rounded-full bg-slate-950 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 sm:px-10"
        >
          Launch Swift <ArrowRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
