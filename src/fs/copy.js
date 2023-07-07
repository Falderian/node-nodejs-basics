import path from "path";
import { cp } from "fs/promises";
import { existsSync } from "fs";

const copy = async () => {
  const folderToCopy = path.resolve(process.cwd() + "/src/fs/files");
  const destinationFolder = path.resolve(process.cwd() + "/src/fs/files_copy");

  if (existsSync(destinationFolder)) {
    throw new Error("Folder is already exists. ");
  } else {
    cp(folderToCopy, destinationFolder, { recursive: true }, (err) => {
      console.error(err);
    });
    console.log("Folder was copied.");
  }
};

await copy();
