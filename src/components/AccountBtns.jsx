import React from "react";

export default function AccountBtns() {
  return (
    <div className="flex items-center font-medium">
      <a href="#" className="hover:text-blue transition">
        Login
      </a>
      <span className="mx-6 text-white/10 font-thin">|</span>
      <button className="btn h-[52px] text-base px-8">Register</button>
    </div>
  );
}
