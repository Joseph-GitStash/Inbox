import React from "react";
import { Button } from "../ui/button";

interface WideButtonProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  cta?: boolean;
}

const WideButton = ({ cta = false, ...props }: WideButtonProps) => {
  return (
    <Button
      className={`flex ${
        cta
          ? "rounded-full gap-2 flex-1"
          : "rounded-xl gap-3 w-full justify-start"
      } ${props.variant === "secondary" ? "bg-gray-200" : "bg-[red] text-white"}`}
      {...props}
    />
  );
};

export default WideButton;
