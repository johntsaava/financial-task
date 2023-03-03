const calcCashInFee = require("./calcCashInFee");
const calcCashOutAmountForWeek = require("./calcCashOutAmountForWeek");
const calcCashOutLegalFee = require("./calcCashOutLegalFee");
const calcCashOutNaturalFee = require("./calcCashOutNaturalFee");

function calcFee(
  type,
  user_type,
  amount,
  date,
  user_id,
  inputData,
  cashIn,
  cashOutNatural,
  cashOutJuridical
) {
  let commission = 0;

  switch (`${type}__${user_type}`) {
    case "cash_in__natural":
    case "cash_in__juridical": {
      commission = calcCashInFee(amount, cashIn.percents, cashIn.max.amount);
      break;
    }
    case "cash_out__natural": {
      const cashOutAmountForWeek = calcCashOutAmountForWeek(
        date,
        user_id,
        inputData
      );

      commission = calcCashOutNaturalFee(
        amount,
        cashOutAmountForWeek,
        cashOutNatural.percents,
        cashOutNatural.week_limit.amount
      );
      break;
    }
    case "cash_out__juridical": {
      commission = calcCashOutLegalFee(
        amount,
        cashOutJuridical.percents,
        cashOutJuridical.min.amount
      );
      break;
    }
    default: {
      console.error("Invalid operation type");
      break;
    }
  }

  return commission;
}

module.exports = calcFee;
