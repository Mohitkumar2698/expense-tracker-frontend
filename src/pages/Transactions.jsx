import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddExpanse from "../components/Modals/AddExpanse";
import ExpenseList from "../components/ExpenseList";

const Transactions = () => {
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
      {/* ACTION BAR */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700">
          All Transactions
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="
            flex items-center gap-2
            bg-[#14213d] text-white
            px-4 py-2 rounded-lg
            shadow-md hover:shadow-xl
            transition hover:-translate-y-0.5
            cursor-pointer
          "
        >
          <FaPlus /> <span className="hidden sm:block">
            
             Add Expense
            </span>
        </button>
      </div>

      {/* TRANSACTIONS LIST */}
      <ExpenseList />

      {/* ADD EXPENSE MODAL */}
      {open && <AddExpanse setOpen={setOpen} />}
    </div>
  );
};

export default Transactions;
