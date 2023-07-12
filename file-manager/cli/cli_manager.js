import path from "path";
import { homedir } from "os";
import { chdir } from "process";
import { readdir } from "fs/promises";
import { createReadStream, createWriteStream, rename, unlink } from "fs";

chdir(homedir());

process.stdin.on("data", (data) => {
  commandExecutor(data.toString().trim());
  console.log("You are currently working in " + process.cwd());
});

console.log("Waiting for your command:");

const commandExecutor = (cmd) => {
  if (cmd === "up") chdir("../");

  if (cmd.startsWith("cd ")) {
    const path = cmd.slice(3);
    try {
      chdir(path);
    } catch (error) {
      console.error("There is no path");
    }
  }

  if (cmd === "ls") {
    readdir(process.cwd(), (err, files) => files).then((files) => {
      const filesWithExt = files.map((file) => {
        return { file, type: path.extname(file) ? "file" : "directory" };
      });
      console.table(filesWithExt);
    });
  }

  if (cmd.startsWith("cat ")) {
    const fileToRead = path.resolve(process.cwd() + cmd.slice(4));
    createReadStream(fileToRead).on("data", (data) =>
      console.log(data.toString())
    );
  }

  if (cmd.startsWith("add ")) createWriteStream(cmd.slice(4));

  if (cmd.startsWith("rn ")) {
    const [oldName, newName] = cmd.slice(3).split(" ");
    rename(process.cwd() + oldName, newName, (err) => {
      if (err) console.error;
      else console.log("File has been renamed succesfully.");
    });
  }

  if (cmd.startsWith("cp ")) {
    const [fileToCopy, newFile] = cmd.slice(3).split(" ");
    const writeStream = createWriteStream(process.cwd() + "/" + newFile);
    createReadStream(process.cwd() + "/" + fileToCopy).on("data", (data) =>
      writeStream.write(data)
    );
  }

  if (cmd.startsWith("mv ")) {
    const [fileToCopy, newFile] = cmd.slice(3).split(" ");
    const writeStream = createWriteStream(process.cwd() + "/" + newFile);
    createReadStream(process.cwd() + "/" + fileToCopy).on("data", (data) =>
      writeStream.write(data)
    );
    unlink(process.cwd() + "/" + fileToCopy, (err) => {
      if (err) console.error;
      else console.log("File has been moved succesfully.");
    });
  }
};
