import path from "path";
import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const compress = async () => {
  const fileToCompress = path.resolve(
    process.cwd() + "/src/zip/files/fileToCompress.txt"
  );
  const compressedFile = path.resolve(
    process.cwd() + "/src/zip/files/archive.gz"
  );

  createReadStream(fileToCompress)
    .pipe(createGzip())
    .pipe(createWriteStream(compressedFile))
    .on("finish", () => console.log("File has been compressed."));
};

await compress();
