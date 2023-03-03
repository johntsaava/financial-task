const z = require("zod");

const urlSchema = z.string().url();

module.exports = urlSchema;
