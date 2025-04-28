"use client";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import earthAnimation from "../../../../public/earth2.json";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { HomeIcon } from "lucide-react";

const GamesPage = () => {
  const router = useRouter();
  return (
    <motion.div className="bg-gradient-to-b from-[#f4f4f4] via-[#dff7fc] to-[#dbebd5] min-h-screen relative">
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
      <Lottie
        animationData={earthAnimation}
        loop
        className="pt-16 absolute inset-0 w-screen h-[40vh] md:pt-0 md:h-[100vh] z-0 object-cover opacity-50 pointer-events-none"
      />
      <section className="relative flex items-center justify-center h-screen text-center px-6 pt-24 z-10">
        <div className="max-w-3xl">
          <h1 className="text-lg mb-6 font-semibold text-neutral-600">
            Explore interactive games that teach about climate change,
            mitigation, and adaptation!
          </h1>
          <div className="space-y-4 grid grid-cols-1 justify-center items-center w-1/2 mx-auto">
            <Button
              className="border-2 px-6 py-3 bg-[#96c584] text-white rounded-full shadow hover:bg-[#789e69]"
              onClick={() => router.push("/games/connections")}
            >
              Connections
            </Button>
            <Button
              className="border-2 px-6 py-3 bg-[#79b9c6] text-white rounded-full shadow hover:bg-[#5d8c99]"
              onClick={() => router.push("/games/trivia")}
            >
              Trivia
            </Button>
            <Button
              className="border-2 px-6 py-3 bg-[#b3c0c2] text-white rounded-full shadow hover:bg-[#939d9e]"
              onClick={() => router.push("/games/myth")}
            >
              Myth vs. Fact
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default GamesPage;

/**
 * <Button
              className="border-2 px-6 py-3 bg-[#afc3a8] text-white rounded-full shadow hover:bg-[#789e69]"
              onClick={() => router.push("/games/wordle")}
            >
              Wordle
            </Button>
 */