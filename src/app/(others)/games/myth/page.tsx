"use client";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Wordle() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#f4f4f4] via-[#dff7fc] to-[#dbebd5]">
      <div className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-md">
        <nav className="flex items-center justify-left px-6 pt-3 pb-2">
          <div className="flex ">
            <Button onClick={() => router.push("/")}
                className="font-bold text-[#675D50] hover:text-[#4a433a] h-10"
                variant="ghost">
                    <HomeIcon/>
              GO HOME
            </Button>
          </div>
        </nav>
      </div>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6"> MYTH VS. FACT</h1>
          Coming Soon...
      </div>
    </div>
  );
}
