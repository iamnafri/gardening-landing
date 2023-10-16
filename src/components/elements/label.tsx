import { ark } from "@ark-ui/react";
import type { ComponentPropsWithoutRef } from "react";
import { styled } from "@/panda/jsx";
import { label, type LabelVariantProps } from "@/panda/recipes";

export type LabelProps = LabelVariantProps &
  ComponentPropsWithoutRef<typeof ark.label>;
export const Label = styled(ark.label, label);
