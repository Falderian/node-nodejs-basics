import path from "path";
import { readFile } from "fs/promises";
import { existsSync } from "fs";

const read = async () => {
  const fileToRead = path.resolve(
    process.cwd() + "/src/fs/files/fileToRead.txt"
  );

  if (!existsSync(fileToRead)) throw new Error("There is no file to read.");

  readFile(fileToRead, (err, data) => {
    if (err) throw new Error("FS operation failed");
    return data;
  }).then((data) => console.log(data.toString()));
};

await read();
