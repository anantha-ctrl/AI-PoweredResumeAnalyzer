import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { FileUpload } from "./components/FileUpload";
import { AnalysisLoader } from "./components/AnalysisLoader";
import { AnalysisResult } from "./components/AnalysisResult";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [appState, setAppState] = useState<"idle" | "analyzing" | "results">("idle");
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (uploadedFile: File) => {
    setFile(uploadedFile);
    setAppState("analyzing");
  };

  const handleAnalysisComplete = () => {
    setAppState("results");
  };

  const handleReset = () => {
    setFile(null);
    setAppState("idle");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <AnimatePresence mode="wait">
          {appState === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center text-center space-y-12"
            >
              <div className="space-y-6 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                  AI-Powered Reality Check
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                  Optimize your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                    existential dread.
                  </span>
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                  Feed your resume to our AI. Get an ATS score, a brutal roast, and templates that scream "I love synergy" while you scream internally.
                </p>
              </div>

              <FileUpload onFileUpload={handleFileUpload} />

              <div className="flex gap-8 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-slate-500 rounded-full" />
                  ATS Optimization
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-slate-500 rounded-full" />
                  Buzzword Injection
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-slate-500 rounded-full" />
                  Corporate Translation
                </div>
              </div>
            </motion.div>
          )}

          {appState === "analyzing" && (
            <motion.div
              key="analyzing"
              exit={{ opacity: 0 }}
              className="w-full max-w-2xl mx-auto"
            >
              <AnalysisLoader onComplete={handleAnalysisComplete} />
            </motion.div>
          )}

          {appState === "results" && (
            <AnalysisResult key="results" onReset={handleReset} />
          )}
        </AnimatePresence>
      </main>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px]" />
      </div>
    </div>
  );
}

export default App;
