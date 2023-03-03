const z = require("zod");

const feeCashOutNaturalSchema = z.object({
  percents: z.number(),
  week_limit: z.object({ amount: z.number(), currency: z.enum(["EUR"]) }),
});

module.exports = feeCashOutNaturalSchema;
