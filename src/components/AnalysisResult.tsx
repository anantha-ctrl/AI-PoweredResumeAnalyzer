import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Sparkles, RefreshCw, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Button } from "./ui/Button";
import { MOCK_RESULTS } from "../lib/utils";

interface AnalysisResultProps {
  onReset: () => void;
}

export function AnalysisResult({ onReset }: AnalysisResultProps) {
  const scoreColor = MOCK_RESULTS.score > 70 ? "text-emerald-400" : MOCK_RESULTS.score > 50 ? "text-amber-400" : "text-red-400";
  const scoreBorder = MOCK_RESULTS.score > 70 ? "border-emerald-500/50" : MOCK_RESULTS.score > 50 ? "border-amber-500/50" : "border-red-500/50";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto space-y-8"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Analysis Complete</h2>
          <p className="text-slate-400">Here's why you're not getting hired (yet).</p>
        </div>
        <div className="flex gap-3">
            <Button variant="outline" onClick={onReset}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Another
            </Button>
            <Button variant="primary">
                <Download className="w-4 h-4 mr-2" />
                Export Report
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Score Card */}
        <Card className="md:col-span-1 border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
          <CardHeader>
            <CardTitle className="text-slate-400 text-sm uppercase tracking-wider">ATS Compatibility</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-8">
            <div className={`relative w-40 h-40 rounded-full border-8 ${scoreBorder} flex items-center justify-center mb-6 shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]`}>
              <div className="text-center">
                <span className={`text-5xl font-bold ${scoreColor}`}>{MOCK_RESULTS.score}</span>
                <span className="text-sm text-slate-500 block mt-1">/ 100</span>
              </div>
            </div>
            <p className="text-center text-slate-300 font-medium px-4">
              "{MOCK_RESULTS.summary}"
            </p>
          </CardContent>
        </Card>

        {/* The Roast & Fixes */}
        <div className="md:col-span-2 space-y-6">
          {/* AI Roast */}
          <Card className="border-pink-500/20 bg-pink-500/5">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-400" />
                <CardTitle className="text-pink-200">The Brutal Truth</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-pink-100/90 italic leading-relaxed">
                "{MOCK_RESULTS.roast}"
              </p>
            </CardContent>
          </Card>

          {/* Improvements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  <CardTitle>Missing Keywords</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {MOCK_RESULTS.keywords_missing.map((keyword, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300 text-sm bg-slate-800/50 p-2 rounded-lg border border-slate-700/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {keyword}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                  <CardTitle>Formatting Fixes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {MOCK_RESULTS.formatting_issues.map((issue, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      {issue}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
