const fs = require("fs/promises");

const inputSchema = require("../schemas/inputSchema");

async function getInputData(filename) {
  const data = await fs.readFile(filename, "utf8");
  const parsedData = JSON.parse(data);
  const validatedData = inputSchema.parse(parsedData);

  return validatedData;
}

module.exports = getInputData;
