import { Transform } from "stream";
import { stdout, stdin } from "process";

const transform = async () => {
  const transformData = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });

  stdin.pipe(transformData).pipe(stdout);
};

await transform();
