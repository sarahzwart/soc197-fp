"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { HomeIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Sample questions and correct answers
const questions = [
  {
    question: 'What is the "adaptation gap"?',
    options: [
      "The difference between the level of adaptation needed to protect communities and the actions being taken",
      "The difference between mitigation efforts and climate goals",
      "The gap between climate change awareness and political action",
      "The gap in renewable energy technology",
    ],
    correctAnswer:
      "The difference between the level of adaptation needed to protect communities and the actions being taken",
  },
  {
    question: "What is the main goal of climate change mitigation?",
    options: [
      "Preventing or reducing the emission of greenhouse gases into the atmosphere",
      "Adapting to climate change impacts",
      " Increasing greenhouse gas emissions",
      "Ignoring climate change effects",
    ],
    correctAnswer:
      "Preventing or reducing the emission of greenhouse gases into the atmosphere",
  },
  {
    question:
      "WWhich of the following is a direct action to mitigate climate change?",
    options: [
      "Flying more frequently",
      "Building more electric cars",
      " Increasing fossil fuel use",
      "Eating more plant-based meals",
    ],
    correctAnswer: "Eating more plant-based meals",
  },
  {
    question:
      "What is a key aspect of adaptation in the context of climate change?",
    options: [
      "Reducing greenhouse gas emissions",
      "Adjusting to new climate realities and minimizing damage",
      " Increasing industrialization",
      "Ignoring the impacts on vulnerable communities",
    ],
    correctAnswer: "Adjusting to new climate realities and minimizing damage",
  },
  {
    question:
      "Which U.S. state provides matching grants for local climate adaptation projects?",
    options: ["California", "Florida", "New York", "Texas"],
    correctAnswer: "New York",
  },
  {
    question: "At COP29, what major commitment was made by world leaders?",
    options: [
      "To reduce carbon emissions to zero by 2030",
      "To triple adaptation finance to developing countries by 2030",
      "To phase out fossil fuels by 2025",
      " To ban all international flights",
    ],
    correctAnswer:
      "To triple adaptation finance to developing countries by 2030",
  },
  {
    question: "What is one way individuals can reduce their carbon footprint?",
    options: [
      "Increase meat and dairy consumption",
      "Consume less and buy more durable products",
      "Use more plastic",
      "Drive more frequently",
    ],
    correctAnswer: "Consume less and buy more durable products",
  },
  {
    question:
      'What does the "Adaptation Gap Report 2024" highlight about adaptation finance?',
    options: [
      "It has decreased dramatically in the past decade",
      "The estimated need is $215–$387 billion annually",
      "It has been fully met by current pledges",
      "There are no current gaps in funding",
    ],
    correctAnswer: "The estimated need is $215–$387 billion annually",
  },
  {
    question:
      "Which U.S. state is focusing on the vulnerability of its coastal wetlands to climate change?",
    options: ["Maryland", "California", "Florida", "Hawaii"],
    correctAnswer: "Diamond",
  },
  {
    question:
      "What does the UNEP 2024 Adaptation Gap Report emphasize for adaptation financing?",
    options: [
      "A shift from project-based to anticipatory, strategic financing",
      "A reduction in funding for adaptation efforts",
      "More focus on carbon emissions reductions",
      "Reducing the adaptation needs for developing countries",
    ],
    correctAnswer:
      "A shift from project-based to anticipatory, strategic financing",
  },
];

export default function TriviaPage() {
  const router = useRouter();
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage(null); // Hide status message after 6 seconds
      }, 6000);
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [statusMessage]);

  const handleAnswerChange = (answer: string) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
      setStatusMessage("Correct!✅"); // Set the message to 'Correct!'
    } else {
      setStatusMessage(
        `❌ Incorrect! The correct answer was ${questions[currentQuestionIndex].correctAnswer}`
      );
    }
    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
      setStatusMessage(null); // Reset the message for the next question
    }
  };

  const handlePlayAgain = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setCorrectAnswers(0);
    setIsAnswerSubmitted(false);
    setStatusMessage(null);
  };

  const isGameOver = currentQuestionIndex === questions.length - 1;

  return (
    <div className="bg-gradient-to-b from-[#f4f4f4] via-[#dff7fc] to-[#dbebd5] min-h-screen relative">
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

      {/* Animated Status Message */}
      <div className="h-28 md:h-8">
        <AnimatePresence>
          {statusMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full absolute top-20"
            >
              <Alert className="max-w-10/12 md:max-w-2/3 mx-auto border-1 border-neutral-950 text-black">
                <AlertTitle className="text-sm">Status</AlertTitle>
                <AlertDescription className="text-black text-sm">
                  {statusMessage}
                </AlertDescription>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Trivia Game Section */}
      <main className="relative flex items-center justify-center h-screen text-center px-6">
        <section className="text-center px-6 w-full max-w-4xl mx-auto">
          <div className="max-w-full mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              TRIVIA
            </h2>
            <p className="text-gray-700 mb-6">
              Choose the correct answer for each question. Each correct answer
              earns you points.
            </p>
            {!isGameOver ? (
              <div className="space-y-4">
                <div className="bg-white shadow-lg p-6 rounded-lg items-center text-center justify-center max-w-full">
                  <h3 className="text-xl font-bold">
                    {questions[currentQuestionIndex].question}
                  </h3>
                  <ul className="list-none space-y-4">
                    {questions[currentQuestionIndex].options.map(
                      (option, index) => (
                        <li key={index}>
                          <Button
                            onClick={() => handleAnswerChange(option)}
                            disabled={isAnswerSubmitted}
                            className={`w-full hover:bg-gray-200 h-16 md:h-full ${
                              selectedAnswer === option
                                ? "bg-[#93d0f9] text-white"
                                : "bg-white text-gray-800"
                            } ${
                              isAnswerSubmitted
                                ? option ===
                                  questions[currentQuestionIndex].correctAnswer
                                  ? "bg-green-500 text-white"
                                  : option === selectedAnswer
                                  ? "bg-red-500 text-white"
                                  : ""
                                : ""
                            }`}
                            style={{
                              wordWrap: "break-word", // Ensures long words break into new lines
                              overflowWrap: "break-word", // Breaks long words and ensures they wrap within the button
                              whiteSpace: "normal", // Allows text to wrap
                            }}
                          >
                            <span className="clamped-text">{option}</span>
                          </Button>
                        </li>
                      )
                    )}
                  </ul>
                  <div className="space-x-1.5 justify-items-center w-full mt-4">
                    <Button
                      onClick={handleSubmitAnswer}
                      className="px-6 py-2 bg-[#96c584] text-white rounded-full shadow hover:bg-[#789e69]"
                      disabled={selectedAnswer === null || isAnswerSubmitted}
                    >
                      Submit Answer
                    </Button>
                    <Button
                      onClick={handleNextQuestion}
                      className="mt-4 px-6 py-2 bg-[#96c584] text-white rounded-full shadow hover:bg-[#789e69]"
                      disabled={!isAnswerSubmitted}
                    >
                      Next Question
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white shadow-lg p-6 rounded-lg max-w-full">
                <h3 className="text-2xl font-bold mb-4">Game Over!</h3>
                <p className="text-xl mb-4">
                  You answered {correctAnswers} out of {questions.length}{" "}
                  questions correctly!
                </p>
                <button
                  className="px-6 py-3 bg-[#96c584] text-white rounded-full shadow hover:bg-[#789e69]"
                  onClick={handlePlayAgain}
                >
                  Play Again
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
