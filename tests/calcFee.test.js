require("dotenv").config();
const calcFee = require("../helpers/calcFee");
const getInputData = require("../helpers/getInputData");

const cashIn = {
  percents: 0.03,
  max: { amount: 5, currency: "EUR" },
};

const cashOutNatural = {
  percents: 0.3,
  week_limit: { amount: 1000, currency: "EUR" },
};

const cashOutJuridical = {
  percents: 0.3,
  min: { amount: 0.5, currency: "EUR" },
};

describe("calculate commission fee module", () => {
  test('from "input.json"', async () => {
    const inputData = await getInputData("input.json");

    const commissions = inputData.map(
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

        return commission.toFixed(2);
      }
    );
    expect(commissions).toStrictEqual([
      "0.06",
      "0.90",
      "87.00",
      "3.00",
      "0.30",
      "0.30",
      "5.00",
      "0.00",
      "0.00",
    ]);
  });
});
