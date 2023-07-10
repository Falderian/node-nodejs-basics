import { createReadStream } from "fs";
import { stdout } from "process";
import path from "path";

const read = async () => {
  const fileToRead = path.resolve(
    process.cwd() + "/src/streams/files/fileToRead.txt"
  );

  createReadStream(fileToRead).on("data", (chunk) => {
    stdout.write(chunk);
  });
};

await read();
