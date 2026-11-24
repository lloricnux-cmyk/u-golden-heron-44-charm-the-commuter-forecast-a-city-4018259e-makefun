// Charm the Commuter: Forecast a City That Isn't
// Writes one line of weather forecast (<=140 chars) for the imaginary city
// of Wobbleford to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Wobbleford: light drizzle of lost umbrellas until 8am — grab one on your way, it's probably yours.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
