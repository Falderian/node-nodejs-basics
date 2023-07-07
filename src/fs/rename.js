import path from "path";
import { rename } from "fs/promises";
import { existsSync } from "fs";

const renameFile = async () => {
  const fileToRename = path.resolve(
    process.cwd() + "/src/fs/files/wrongFilename.txt"
  );
  const renamedFile = path.resolve(
    process.cwd() + "/src/fs/files/properFilename.md"
  );

  if (existsSync(fileToRename)) {
    rename(fileToRename, renamedFile, (err) => {
      if (err) console.error(err);
    });
  } else {
    throw new Error("File to rename wasnt found.");
  }
};

await renameFile();
