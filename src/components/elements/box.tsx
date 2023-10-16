// import { styled } from "@/panda/jsx";
// import * as React from "react";

// interface BoxProps<T extends React.ElementType> {
//   as?: T;
//   children?: React.ReactNode;
// }

// export function Box<T extends React.ElementType = "button">({
//   as = "div",
//   ...props
// }: BoxProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof BoxProps<T>>) {
//   const Component = styled(as);

//   return <Component {...props} />;
// }

import { styled, type HTMLStyledProps } from "@/panda/jsx";
import * as React from "react";

type As = React.ElementType;

export type BoxProps = {
  as?: As;
} & HTMLStyledProps<As>;

export const Box = (props: BoxProps) => {
  const { as = "div", ...rest } = props;
  const Component = styled(as);

  return <Component {...rest} />;
};
