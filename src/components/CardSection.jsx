import { TbMoneybag, TbPigMoney } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { ExpenseContext } from "../context/ExpenseContext";
import { useContext, useMemo } from "react";

const CardSection = () => {
  const { transactions } = useContext(ExpenseContext);

  const totalIncome = useMemo(
    () =>
      transactions
        .filter((t) => t.type === "income")
        .reduce((acc, t) => acc + Number(t.amount || 0), 0),
    [transactions]
  );

  const totalExpense = useMemo(
    () =>
      transactions
        .filter((t) => t.type === "expense")
        .reduce((acc, t) => acc + Number(t.amount || 0), 0),
    [transactions]
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
      {/* Income */}
      <div className="bg-white border border-black/10 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow flex justify-between items-center">
        <div>
          <p className="text-3xl font-bold text-green-600">₹{totalIncome}</p>
          <h1 className="text-sm text-gray-600 mt-1">Total Income</h1>
        </div>
        <div className="bg-green-100 p-3 rounded-full">
          <TbPigMoney className="text-green-600 text-4xl" />
        </div>
      </div>

      {/* Expense */}
      <div className="bg-white border border-black/10 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow flex justify-between items-center">
        <div>
          <p className="text-3xl font-bold text-red-500">₹{totalExpense}</p>
          <h1 className="text-sm text-gray-600 mt-1">Total Expense</h1>
        </div>
        <div className="bg-red-100 p-3 rounded-full">
          <GiTakeMyMoney className="text-red-500 text-4xl" />
        </div>
      </div>

      {/* Average Expense */}
      <div className="bg-white border border-black/10 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow flex justify-between items-center">
        <div className="min-w-0">
          <p className="text-3xl font-bold text-orange-500 truncate">
            ₹
            {Math.floor(
              totalExpense /
                (transactions.filter((t) => t.type === "expense").length || 1)
            )}
          </p>
          <h1 className="text-sm text-gray-600 mt-1">Average Expense</h1>
        </div>
        <div className="bg-orange-100 p-3 rounded-full">
          <GiTakeMyMoney className="text-orange-500 text-4xl" />
        </div>
      </div>

      {/* Balance */}
      <div className="bg-white border border-black/10 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow flex justify-between items-center">
        <div>
          <p className="text-3xl font-bold text-sky-600">
            ₹{totalIncome - totalExpense}
          </p>
          <h1 className="text-sm text-gray-600 mt-1">Balance</h1>
        </div>
        <div className="bg-sky-100 p-3 rounded-full">
          <TbMoneybag className="text-sky-600 text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
