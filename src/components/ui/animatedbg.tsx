import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
interface MovingGradientProps extends ComponentPropsWithoutRef<"div"> {
    animated?: boolean;
    gradientClassName?: string;
  }
  
  export function DuneGradient({
    children,
    className,
    animated = true,
    gradientClassName,
    ...props
  }: MovingGradientProps) {
    const backgroundClassName = "pointer-events-none absolute h-full w-full";
    return (
      <div {...props} className={cn("relative overflow-hidden bg-white-950", className)}>
        <div
          className={cn(
            "bg-size bg-gradient-to-r from-amber-300 from-20% via-yellow-50 via-50% to-yellow-700 to-80% opacity-20",
            {
              [backgroundClassName]: true,
              "animate-bg-position bg-[length:300%_auto]": animated,
            },
            gradientClassName,
          )}
        />
        <div className={cn(backgroundClassName, "z-1 blur-xl")} />
        {children}
      </div>
    );
  }