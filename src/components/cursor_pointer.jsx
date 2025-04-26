'use client'
import { useEffect, useState } from "react";



export default function Cursor_Position(){
    const [mousePosition , setmousePosition] = useState({
        x: null,
        y: null
    })

    useEffect(() => {
        const handlemouseMove = (e) => {
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
    return(
        <>
            <div  
            style={{top: mousePosition.y - 4 +'px' ,left: mousePosition.x - 4 + 'px' ,pointerEvents: 'none'}}
            className="h-5 w-5 absolute bg-transparent z-2 border-[1px] border-black rounded-4xl">
            </div>
        </>
    )
}