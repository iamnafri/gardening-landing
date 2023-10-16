import { avatarAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

export const avatar = defineSlotRecipe({
  className: "avatar",
  slots: avatarAnatomy.keys(),
  jsx: ["Avatar", /Avatar\.+/],
  base: {
    root: {
      borderRadius: "full",
      borderWidth: "1px",
      flexShrink: 0,
    },
  },
});
