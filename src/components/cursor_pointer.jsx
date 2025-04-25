'use client'
import { useEffect, useState } from "react";



export default function Cursor_Positon(){
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
            style={{top: mousePosition.y - 4 +'px' ,left: mousePosition.x - 4 + 'px'}}
            className="h-4 w-4 absolute bg-transparent border-[.5px] shadow-2xl shadow-amber-300 border-amber-100 rounded-4xl">
            </div>
        </>
    )
}