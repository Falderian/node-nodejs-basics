const username = process.argv
  .find((argument) => argument.includes("--username"))
  .split("=")[1];

console.log("Welcome to the File Manager, " + username + "!");
