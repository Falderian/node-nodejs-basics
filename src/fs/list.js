import path from "path";
import { readdir } from "fs/promises";

const list = async () => {
  const folderToRead = path.resolve(process.cwd() + "/src/fs/files");
  try {
    readdir(folderToRead, (err, files) => console.log(files || err));
  } catch (error) {
    console.log(error);
  }
};

await list();
