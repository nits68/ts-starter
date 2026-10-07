import { input } from "./lib/input.ts";

async function main(): Promise<void> {
  const name: string = await input.question("What's your name? ");
  console.log(`Hello ${name}!`);
}

try {
  await main();
} catch (err) {
  console.error("Error occurred while running the program: ", err);
  process.exitCode = 1;
} finally {
  input.close();
}
