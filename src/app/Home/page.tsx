"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { useEffect, useCallback } from "react";

export default function Home() {
  const router = useRouter();
  const handleNavigation = useCallback(() => {
    router.push("/Skills");
  }, [router]);

  const box = {
    backgroundImage: "url('/images/img3.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 5,
    borderColor: "red"
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-full"
        style={box}>
        <h2 className="text-3xl text-amber-50 font-extrabold shadow-2xl text-shadow-black text-shadow-2xl "> Lost in dune... <br/>but every journey begins here</h2>
        <Button 
          variant="ghost"
          className="bg-amber-200 text-amber-950 flex justify-center shadow-2xl shadow-black text-shadow-2xl items-center rounded-full p-2 mt-4"
          onClick={handleNavigation}>
         Skills
        </Button>
      </div>
    </>
  )
}
