type StatCardProps = {
  label: string;
  value: string;
  delta: number;
  note: string;
  trend: "up" | "down" | "flat";
};

export default function StatCard({ label, value, delta, note, trend }: StatCardProps) {
  const trendClass = trend === "up" ? "up" : trend === "down" ? "down" : "flat";
  const sign = delta > 0 ? "+" : "";

  return (
    <div className="card stat-card">
      <span className="label">{label}</span>
      <span className="value">{value}</span>
      <span className={`delta ${trendClass}`}>
        {sign}
        {delta}% {note}
      </span>
    </div>
  );
}
