import { BrainCircuit, Github } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-500/10 p-2 rounded-lg">
            <BrainCircuit className="w-6 h-6 text-indigo-400" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Resume<span className="text-indigo-400">Roast</span>.ai
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Templates</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
