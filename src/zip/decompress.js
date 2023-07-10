import path from "path";
import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const decompress = async () => {
  const fileToDecompress = path.resolve(
    process.cwd() + "/src/zip/files/archive.gz"
  );

  const decompressedFile = path.resolve(
    process.cwd() + "/src/zip/files/fileToCompress.txt"
  );

  createReadStream(fileToDecompress)
    .pipe(createUnzip())
    .pipe(createWriteStream(decompressedFile));
};

await decompress();
