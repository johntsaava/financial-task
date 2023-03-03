const feeCashInSchema = require("../schemas/feeCashInSchema");
const feeCashOutNaturalSchema = require("../schemas/feeCashOutNaturalSchema");
const feeCashOutLegalSchema = require("../schemas/feeCashOutLegalSchema");

async function getFeeCashIn() {
  const res = await fetch(process.env.API_URL_CASH_IN);
  const data = await res.json();

  const fee = feeCashInSchema.parse(data);

  return fee;
}

async function getFeeCashOutNatural() {
  const res = await fetch(process.env.API_URL_CASH_OUT_NATURAL);
  const data = await res.json();

  const fee = feeCashOutNaturalSchema.parse(data);

  return fee;
}

async function getFeeCashOutLegal() {
  const res = await fetch(process.env.API_URL_CASH_OUT_LEGAL);
  const data = await res.json();

  const fee = feeCashOutLegalSchema.parse(data);

  return fee;
}

async function getFeesConfig() {
  const data = await Promise.all([
    getFeeCashIn(),
    getFeeCashOutNatural(),
    getFeeCashOutLegal(),
  ]);

  return {
    cashIn: data[0],
    cashOutNatural: data[1],
    cashOutJuridical: data[2],
  };
}

module.exports = getFeesConfig;
