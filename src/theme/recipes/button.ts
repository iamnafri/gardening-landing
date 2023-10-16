import { defineRecipe } from "@pandacss/dev";

export const button = defineRecipe({
  className: "button",
  base: {
    fontFamily: "var(--font-heading), sans-serif",
    alignItems: "center",
    appearance: "none",
    borderRadius: "full",
    cursor: "pointer",
    display: "inline-flex",
    fontWeight: "semibold",
    minWidth: "0",
    justifyContent: "center",
    outline: "none",
    position: "relative",
    transitionDuration: "normal",
    transitionProperty: "background, border-color, color, box-shadow",
    transitionTimingFunction: "default",
    userSelect: "none",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    _focusVisible: {
      outlineOffset: "3px",
      outline: "2px solid",
      outlineColor: "green.700",
    },
    _focus: {
      outlineOffset: "3px",
      outline: "2px solid",
      outlineColor: "green.700",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "lg",
  },
  variants: {
    variant: {
      primary: {
        background: "green.500",
        color: "white",
        _hover: {
          background: "green.600",
        },
      },
      secondary: {
        background: "green.950",
        color: "white",
        _hover: {
          background: "green.900",
        },
      },
      tertiary: {
        background: "white",
        color: "green.500",
        _hover: {
          background: "neutral.200",
        },
      },
      link: {
        color: "white",
        _hover: {
          color: "green.500",
        },
        _active: {
          color: "green.500",
        },
      },
    },
    size: {
      lg: {
        minW: "40",
      },
      xl: {
        minW: "40",
      },
    },
  },
});
