"use client";

interface ProgressProps {
  value: number;
  remaining: number;
  total: number;
}

export default function Progress({ value, remaining, total }: ProgressProps) {
  return (
    <div className="w-full max-w-md text-center">
      <div
        className="radial-progress bg-pink-700 text-stone-200 border-pink-300 border-4"
        style={
          {
            "--value": value,
            "--size": "7rem",
          } as React.CSSProperties
        }
        role="progressbar"
      >
        {value}%
      </div>
      <p className="mt-2">
        Remaining: €{remaining.toFixed(2)} / €{total.toFixed(2)}
      </p>
    </div>
  );
}
