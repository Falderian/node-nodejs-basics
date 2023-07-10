import { createWriteStream } from "fs";
import { stdin } from "process";
import path from "path";

const write = async () => {
  const fileToWrite = path.resolve(
    process.cwd() + "/src/streams/files/fileToWrite.txt"
  );

  const stream = createWriteStream(fileToWrite);

  console.log("Type your text here:");

  stdin.on("data", (data) => {
    stream.write(data);
  });
};

await write();
