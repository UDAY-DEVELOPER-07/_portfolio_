"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Loader() {
  const box = {
    width: 200,
    height: 200,
    backgroundImage: "url('/images/avatar_loader.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 5,
    borderColor: "red"
  }
  const router = useRouter();
  useEffect(() => {
    addEventListener("click", () => {
      router.push("/Skills")
    })
  }, [router])
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <h2 className="text-2xl"> Lost in dune... but every journey begins here</h2>
        <button
          className="bg-amber-500 text-amber-950 flex justify-center items-center rounded-full p-2 mt-4"
          onClick={() => router.push("/Skills")}
        >
          Skills
        </button>
      </div>
    </>
  )
}
