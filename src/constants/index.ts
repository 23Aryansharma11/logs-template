import { logs } from "../logs";

export const heatmapData: Record<string, number> = Object.fromEntries(
  logs.map((log) => [log.date, log.entries.length]),
);
