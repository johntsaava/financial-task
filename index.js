require("dotenv").config();
const calcFee = require("./helpers/calcFee");
const getFeesConfig = require("./helpers/getFeesConfig");
const getInputData = require("./helpers/getInputData");

async function main() {
  const [{ cashIn, cashOutNatural, cashOutJuridical }, inputData] =
    await Promise.all([getFeesConfig(), getInputData()]);

  inputData
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .forEach(({ date, user_id, user_type, type, operation: { amount } }) => {
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
    });
}

main();
