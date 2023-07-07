import { writeFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const create = async () => {
  const content = "I am fresh and young";
  const pathToFile = path.resolve(process.cwd() + "/src/fs/files/fresh.txt");

  if (existsSync(pathToFile)) {
    throw new Error("File is already exists.");
  } else {
    try {
      await writeFile(pathToFile, content);
      console.log("File has been created.");
    } catch (err) {
      console.log("File hasnt been created.");
      console.error(err);
    }
  }
};

await create();
