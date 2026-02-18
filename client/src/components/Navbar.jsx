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
      className="fixed w-full z-50 backdrop-blur-2xl flex justify-between items-center
      py-3 px-4 sm:px-20 xl:px-32 border-b border-white/10"
    >
      {/* Logo / Brand */}
      <h1
        onClick={() => navigate("/")}
        className="text-2xl sm:text-3xl font-extrabold tracking-tight 
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
        bg-clip-text text-transparent cursor-pointer"
      >
        SwiftAI
      </h1>

      {/* Right side */}
      {user ? (
        <UserButton />
      ) : (
        <button
          onClick={openSignIn}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer
          bg-primary hover:bg-primary/90 transition px-6 sm:px-10 py-2.5 text-white font-medium"
        >
          Get Started <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
