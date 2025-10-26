"use client";

import { useEffect, useState } from "react";
import Input from "./Input";
import Progress from "./Progress";
import Timeline from "./Timeline";

export interface BudgetItem {
  id: number;
  name: string;
  amount: number;
  date: string; // ISO date string
}

export default function Main() {
  const [items, setItems] = useState<BudgetItem[]>([]);
  const [budgetLimit, setBudgetLimit] = useState(300); // Example total budget

  // Use a key that includes the current month, so data resets automatically monthly
  const storageKey = `budget-items-${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }`;

  // Load from localStorage when page loads
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setItems(JSON.parse(saved));
  }, [storageKey]);

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(items));
  }, [items, storageKey]);

  const totalExpenses = items.reduce((sum, i) => sum + i.amount, 0);

  const remaining = budgetLimit - totalExpenses;

  // Handle adding a new item (from Input)
  const addItem = (item: Omit<BudgetItem, "id" | "date">) => {
    const newItem: BudgetItem = {
      id: Date.now(),
      date: new Date().toISOString(),
      ...item,
    };
    setItems((prev) => [...prev, newItem]);
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="flex min-h-screen items-center justify-center font-knewave">
      <main className="flex min-h-screen w-full flex-col items-center gap-8 py-8 px-4">
        <h1 className="text-4xl">Budget app</h1>

        <Progress
          value={Math.min(100, Math.round((totalExpenses / budgetLimit) * 100))}
          remaining={remaining}
          total={budgetLimit}
        />

        <Input onAdd={addItem} />

        <Timeline items={items} onRemove={removeItem} />
      </main>
    </div>
  );
}
