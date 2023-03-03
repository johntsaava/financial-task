const roundUp = require("./roundUp");

function calcCashOutLegalFee(amount, commissionRate, minCommission) {
  return roundUp(Math.max((amount * commissionRate) / 100, minCommission));
}

module.exports = calcCashOutLegalFee;
