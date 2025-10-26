export default function Progress({
  value,
  primary = true,
}: {
  value: number;
  primary?: boolean;
}) {
  return (
    <div
      className={`radial-progress bg-${
        primary ? "primary" : "secondary"
      } text-primary-content border-primary border-4 text-xl`}
      style={{ "--value": value } as React.CSSProperties}
      aria-valuenow={70}
      role="progressbar"
    >
      {value}%
    </div>
  );
}
