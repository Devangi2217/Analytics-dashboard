export type BarDatum = {
  label: string;
  value: number;
};

export const kpis = [
  {
    label: "Monthly Revenue",
    value: 48290,
    delta: 12.4,
    note: "vs last month",
    trend: "up" as const,
    format: "currency" as const,
  },
  {
    label: "Active Subscriptions",
    value: 12840,
    delta: 6.1,
    note: "last 30 days",
    trend: "up" as const,
  },
  {
    label: "Churn Risk",
    value: 2.4,
    delta: -1.2,
    note: "week over week",
    trend: "down" as const,
  },
  {
    label: "Net Promoter Score",
    value: 58,
    delta: 3.3,
    note: "this quarter",
    trend: "up" as const,
  },
];

export const revenueTrend: BarDatum[] = [
  { label: "Mon", value: 48 },
  { label: "Tue", value: 62 },
  { label: "Wed", value: 58 },
  { label: "Thu", value: 71 },
  { label: "Fri", value: 66 },
  { label: "Sat", value: 74 },
  { label: "Sun", value: 69 },
];

export const trafficSources = [
  { label: "Organic Search", share: 38 },
  { label: "Partner Referrals", share: 26 },
  { label: "Paid Social", share: 18 },
  { label: "Email Journeys", share: 12 },
  { label: "Community", share: 6 },
];

export const topProducts = [
  { name: "Pulse Analytics", category: "Enterprise", revenue: 18450, conversion: 0.32 },
  { name: "Atlas Workflows", category: "Professional", revenue: 15320, conversion: 0.28 },
  { name: "Nova Sync", category: "Growth", revenue: 12680, conversion: 0.24 },
];

export const activityFeed = [
  { title: "New anomaly alert pipeline deployed", status: "Live", time: "2 hours ago" },
  { title: "Updated pricing experiment results", status: "Review", time: "Yesterday" },
  { title: "Weekly data quality report", status: "Sent", time: "2 days ago" },
];
