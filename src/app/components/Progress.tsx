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
        className="radial-progress bg-pink-700 text-base-100 border-pink-300 border-4"
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
        Remaining: €{Math.max(0, Number(remaining.toFixed(2)))} / €
        {Number(total.toFixed(2))}
      </p>
      {remaining < 0 && (
        <p className="mt-2">
          Overbudget: €{Math.abs(Number(remaining.toFixed(2)))}
        </p>
      )}
    </div>
  );
}
