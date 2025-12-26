import { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { FaTrash, FaEdit } from "react-icons/fa";
import EditExpense from "./Modals/EditExpense";

const ExpenseList = ({ recent }) => {
  const { transactions, dispatch } = useContext(ExpenseContext);
  const [transaction, setTransaction] = useState({});
  const [open, setOpen] = useState(false);
  const handleEdit = (transaction) => {
    setTransaction(transaction);
    setOpen(true);
  };

  return (
    <div className="space-y-2">
      {transactions.length === 0 ? (
        <div className="text-center py-20 text-gray-500 ">
          <p className="text-xl font-medium">No transactions</p>
          <p className="text-sm">Start by adding one</p>
        </div>
      ) : (
        (recent ? transactions.slice(0, 5) : transactions).map(
          (transaction) => (
            <div key={transaction.id}>
              <div
                className={`
                backdrop-blur-xl bg-white
                rounded-lg p-3 sm:p-4 shadow-md
                flex justify-between items-center
                transition-all duration-200 ease-in-out
                cursor-pointer
                ${
                  transaction.type === "expense"
                    ? " hover:ring-1 hover:ring-inset ring-red-500  hover:shadow-lg hover:shadow-red-500/10 hover:scale-101"
                    : " hover:ring-1 hover:ring-inset ring-green-500 hover:shadow-lg hover:shadow-green-500/10 hover:scale-101"
                }
              `}
              >
                <div>
                  <p className="font-semibold text-gray-800">
                    {transaction?.category || ""}
                  </p>
                  <p className="text-sm text-gray-500">
                    {" "}
                    {/* ← Added min-w-0 here */}
                    {transaction?.date} •{" "}
                    <span className="truncate">
                      {" "}
                      {/* Added block for better reliability */}
                      {transaction?.note || "No note"}
                    </span>
                  </p>
                </div>

                <div className="flex sm:items-center items-end sm:gap-6 flex-col sm:flex-row ">
                  <p
                    className={`font-bold text-lg sm:text-xl ${
                      transaction?.type === "expense"
                        ? "text-red-500"
                        : "text-green-600"
                    }`}
                  >
                    {transaction?.type === "expense" ? "-" : "+"} ₹
                    {transaction
                      ? Number(transaction.amount).toLocaleString()
                      : 0}
                  </p>
                  <div className="flex gap-2 sm:gap-4 text-gray-400 text-lg">
                    <FaEdit
                      className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
                      onClick={() => handleEdit(transaction)} // Add your edit logic here
                    />
                    <FaTrash
                      onClick={() =>
                        dispatch({ type: "remove", id: transaction.id })
                      }
                      className="cursor-pointer hover:text-red-500 transition-colors duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        )
      )}
      {open && <EditExpense transaction={transaction} setOpen={setOpen} />}
    </div>
  );
};

export default ExpenseList;
