import { Worker, parentPort } from "worker_threads";
import { cpus } from "os";
import path from "path";

const performCalculations = async () => {
  let increment = 10;

  const workerFile = path.resolve(process.cwd() + "/src/wt/worker.js");

  cpus().forEach(() => {
    const worker = new Worker(workerFile, { workerData: increment });

    worker.on("message", (msg) => console.log(msg));
    increment++;
  });
};

await performCalculations();
