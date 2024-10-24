import { ComponentPropsWithoutRef } from "react";

type buttonProps = ComponentPropsWithoutRef<"button">;

// To get other props with addition to native props
type buttonPropsWithAdditionalProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
  size: number;
};

// We can do above with interface like below

interface IButtonProps {
  type: "button" | "submit" | "reset";
  color: "red" | "blue";
}

interface ISuperButtonProps extends IButtonProps {
  size: number;
}

export default function Button6({
  autoFocus,
  type,
  ...restOfNativeParams
}: buttonProps) {
  return (
    <button type={type} autoFocus={autoFocus} {...restOfNativeParams}></button>
  );
}
