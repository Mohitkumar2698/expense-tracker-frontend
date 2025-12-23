import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#14213d] shadow-md">
      <div className="max-w-7xl mx-10 h-20 flex items-center justify-between">
        {/* App Title */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#e5e5e5] tracking-wide">
            Expense Tracker
          </h1>
        </div>

        {/* Month Selector */}
        <div>
          <select
            className="bg-[#e5e5e5] text-[#14213d] text-base sm:text-lg font-medium rounded-lg px-3 py-2 outline-none cursor-pointer focus:ring-2 focus:ring-[#fca311]"
            name="month"
            id="month"
          >
            <option value="oct">October</option>
            <option value="nov">November</option>
            <option value="dec">December</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
