import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  shadows: {
    accent: {
      value: "0 0 0 1px {colors.green.100}",
    },
  },
  colors: {
    border: {
      accent: {
        value: "{colors.green.500}",
      },
    },
  },
});
