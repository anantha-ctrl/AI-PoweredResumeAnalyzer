import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, FileText, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

export function FileUpload({ onFileUpload }: FileUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div
        {...getRootProps()}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className={cn(
          "relative group cursor-pointer flex flex-col items-center justify-center w-full h-64 rounded-3xl border-2 border-dashed transition-all duration-300 ease-in-out overflow-hidden",
          isDragActive 
            ? "border-indigo-400 bg-indigo-500/10 shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]" 
            : "border-slate-700 bg-slate-900/50 hover:border-slate-500 hover:bg-slate-800/50",
          isDragReject && "border-red-500 bg-red-500/10"
        )}
      >
        <input {...getInputProps()} />
        
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        
        <AnimatePresence mode="wait">
          {isDragActive ? (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="flex flex-col items-center gap-4 z-10"
            >
              <div className="p-4 rounded-full bg-indigo-500/20 text-indigo-400 animate-bounce">
                <UploadCloud className="w-10 h-10" />
              </div>
              <p className="text-lg font-medium text-indigo-300">Feed me the data...</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="flex flex-col items-center gap-4 z-10 p-6 text-center"
            >
              <div className="p-4 rounded-full bg-slate-800 text-slate-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors duration-300">
                <FileText className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-semibold text-slate-200">
                  Drop your resume here
                </p>
                <p className="text-sm text-slate-400 max-w-xs mx-auto">
                  PDF or DOCX. We don't judge file formats, just your career choices.
                </p>
              </div>
              <div className="mt-2 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-xs text-slate-400">
                Max 5MB • Secure Encryption
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
