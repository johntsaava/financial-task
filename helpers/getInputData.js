require("dotenv").config();
const fs = require("fs/promises");

const inputSchema = require("../schemas/inputSchema");

async function getInputData() {
  // Check if a command-line argument is provided
  if (process.argv.length < 3) {
    console.error("Usage: node app.js <input.json>");
    process.exit(1);
  }

  // Get the filename from the command-line argument
  const filename = process.argv[2];

  const data = await fs.readFile(filename, "utf8");
  const parsedData = JSON.parse(data);
  const validatedData = inputSchema.parse(parsedData);

  return validatedData;
}

module.exports = getInputData;
