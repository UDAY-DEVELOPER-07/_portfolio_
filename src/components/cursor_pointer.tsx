'use client'
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


interface SpinnerProps {
  className?: string;
  outerSize?: string;
  childSize?: string;
}
export default function Cursor_Pointer({
  className,
  outerSize,
  childSize,
}: SpinnerProps) {
  const [mousePosition , setmousePosition] = useState<{x: number , y: number}>({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const handlemouseMove = (e: MouseEvent) => {
        setmousePosition({
            x: e.clientX,
            y: e.clientY
        });
    };
    window.addEventListener("mousemove", handlemouseMove)
    return ()=> {
        window.removeEventListener("mousemove",handlemouseMove)
    };
},[]);
  return (
    <div
    style={{top: mousePosition.y  +'px' ,left: mousePosition.x  + 'px' ,pointerEvents: 'none'}}
      className={cn(
        "m-2 h-5 w-5 z-19 absolute animate-spin items-center justify-center rounded-full bg-gradient-to-bl from-yellow-500 to-amber-600 p-0.5",
        className,
        outerSize,
      )}
    >
      <div className={cn("h-3 w-3 rounded-full bg-transparent border-amber-50 border-1", childSize)} />
    </div>
  );
}

//"h-5 w-5 absolute bg-transparent z-2 border-[1px] border-black rounded-4xl"


