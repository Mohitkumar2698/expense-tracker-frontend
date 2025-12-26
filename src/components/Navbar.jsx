import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { dispatch } = useContext(ExpenseContext);
  const handleChange = (e) => {
    const month = e.target.value;
    dispatch({ type: "filterByMonth", month });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#14213d] shadow-md">
      <div className="mx-3 sm:mx-4 h-12 sm:h-20 flex items-center justify-between">
        {/* App Title */}
        <div className="flex items-center gap-2">
          <Link
            to={"/"}
            className="text-2xl sm:text-3xl font-bold text-[#e5e5e5] tracking-wide"
          >
            Expensify
          </Link>
        </div>

        {/* Month Selector */}
        <div className="flex gap-1 sm:gap-2 text-white items-center">
          <p className="text-xs sm:text-2xl">Filter by:</p>
          <select
            onChange={handleChange}
            className="bg-[#e5e5e5] text-[#14213d] text-xs sm:text-lg font-medium rounded-sm sm:rounded-lg px-1 sm:px-3 sm:py-2 outline-none cursor-pointer focus:ring-2 focus:ring-[#fca311]"
            name="month"
            id="month"
          >
            <option value="">All</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
