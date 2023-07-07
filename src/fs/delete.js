import { unlink } from "fs/promises";
import path from "path";
import { existsSync } from "fs";

const remove = async () => {
  const fileToRemove = path.resolve(
    process.cwd() + "/src/fs/files/fileToRemove.txt"
  );

  if (existsSync(fileToRemove)) {
    unlink(fileToRemove);
  } else {
    throw new Error("File to remove wasnt found.");
  }
};

await remove();
