import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { FaTrash, FaEdit } from "react-icons/fa";

const ExpenseList = ({ recent }) => {
  const { transactions, dispatch } = useContext(ExpenseContext);

  return (
    <div className="space-y-2">
      {transactions.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg font-medium">No transactions yet</p>
          <p className="text-sm">Start by adding your first expense</p>
        </div>
      ) : (
        (recent ? transactions.slice(0, 5) : transactions).map(
          (transaction) => (
            <div key={transaction.id}>
              <div
                className={`
                backdrop-blur-xl bg-white
                border-2 rounded-lg p-4 shadow-md
                flex justify-between items-center
                transition-all duration-200 ease-in-out
                cursor-pointer
                ${
                  transaction.type === "expense"
                    ? " hover:border-red-500 hover:shadow-lg hover:shadow-red-500/10"
                    : " hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10"
                }
              `}
              >
                <div>
                  <p className="font-semibold text-gray-800">
                    {transaction?.category.charAt(0).toUpperCase() +
                      transaction?.category.slice(1)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {transaction?.date} • {transaction?.note || "No note"}
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <p
                    className={`font-bold text-xl ${
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
                  <div className="flex gap-4 text-gray-400 text-lg">
                    <FaEdit
                      className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
                      // onClick={() => handleEdit(transaction)} // Add your edit logic here
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
    </div>
  );
};

export default ExpenseList;
