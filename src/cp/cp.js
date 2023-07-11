import { fork } from "child_process";
import path from "path";

const spawnChildProcess = async (args) => {
  const fileToFork = path.resolve(process.cwd() + "/src/cp/files/script.js");
  const child = fork(fileToFork, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([2, 3, 4, 5, 6, 4393939, 43, "CLOSE"]);
