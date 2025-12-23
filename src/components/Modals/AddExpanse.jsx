import React, { useContext, useState } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";

const AddExpanse = ({ setOpen }) => {
  const { dispatch } = useContext(ExpenseContext);
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    date: today,
    note: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "amount" ? Number(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "add",
      payload: formData,
    });
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded shadow-2xl px-4 py-2 space-y-2">
        {/* Header */}
        <div className="border-b pb-2">
          <h1 className="text-2xl font-semibold text-gray-800">Add Expense</h1>
          <p className="text-sm text-gray-500">
            Enter details of your transaction
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          {/* Amount */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Amount</label>
            <input
              value={formData.amount}
              onChange={handleChange}
              className="h-10 rounded-md border border-gray-300 px-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              name="amount"
              required
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              value={formData.category}
              onChange={handleChange}
              className="h-10 rounded-md border border-gray-300 px-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="category"
              required
            >
              <option value="">Select category</option>
              <option value="salary">Salary</option>
              <option value="pension">Pension</option>
              <option value="incentive">Incentive</option>
              <option value="food">Food & Dining</option>
              <option value="shopping">Shoping</option>
              <option value="vehicle">Vehicle & Fuel</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Date */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Date</label>
            <input
              value={formData.date}
              onChange={handleChange}
              className="h-10 rounded-md border border-gray-300 px-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              required
              name="date"
            />
          </div>

          {/* Note */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Note</label>
            <textarea
              value={formData.note}
              onChange={handleChange}
              className="rounded-md border border-gray-300 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              name="note"
              maxLength={100}
              placeholder="Optional note..."
            ></textarea>
          </div>

          {/* Type */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Type</label>

            <div className="flex gap-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="expense"
                  checked={formData.type === "expense"}
                  onChange={handleChange}
                  className="accent-red-500"
                  required
                />
                <span className="text-gray-700">Expense</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="income"
                  checked={formData.type === "income"}
                  onChange={handleChange}
                  className="accent-green-500"
                  required
                />
                <span className="text-gray-700">Income</span>
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2 border-t">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded cursor-pointer border hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded bg-[#14213d] cursor-pointer text-white "
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpanse;
