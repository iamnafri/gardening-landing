import { ark, type HTMLArkProps } from "@ark-ui/react";
import { styled } from "@/panda/jsx";
import { button, type ButtonVariantProps } from "@/panda/recipes";

export type ButtonProps = ButtonVariantProps & HTMLArkProps<"button">;
export const Button = styled(ark.button, button);
