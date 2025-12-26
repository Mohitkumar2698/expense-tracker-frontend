import { useState } from "react";
import CardSection from "../components/CardSection";
import ExpenseList from "../components/ExpenseList";
import { FaPlus } from "react-icons/fa";
import AddExpanse from "../components/Modals/AddExpanse";
import { Link } from "react-router-dom";
import IncomeChart from "../components/charts/IncomeChart";
import ExpenseChart from "../components/charts/ExpenseChart";

const Dhashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        min-h-[90vh]
        p-2 sm:p-4 space-y-2 sm:space-y-4
        bg-gradient-to-br from-slate-100 via-white to-slate-200
        bg-[length:200%_200%]
        animate-[gradient_12s_ease_infinite]
      "
    >
      <div>
        <CardSection />
      </div>
      <div className="flex items-center gap-2 flex-col sm:flex-row">
        <IncomeChart />
        <ExpenseChart />
      </div>
      {/* ACTION BAR */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl sm:text-3xl font-semibold text-gray-700 flex gap-2 items-center">
          <span>Recent Transactions</span>
          <Link
            to="/transactions"
            className="text-xs sm:text-sm mt-2 sm:mt-3 text-blue-500 underline cursor-pointer "
          >
            View all
          </Link>
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="
                    flex items-center gap-2
                    bg-[#14213d] text-white
                    px-2 sm:px-4 py-2 rounded-lg
                    shadow-md hover:shadow-xl
                    transition hover:-translate-y-0.5
                  "
        >
          <FaPlus />
          <span className="sm:block hidden">Add Expense</span>
        </button>
      </div>
      <ExpenseList recent={true} />

      {/* ADD EXPENSE MODAL */}
      {open && <AddExpanse setOpen={setOpen} />}
    </div>
  );
};

export default Dhashboard;
