require("dotenv").config();
const calcFee = require("./helpers/calcFee");
const getFeesConfig = require("./helpers/getFeesConfig");
const getInputData = require("./helpers/getInputData");

// Check if a command-line argument is provided
if (process.argv.length < 3) {
  console.error("Usage: node app.js <input.json>");
  process.exit(1);
}

// Get the filename from the command-line argument
const filename = process.argv[2];

async function main() {
  const [{ cashIn, cashOutNatural, cashOutJuridical }, inputData] =
    await Promise.all([getFeesConfig(), getInputData(filename)]);

  inputData.forEach(
    ({ date, user_id, user_type, type, operation: { amount } }) => {
      const commission = calcFee(
        type,
        user_type,
        amount,
        date,
        user_id,
        inputData,
        cashIn,
        cashOutNatural,
        cashOutJuridical
      );

      console.log(commission.toFixed(2));
    }
  );
}

main();
