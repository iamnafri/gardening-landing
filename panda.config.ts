import { conditions } from "@/theme/conditions";
import { globalCss } from "@/theme/global-css";
import { recipes } from "@/theme/recipes";
import { semanticTokens } from "@/theme/semantic-tokens";
import { tokens } from "@/theme/tokens";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  presets: ["@pandacss/preset-base", "@park-ui/presets"],
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],
  exclude: [],
  theme: {
    extend: {
      recipes,
      semanticTokens,
      tokens,
    },
  },
  globalCss,
  conditions,
  jsxFramework: "react",
  outdir: "src/panda",
});
