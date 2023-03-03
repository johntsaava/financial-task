const z = require("zod");

const feeCashOutLegalSchema = z.object({
  percents: z.number(),
  min: z.object({ amount: z.number(), currency: z.enum(["EUR"]) }),
});

module.exports = feeCashOutLegalSchema;
