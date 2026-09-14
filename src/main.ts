import { input } from "./lib/input.ts";

async function main(): Promise<void> {
  console.log("Hello World!");
}

try {
  await main();
} catch (err) {
  console.error("Error occurred while running the program:", err);
  process.exitCode = 1;
} finally {
  input.close();
}
