const isSameWeek = require("date-fns/isSameWeek");

function calcCashOutAmountForWeek(date, user_id, inputData) {
  return inputData
    .filter((item) => {
      const currentDate = new Date(date);
      const itemDate = new Date(item.date);

      return (
        item.user_id === user_id &&
        item.type === "cash_out" &&
        item.user_type === "natural" &&
        itemDate.getDate() < currentDate.getDate() &&
        isSameWeek(currentDate, itemDate, { weekStartsOn: 1 })
      );
    })
    .reduce((acc, item) => acc + item.operation.amount, 0);
}

module.exports = calcCashOutAmountForWeek;
