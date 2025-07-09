type TLogEntry = {
  date: string;
  title: string;
  entries: Array<string>;
};

// Remove the dummy logs and start grinding
export const logs: Array<TLogEntry> = [
  {
    title: "Making Devlog and Blog site",
    date: "2025-07-08",
    entries: [
      "Made blog site using Astro — yet to add some minimal animations",
      "Finished daily log site",
    ],
  },
  {
    title: "Small Wins Add Up",
    date: "2025-07-07",
    entries: [
      "Fixed mobile layout issues in blog cards",
      "Added favicon and OG tags",
      "Deployed on Vercel — first draft live",
    ],
  },
  {
    title: "Learning RAG & Vector DBs",
    date: "2025-07-06",
    entries: [
      "Read about embeddings and cosine similarity",
      "Tested Pinecone with OpenAI — results looking promising",
      "Started prototyping Legal Rights Assistant",
    ],
  },
  {
    title: "System Cleanup & Refactors",
    date: "2025-07-05",
    entries: [
      "Removed unused components and CSS",
      "Improved SEO and Lighthouse score",
      "Switched to Tailwind v4 and purged old config",
    ],
  },
  {
    title: "Weekend Deep Work",
    date: "2025-07-04",
    entries: [
      "Refactored blog post layout to use Astro content collections",
      "Started integrating Markdown logging support",
      "Wrote utility to parse logs from folder structure",
    ],
  },
];
