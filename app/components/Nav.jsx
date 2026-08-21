"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Nav = ({ setSearchTerm }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setSearchTerm(input);
  };

  return (
    <nav className="w-full flex items-center justify-between py-3 fixed left-0 top-0 px-20 z-99 bg-[#191621]">
      <div className="logo logofont text-xl cursor-pointer" onClick={()=>window.location.reload()}>Moviesz</div>

      

        <div className="search">
          <div className="search_container border border-amber-50 flex items-center h-10 w-fit px-3 rounded-full">
            <input
              type="text"
              placeholder="Search..."
              className="outline-0 border-0"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <IoSearchOutline
              className="cursor-pointer hover:scale-120 transition-all active:scale-50"
              onClick={handleSearch}

            />
          </div>
        </div>
      
    </nav>
  );
};

export default Nav;