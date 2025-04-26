"use client";
import Stacks from "@/components/stacks";
import Skillsbg from "../../../public/images/Skillsbg.jpg";

export default function Skills() {
    return (
        <>
            <style jsx global>{`
                .bg-url {
                    background-image: url(${Skillsbg.src});
                    background-size: cover;
                    background-position: center;
                }
          `}</style>

            <div className="flex flex-col bg-url opacity-90 justify-center items-center text h-screen w-full">
                <div className="flex pt-8 sm:pt-6 justify-items-start items-center flex-col  w-[95%] sm:w-[80%] sm:h-[80%] backdrop-blur-3xl border-[#FFF7E5] rounded-2xl border-1 p-4">
                    <h1 className="text-[#FFF7E5] mt-8 mb-2 text-4xl sm:text-7xl text-center font-bold text-shadow-lg/30">
                        my TeCH STaCK
                    </h1>
                    <h3 className="font-michroma-rise mt-1 text-lg sm:text-base font-bold text-amber-800 text-center px-4">
                        "Stacks inspire dreams; code builds reality."
                    </h3>
                    <div className="flex flex-wrap justify-center items-center w-full mt-5 gap-5">
                        <Stacks />
                    </div>
                </div>
            </div>
        </>
    );
}
