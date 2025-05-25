import React from "react";
import img2 from "../../../public/images/img2.png";

export default function BACKGROUND(){
    return(
    <>
            <style jsx global>{`
            .bg-url {
              background-image: url(${img2.src});
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              opacity: 0.9;
              z-index: 0;
            }
          `}</style>
          
        <div className="flex bg-fixed z-0 flex-col bg-url opacity-90 justify-center items-center min-h-screen w-full">
                <div className="bg-amber-800 bg-fixed opacity-60  min-h-screen w-full"> </div>
        </div>

    </>
    )
}