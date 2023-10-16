import type { Config } from "@pandacss/dev";

export const conditions: Config["conditions"] = {
  extend: {
    notFirst: "&:not(:first-child)",
    notLast: "&:not(:last-child)",
  },
};
