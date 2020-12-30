export const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
export const AIRTABLE_ID = process.env.AIRTABLE_ID;

export const MODES = [
  {
    name: "Scott",
    lookupTable: {
      table: "CARROT LOOKUP",
      fields: ["POT", "GENOTYPE"],
      lookupKey: "POT"
    },
    table: "SCOTT BREEDING"
  },
  {
    name: "Carrots",
    lookupTable: {
      table: "CARROT LOOKUP",
      fields: ["POT", "GENOTYPE"],
      lookupKey: "POT"
    },
    table: "CARROT BREEDING"
  },
  {
    name: "Beets",
    lookupTable: {
      table: "BEET LOOKUP",
      fields: ["POT", "GENOTYPE"],
      lookupKey: "POT"
    },
    table: "BEET BREEDING"
  }
];

export const CROSSES = [1, 2, 3, 4];

export const ERROR_NOT_FOUND_IN_LOOKUP =
  "Pot number not found in lookup table:";
