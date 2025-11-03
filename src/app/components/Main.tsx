"use client";

import { useMemo, useState } from "react";
import Input from "./Input";
import Progress from "./Progress";
import Timeline from "./Timeline";
import { useBudgetData } from "../hooks/useBudgetData";
import SpeedDial from "./SpeedDial";

export default function Main() {
  const [budgetLimit, setBudgetLimit] = useState(300);
  const { items, addItem, removeItem, clearAllitems } = useBudgetData();

  const { totalExpenses, remaining, progressPercentage } = useMemo(() => {
    const total = items.reduce((sum, item) => sum + item.amount, 0);
    const rem = budgetLimit - total;
    const percentage = Math.round((total / budgetLimit) * 100);

    return {
      totalExpenses: total,
      remaining: rem,
      progressPercentage: percentage,
    };
  }, [items, budgetLimit]);

  return (
    <div className="flex min-h-screen items-center justify-center font-knewave">
      <main className="flex min-h-screen w-full flex-col items-center gap-8 py-8 px-4">
        <h1 className="text-4xl">Budget app</h1>

        <Progress
          value={progressPercentage}
          remaining={remaining}
          total={budgetLimit}
        />

        <Input onAdd={addItem} />

        <Timeline items={items} onRemove={removeItem} />
        <SpeedDial onClose={clearAllitems} />
      </main>
    </div>
  );
}
