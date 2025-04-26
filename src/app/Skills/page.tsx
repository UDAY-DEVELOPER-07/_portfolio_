"use client";
import Stacks from "@/components/stacks";
import img2 from "../../../public/images/img2.png";

export default function Skills() {
    return (
        <>
        <style jsx global>{`
            .bg-url {
              background-image: url(${img2.src});
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              opacity: 0.9;
              z-index: -1;
            }
          `}</style>
            <div className="flex  flex-col bg-url opacity-90 justify-center items-center min-h-screen w-full py-10 md:py-20">
                <div className="z-10 flex flex-col justify-center backdrop-blur-2xl rounded-2xl shadow-2xl items-center w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%]h-autobackdrop-blur-3xl border border-[#FFF7E5]rounded-2xl p-6 md:p-8 lg:p-10">

                    <h1 className="text-[#FFF7E5] text-shadow-lg/30 mt-6 mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold">
                        my TeCH STaCK
                    </h1>

                    <h3 className="font-michroma-rise mt-1 mb-8 shadow-2xl text-shadow-white text-sm sm:text-base md:text-lg lg:text-xl text-amber-200 text-center px-4" >
                        "Stacks inspire dreams; code builds reality."
                    </h3>

                    <div className="flex flex-wrap justify-center items-center w-full gap-4 sm:gap-6">
                        <Stacks />
                    </div>
                </div>
            </div>

        </>
    );
}
