const roundUp = require("./roundUp");

function calcCashInFee(amount, commissionRate, maxCommission) {
  return roundUp(Math.min((amount * commissionRate) / 100, maxCommission));
}

module.exports = calcCashInFee;
