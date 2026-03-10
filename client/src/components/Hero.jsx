import React from "react";
import { useNavigate } from "react-router-dom";
import { FileText, ImageIcon, Sparkles, Wand2 } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full items-center overflow-hidden px-4 pt-28 sm:px-20 xl:px-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute right-[-6%] top-1/4 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />
      </div>

      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm text-sky-700 shadow-sm">
            <Sparkles className="h-4 w-4" />
            AI creation suite for writing, visuals, and career assets
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-950 sm:text-6xl 2xl:text-7xl">
            Move faster with
            <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}Swift
            </span>
            , your all-in-one AI workspace.
          </h1>

          <p className="mt-6 max-w-2xl text-sm text-slate-600 sm:text-lg">
            Write articles, generate image concepts, clean up visuals, review resumes,
            and keep every output in one sharp dashboard.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm max-sm:text-xs">
            <button
              onClick={() => navigate("/ai")}
              className="cursor-pointer rounded-2xl bg-slate-950 px-8 py-3 text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Open Workspace
            </button>

            <button
              onClick={() => navigate("/ai/community")}
              className="cursor-pointer rounded-2xl border border-slate-200 bg-white px-8 py-3 text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
            >
              Explore Community
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-600">
            <div className="rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-sm">Article writer</div>
            <div className="rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-sm">Image generator</div>
            <div className="rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-sm">Resume review</div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[32px] border border-white/70 bg-white/85 p-5 shadow-[0_20px_80px_rgba(14,165,233,0.14)] backdrop-blur">
            <div className="rounded-[28px] bg-slate-950 p-6 text-white">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-sky-200">Swift Control Room</p>
                  <h2 className="mt-2 text-2xl font-semibold">Create, remix, publish</h2>
                </div>
                <div className="rounded-2xl bg-white/10 p-3">
                  <Wand2 className="h-6 w-6 text-cyan-300" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/8 p-4">
                  <FileText className="mb-3 h-5 w-5 text-sky-300" />
                  <p className="text-sm font-medium">Long-form writing</p>
                  <p className="mt-1 text-sm text-slate-300">Generate structured drafts in seconds.</p>
                </div>
                <div className="rounded-2xl bg-white/8 p-4">
                  <ImageIcon className="mb-3 h-5 w-5 text-cyan-300" />
                  <p className="text-sm font-medium">Visual workflows</p>
                  <p className="mt-1 text-sm text-slate-300">Create and polish images without leaving the app.</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-gradient-to-r from-sky-500/20 to-cyan-400/20 p-4">
                <p className="text-sm text-sky-100">Built for creators who want one workflow instead of six tabs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
