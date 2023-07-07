import { createReadStream } from "fs";
import path from "path";
import { readFile } from "fs/promises";

const read = async () => {
  const fileToRead = path.resolve(
    process.cwd() + "/src/streams/files/fileToRead.txt"
  );
};

await read();
