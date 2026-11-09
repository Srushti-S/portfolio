export type Tone = "ok" | "bad" | "warn" | "muted";

export interface RunLine {
  key: string;
  value: string;
  tone: Tone;
}

export interface Run {
  id: string;
  tab: string;
  command: string;
  lines: RunLine[];
  note: string;
}

export const runs: Run[] = [
  {
    id: "audit",
    tab: "Weekly audit",
    command: "audit run --weekly",
    lines: [
      { key: "snapshots", value: "6 business systems, read-only APIs", tone: "muted" },
      { key: "checks", value: "25 run every week, unattended", tone: "ok" },
      { key: "✗ customers", value: "customer master is 69% duplicates", tone: "bad" },
      { key: "✗ crm sync", value: "45 opportunities stalled", tone: "bad" },
      { key: "→ owners", value: "confirmed both in writing", tone: "muted" },
      { key: "✓ recovered", value: "$437K in stalled deals", tone: "ok" },
    ],
    note: "Korrus · NetSuite, HubSpot, Shopify, Stripe, Avalara, Arena PLM",
  },
  {
    id: "invoices",
    tab: "Invoice agent",
    command: "python main.py --batch data/invoices",
    lines: [
      { key: "INV-1001", value: "Widgets Inc. · $5,000.00 → PAID", tone: "ok" },
      { key: "INV-1002", value: "ordered 20, stock 5 → REJECTED", tone: "bad" },
      { key: "INV-1003", value: "Fraudster LLC · risk 100 → REJECTED", tone: "bad" },
      { key: "INV-1004", value: "second submission → DUPLICATE BLOCKED", tone: "warn" },
      { key: "batch", value: "8 of 20 paid · $196,310.80 held back", tone: "ok" },
      { key: "pytest", value: "56 passed, all offline", tone: "ok" },
    ],
    note: "The LLM reads invoices · plain Python decides payment",
  },
  {
    id: "planner",
    tab: "Course planner",
    command: "python evals.py",
    lines: [
      { key: "profiles", value: "24 synthetic students", tone: "muted" },
      { key: "catalog", value: "42 courses with prerequisites", tone: "muted" },
      { key: "violations", value: "0 prerequisite violations", tone: "ok" },
      { key: "credits", value: "98% average utilization", tone: "ok" },
      { key: "per plan", value: "19.5 courses on average", tone: "muted" },
      { key: "→ LLM plans", value: "validated server-side before students see them", tone: "muted" },
    ],
    note: "A deterministic planner takes over if the model fails",
  },
];
