"use client";
import { useState, useEffect } from "react";
import { puzzle } from "@/data/puzzle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { HomeIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const colorMap: Record<string, string> = {
  green: "bg-lime-300",
  orange: "bg-orange-300",
  pink: "bg-fuchsia-300",
  blue: "bg-cyan-300",
};

type Word = {
  word: string;
  used: boolean;
  group?: string;
  color?: keyof typeof colorMap;
};

export default function Connections() {
  const router = useRouter();
  const [words, setWords] = useState<Word[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<typeof puzzle.groups>(
    []
  );
  const [solvedGroups, setSolvedGroups] = useState<string[]>([]);
  const [selected, setSelected] = useState<Word[]>([]);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const selectedGroups = shuffle(puzzle.groups).slice(0, 4); // Pick 4 random groups
    const availableColors = Object.keys(colorMap);

    const groupsWithColor = selectedGroups.map((group, index) => ({
      ...group,
      color: availableColors[index] as keyof typeof colorMap,
    }));

    const flatWords = groupsWithColor.flatMap((group) =>
      group.words.map((word) => ({
        word,
        used: false,
        group: group.name,
        color: group.color,
      }))
    );

    setWords(shuffle(flatWords));
    setSelectedGroups(groupsWithColor);
  }, []);

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  function shuffle<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
  }

  const isGameOver = solvedGroups.length === 4;

  const handleClick = (wordObj: Word) => {
    if (wordObj.used || selected.includes(wordObj) || isGameOver) return;
    if (selected.length >= 3) return;
    setSelected([...selected, wordObj]);
  };

  const checkGroup = () => {
    if (selected.length !== 3) return;

    const groupCounts: Record<string, number> = {};
    selected.forEach((w) => {
      if (w.group) {
        groupCounts[w.group] = (groupCounts[w.group] || 0) + 1;
      }
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const matchingGroup = Object.entries(groupCounts).find(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, count]) => count === 3
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const almostGroup = Object.entries(groupCounts).find(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, count]) => count === 2
    );

    if (matchingGroup && !solvedGroups.includes(matchingGroup[0])) {
      const groupName = matchingGroup[0];
      setSolvedGroups([...solvedGroups, groupName]);

      setWords((prev) =>
        prev.map((w) => (selected.includes(w) ? { ...w, used: true } : w))
      );

      setStatusMessage(`✅ Correct! That was the "${groupName}" group.`);
    } else if (almostGroup) {
      setStatusMessage("⚠️ Almost! You're 1 word off from a correct group.");
    } else {
      setStatusMessage("❌ Try again.");
    }

    setSelected([]);
  };

  // Reset function to shuffle and choose new groups
  const handleReset = () => {
    setSolvedGroups([]);
    setSelected([]);

    const selectedGroups = shuffle(puzzle.groups).slice(0, 4);
    const availableColors = Object.keys(colorMap);

    const groupsWithColor = selectedGroups.map((group, index) => ({
      ...group,
      color: availableColors[index] as keyof typeof colorMap,
    }));

    const flatWords = groupsWithColor.flatMap((group) =>
      group.words.map((word) => ({
        word,
        used: false,
        group: group.name,
        color: group.color,
      }))
    );

    setWords(shuffle(flatWords));
    setSelectedGroups(groupsWithColor);
  };

  return (
    <motion.div className="bg-gradient-to-b from-[#f4f4f4] via-[#dff7fc] to-[#dbebd5] min-h-screen relative">
      <div className="fixed top-0 left-0 w-full z-30 bg-white/60 backdrop-blur-md shadow-md">
        <nav className="flex items-center justify-left px-6 pt-3 pb-2">
          <div className="flex">
            <Button
              onClick={() => router.push("/")}
              className="font-bold text-[#675D50] hover:text-[#4a433a] h-10"
              variant="ghost"
            >
              <HomeIcon />
              GO HOME
            </Button>
          </div>
        </nav>
      </div>
      <div className="min-h-screen p-6  mx-auto flex flex-col items-center">
        <div>
          <div className="h-[4.4rem] md:h-[5.5rem]">
            <AnimatePresence>
              {statusMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <Alert className="w-full max-w-screen-lg mx-auto border-1 border-neutral-950 text-black">
                    <AlertTitle className="md:text-lg">Status</AlertTitle>
                    <AlertDescription className="text-black md:text-lg">{statusMessage}</AlertDescription>
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <h1 className="text-2xl font-bold text-center">
            MITIGATION & ADAPTATION
          </h1>
          <h1 className="text-3xl font-bold mb-6 text-center">CONNECTIONS</h1>
        </div>
        {!isGameOver && (
          <>
            <div className="mb-4 w-full text-center">
              <div className="grid grid-cols-3 gap-3">
                {words.map((wordObj, i) => (
                  <Card
                    key={i}
                    onClick={() => handleClick(wordObj)}
                    className={cn(
                      "cursor-pointer select-none transition border-black text-center items-center justify-center w-full h-28",
                      wordObj.used
                        ? colorMap[wordObj.color!]
                        : selected.includes(wordObj)
                        ? "bg-gray-300"
                        : "hover:bg-gray-100"
                    )}
                  >
                    <CardContent className="p-4 font-medium text-lg">
                      {wordObj.word}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <Button onClick={checkGroup} disabled={selected.length !== 3}>
                Submit Group
              </Button>
            </div>

            <Separator className="my-4" />
            <p className="text-lg font-medium">
              Solved Groups: {solvedGroups.length} / 4
            </p>
          </>
        )}

        {isGameOver && (
          <div className="text-center w-full">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              🎉 You solved all the groups!
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {selectedGroups.map((group) =>
                group.words.map((word, idx) => (
                  <Card
                    key={group.name + idx}
                    className={cn(
                      "text-center border-black",
                      colorMap[group.color]
                    )}
                  >
                    <CardContent className="p-4 font-medium">
                      {word}
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
            {/* Only display the Reset button when game is over */}
            <Button className="mt-6" onClick={handleReset}>
              🔁 New Game
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
