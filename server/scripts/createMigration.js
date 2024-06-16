const readlineSync = require("readline-sync");
const { exec } = require("node:child_process");
const migrationName = readlineSync.question("Enter migration name: ");

const command = `typeorm migration:create ./src/database/migrations/${migrationName}`;

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }
  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }
  console.log(`Success: ${stdout}`);
});
