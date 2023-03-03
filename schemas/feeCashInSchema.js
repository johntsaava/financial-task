const z = require("zod");

const feeCashInSchema = z.object({
  percents: z.number(),
  max: z.object({ amount: z.number(), currency: z.enum(["EUR"]) }),
});

module.exports = feeCashInSchema;
