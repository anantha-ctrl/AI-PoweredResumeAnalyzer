import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { MOCK_ANALYSIS_STEPS } from "../lib/utils";

interface AnalysisLoaderProps {
  onComplete: () => void;
}

export function AnalysisLoader({ onComplete }: AnalysisLoaderProps) {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev >= MOCK_ANALYSIS_STEPS.length - 1) {
          clearInterval(interval);
          setTimeout(onComplete, 800); // Small delay after last step
          return prev;
        }
        return prev + 1;
      });
    }, 800); // Change text every 800ms

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center w-full py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
        <Loader2 className="w-16 h-16 text-indigo-400 animate-spin relative z-10" />
      </motion.div>
      
      <div className="h-16 mt-8 flex items-center justify-center overflow-hidden">
        <motion.p
          key={stepIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="text-xl font-mono text-indigo-200 text-center"
        >
          {MOCK_ANALYSIS_STEPS[stepIndex]}
        </motion.p>
      </div>

      <div className="w-64 h-1 bg-slate-800 rounded-full mt-8 overflow-hidden">
        <motion.div
          className="h-full bg-indigo-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: MOCK_ANALYSIS_STEPS.length * 0.8, ease: "linear" }}
        />
      </div>
    </div>
  );
}
