const roundUp = require("./roundUp");

function calcFee(amount, commissionRate) {
  return roundUp((amount * commissionRate) / 100);
}

function calcCashOutNaturalFee(
  amount,
  cashOutAmountForWeek,
  commissionRate,
  weekLimit
) {
  if (cashOutAmountForWeek + amount <= weekLimit) {
    return 0;
  }

  if (cashOutAmountForWeek < weekLimit) {
    return calcFee(amount - (weekLimit - cashOutAmountForWeek), commissionRate);
  }

  return calcFee(amount, commissionRate);
}

module.exports = calcCashOutNaturalFee;
