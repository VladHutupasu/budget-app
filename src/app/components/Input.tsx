"use client";

import { useState } from "react";
import { BudgetItem } from "../types/budgetItem";

interface InputProps {
  onAdd: (item: Omit<BudgetItem, "id" | "date">) => Promise<void>;
}

export default function Input({ onAdd }: InputProps) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (!name || !amount) return;
    onAdd({
      name,
      amount: parseFloat(amount),
    });
    setName("");
    setAmount("");
  };

  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <input
        type="text"
        className="input"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="input">
        <input
          type="number"
          inputMode="decimal"
          pattern="[0-9,]*"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <span className="label">€</span>
      </label>

      <button className="btn btn-neutral mt-4" onClick={handleSubmit}>
        Add
      </button>
    </fieldset>
  );
}
