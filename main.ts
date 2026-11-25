import { mkdirSync, writeFileSync } from "node:fs";

// Pigeon Pitch, One Line — the elevator pitch a city pigeon gives investors.
// Mechanism: a concrete ad deal ($500 logo on the chest) with a double punch —
// 4,000 pigeons see it daily, none can read, and not one has ever churned.
// The retention line is the closer: the metric VCs care about, delivered by a bird.
const line =
  "For just $500, your logo goes on my chest: 4,000 pigeons see it every day, none of them can read, and not one has ever churned. That's the retention VCs dream about.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
console.log(`chars: ${line.length}`);
