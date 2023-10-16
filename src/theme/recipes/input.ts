import { defineRecipe } from "@pandacss/dev";

export const input = defineRecipe({
  className: "input",
  variants: {
    size: {
      xl: { p: "3", fontSize: "md" },
    },
  },
});
