import path from "path";
import { createHash } from "crypto";
import { readFile } from "fs/promises";

const calculateHash = async () => {
  const fileToCalc = path.resolve(
    process.cwd() + "/src/hash/files/fileToCalculateHashFor.txt"
  );

  const file = await readFile(fileToCalc);
  const hash = createHash("sha256");

  console.log(hash.update(file).digest("hex"));
};

await calculateHash();
