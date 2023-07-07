import path from "path";
import { readdir } from "fs/promises";
import { existsSync } from "fs";

const list = async () => {
  const folderToRead = path.resolve(process.cwd() + "/src/fs/files");
  if (!existsSync(folderToRead))
    throw new Error("Folder to read doesnt exists");
  try {
    readdir(folderToRead, (err, files) => files).then((files) =>
      console.log(files)
    );
  } catch (error) {
    console.log(error);
  }
};

await list();
