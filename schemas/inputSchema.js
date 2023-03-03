const z = require("zod");

const inputSchema = z.array(
  z.object({
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    user_id: z.number(),
    user_type: z.enum(["natural", "juridical"]),
    type: z.enum(["cash_in", "cash_out"]),
    operation: z.object({
      amount: z.number(),
      currency: z.enum(["EUR"]),
    }),
  })
);

module.exports = inputSchema;
