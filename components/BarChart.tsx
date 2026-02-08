import { BarDatum } from "@/lib/data";

export default function BarChart({ data }: { data: BarDatum[] }) {
  const max = Math.max(...data.map((item) => item.value));
  return (
    <div className="bar-chart">
      {data.map((item) => (
        <div className="bar" key={item.label}>
          <div className="bar-fill" style={{ height: `${(item.value / max) * 100}%` }} />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
