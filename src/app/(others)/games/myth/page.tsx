"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { HomeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MythVsFactGame() {
  const router = useRouter();

  const statements = [
    { text: "Mitigation and adaptation do the same thing.", isFact: false },
    { text: "Adaptation is only about adjusting to climate impacts.", isFact: true },
    { text: "Low-Income countries have all their needs fulfilled in terms of adaptation.", isFact: false },
    { text: "Installing solar panels and buying electric cars are the key to climate mitigation efforts.", isFact: false},
    { text: "Adaptation means we are giving up on fighting climate change.", isFact: false },
    { text: "Restoration of coral reefs is an example of climate adaptation.", isFact: true },
    { text: "There's nothing individuals can do to help.", isFact: false },
    { text: "Mitigation means stopping all climate change immediately.", isFact: false },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleAnswer = (answerIsFact: boolean) => {
    if (statements[currentIndex].isFact === answerIsFact && answerIsFact === true) {
      setScore(score + 1);
      setFeedback("Correct, its a fact! ✅");
    }
    else if (!statements[currentIndex].isFact === !answerIsFact && answerIsFact === false) {
      setScore(score + 1);
      setFeedback("Correct, its a myth! ✅");
    }
    else {
      setFeedback("Incorrect! ❌");
    }

    setTimeout(() => {
      if (currentIndex + 1 < statements.length) {
        setCurrentIndex(currentIndex + 1);
        setFeedback("");
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const restartGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setFeedback("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f4f4f4] via-[#dff7fc] to-[#dbebd5]">
      <div className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-md">
        <nav className="flex items-center justify-start px-6 pt-3 pb-2">
          <Button 
            onClick={() => router.push("/")}
            className="font-bold text-[#675D50] hover:text-[#4a433a] h-10"
            variant="ghost"
          >
            <HomeIcon className="mr-2" />
            GO HOME
          </Button>
        </nav>
      </div>
      <div className="h-28 md:h-8">
        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full absolute top-20"
            >
              <Alert className="max-w-10/12 md:max-w-2/3 mx-auto border-1 border-neutral-400 text-black">
                <AlertTitle className="text-sm">Status</AlertTitle>
                <AlertDescription className="text-black text-sm">
                  {feedback}
                </AlertDescription>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="pt-24 flex-grow md:pt-40 p-6 max-w-4xl mx-auto flex flex-col items-center">
        {!showResult ? (
          <>
            <h1 className="text-4xl font-bold mb-10 text-center text-[#333]">
              MYTH VS. FACT
            </h1>
            <div className="bg-white/80 p-8 rounded-xl shadow-md text-center max-w-2xl">
              <p className="text-xl mb-6">{statements[currentIndex].text}</p>
              <div className="flex justify-center space-x-6">
                <Button 
                  onClick={() => handleAnswer(false)} 
                  className="bg-red-300 hover:bg-red-400 text-[#4a433a] font-bold"
                >
                  Myth
                </Button>
                <Button 
                  onClick={() => handleAnswer(true)} 
                  className="bg-green-300 hover:bg-green-400 text-[#4a433a] font-bold"
                >
                  Fact
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#468966]">Game Over!</h2>
            <p className="text-xl mb-4">Your Score: {score} / {statements.length}</p>
            <Button onClick={restartGame} className="bg-[#675D50] hover:bg-[#4a433a] text-white font-bold mt-4">
              Play Again
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

