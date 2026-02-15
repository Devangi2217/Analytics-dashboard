"use client";

import BarChart from "@/components/BarChart";
import StatCard from "@/components/StatCard";
import { activityFeed, kpis, revenueTrend, topProducts, trafficSources } from "@/lib/data";
import { formatCurrency, formatPercent } from "@/lib/format";

function downloadTextFile(filename: string, content: string, type = "text/plain") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function buildCsvReport() {
  const lines: string[] = [];

  lines.push("Section,KPI,Value,Delta,Note");
  kpis.forEach((kpi) => {
    const value = kpi.format === "currency" ? formatCurrency(kpi.value) : kpi.value.toLocaleString();
    lines.push(`KPI,${kpi.label},${value},${kpi.delta},${kpi.note}`);
  });

  lines.push("");
  lines.push("Section,Revenue Velocity (Last 7 Days)");
  lines.push("Day,Revenue");
  revenueTrend.forEach((point) => {
    lines.push(`${point.label},${formatCurrency(point.value)}`);
  });

  lines.push("");
  lines.push("Section,Traffic Mix");
  lines.push("Source,Share");
  trafficSources.forEach((source) => {
    lines.push(`${source.label},${formatPercent(source.share / 100)}`);
  });

  lines.push("");
  lines.push("Section,Top Products");
  lines.push("Product,Category,Revenue,Conversion");
  topProducts.forEach((product) => {
    lines.push(`${product.name},${product.category},${formatCurrency(product.revenue)},${formatPercent(product.conversion)}`);
  });

  lines.push("");
  lines.push("Section,Release Activity");
  lines.push("Title,Status,Time");
  activityFeed.forEach((item) => {
    lines.push(`${item.title},${item.status},${item.time}`);
  });

  return lines.join("\n");
}

export default function Home() {
  return (
    <main>
      <header className="header">
        <div>
          <span className="tag">Realtime Insights</span>
          <h1>Next.js Analytics Dashboard</h1>
          <p>
            Monitor revenue, traffic quality, and product performance from a single,
            executive-ready command center.
          </p>
        </div>
        <div className="header-actions">
          <button className="button primary" type="button" onClick={() => downloadTextFile("analytics-report.csv", buildCsvReport(), "text/csv")}>Export Report</button>
          <a className="button ghost" href="#">View API Status</a>
        </div>
      </header>

      <section className="grid kpis">
        {kpis.map((kpi) => (
          <StatCard
            key={kpi.label}
            label={kpi.label}
            value={kpi.format === "currency" ? formatCurrency(kpi.value) : kpi.value.toLocaleString()}
            delta={kpi.delta}
            note={kpi.note}
            trend={kpi.trend}
          />
        ))}
      </section>

      <section className="grid main">
        <div className="card">
          <div className="section-header">
            <div>
              <h2>Revenue Velocity</h2>
              <p>Daily revenue snapshots across the last 7 days.</p>
            </div>
            <span className="badge">+18% WoW</span>
          </div>
          <BarChart data={revenueTrend} />
        </div>
        <div className="card">
          <div className="section-header">
            <div>
              <h2>Traffic Mix</h2>
              <p>Where high-intent visitors are coming from.</p>
            </div>
          </div>
          <div className="traffic-list">
            {trafficSources.map((source) => (
              <div className="traffic-item" key={source.label}>
                <span>{source.label}</span>
                <div className="progress">
                  <span style={{ width: `${source.share}%` }} />
                </div>
                <strong>{formatPercent(source.share / 100)}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid main" style={{ marginTop: "24px" }}>
        <div className="card">
          <div className="section-header">
            <div>
              <h2>Top Products</h2>
              <p>Highest earning items with conversion signals.</p>
            </div>
          </div>
          <div className="table">
            <div className="table-row header">
              <span>Product</span>
              <span>Revenue</span>
              <span>Conversion</span>
            </div>
            {topProducts.map((product) => (
              <div className="table-row" key={product.name}>
                <div>
                  <strong>{product.name}</strong>
                  <p>{product.category}</p>
                </div>
                <strong>{formatCurrency(product.revenue)}</strong>
                <strong>{formatPercent(product.conversion)}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="section-header">
            <div>
              <h2>Release Activity</h2>
              <p>Latest data platform updates and experiments.</p>
            </div>
          </div>
          <div className="activity">
            {activityFeed.map((item) => (
              <div className="activity-item" key={item.title}>
                <strong>{item.title}</strong>
                <span className="badge">{item.status}</span>
                <span className="time">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}



