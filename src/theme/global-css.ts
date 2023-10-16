import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  body: {
    background: "bg.canvas",
    color: "neutral.800",
    fontFamily: "var(--font-body), sans-serif",
    fontWeight: "medium",
    _dark: {
      colorScheme: "dark",
    },
  },
  "h1, h2, h3, h4, h5, h6": {
    color: "green.950",
    fontFamily: "var(--font-heading), sans-serif",
  },
});
