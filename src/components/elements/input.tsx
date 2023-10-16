import { ark } from "@ark-ui/react";
import type { ComponentPropsWithoutRef } from "react";
import { styled } from "@/panda/jsx";
import { input, type InputVariantProps } from "@/panda/recipes";

export type InputProps = InputVariantProps &
  ComponentPropsWithoutRef<typeof ark.input>;
export const Input = styled(ark.input, input);
