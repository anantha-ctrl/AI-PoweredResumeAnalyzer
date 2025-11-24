import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const MOCK_ANALYSIS_STEPS = [
  "Initializing corporate synergy...",
  "Scanning for 'passionate' usage...",
  "Calculating existential worth...",
  "Leveraging core competencies...",
  "Judging font choices...",
  "Aligning with Q4 OKRs...",
  "Generating buzzwords...",
];

export const MOCK_RESULTS = {
  score: 64,
  summary: "It's giving 'unpaid intern' energy, but we can fix it.",
  roast: "You used the word 'helped' 12 times. Unless you're a Boy Scout, swap it for 'spearheaded' or 'orchestrated' to sound expensive.",
  keywords_missing: ["Cross-functional", "Stakeholder Management", "Scalability", "Paradigm Shift"],
  formatting_issues: [
    "Margins are too wide (fear of commitment?)",
    "Inconsistent bullet points",
    "Photo included (this isn't Tinder)"
  ]
};
