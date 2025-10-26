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
        className="radial-progress bg-primary text-primary-content border-primary border-4 text-2xl"
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
        Remaining: ${remaining.toFixed(2)} / ${total.toFixed(2)}
      </p>
    </div>
  );
}
