const fs = require("fs");

// Check if a command-line argument is provided
if (process.argv.length < 3) {
  console.error("Usage: node app.js <input.json>");
  process.exit(1);
}

// Get the filename from the command-line argument
const filename = process.argv[2];

// Read the contents of the JSON file
fs.readFile(filename, "utf8", (readErr, data) => {
  if (readErr) {
    console.error(`Error reading file: ${readErr}`);
    process.exit(1);
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Log the contents to the console
    console.log(jsonData);
  } catch (parseErr) {
    console.error(`Error parsing JSON data: ${parseErr}`);
    process.exit(1);
  }
});
