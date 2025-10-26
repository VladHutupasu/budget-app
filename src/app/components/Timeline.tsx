"use client";

import { BudgetItem } from "./Main";

interface TimelineProps {
  items: BudgetItem[];
  onRemove: (id: number) => void;
}

export default function Timeline({ items, onRemove }: TimelineProps) {
  if (items.length === 0)
    return <p className="text-gray-500">No items yet this month.</p>;

  return (
    <div className="w-full max-w-md">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-base-100 p-3 rounded-lg mb-2 shadow"
        >
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(item.date).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className={`font-bold text-error-content`}>
              {"-"}€{item.amount.toFixed(2)}
            </span>
            <button className="btn btn-xs" onClick={() => onRemove(item.id)}>
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>

    // <ul className="timeline timeline-vertical mt-20">
    //   {items.map((item) => (
    //     <li key={item.id}>
    //       <div className="timeline-start timeline-box text-sm">{item.name}</div>
    //       <hr />
    //     </li>
    //   ))}
    // </ul>
  );
}
