import { ark } from "@ark-ui/react";
import type { ComponentPropsWithoutRef } from "react";
import { styled } from "@/panda/jsx";
import { textarea, type TextareaVariantProps } from "@/panda/recipes";

export type TextareaProps = TextareaVariantProps &
  ComponentPropsWithoutRef<typeof ark.textarea>;
export const Textarea = styled(ark.textarea, textarea);
