export default function Footer() {
  return (
    <footer className="mt-20 w-full bg-slate-950 px-6 pt-12 text-slate-300 md:px-16 lg:px-24 xl:px-32">
      <div className="flex w-full flex-col justify-between gap-10 border-b border-white/10 pb-8 md:flex-row">
        <div className="md:max-w-96">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-400 text-lg font-bold text-white">
              S
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Swift</p>
              <p className="text-sm text-slate-400">AI workspace for builders</p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-6 text-slate-400">
            Build articles, blog ideas, images, and resume feedback in one fast workflow.
            Swift is designed to keep creation sharp, simple, and organized.
          </p>
        </div>

        <div className="flex flex-1 items-start gap-20 md:justify-end">
          <div>
            <h2 className="mb-5 font-semibold text-white">Company</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5 font-semibold text-white">Subscribe to our newsletter</h2>
            <div className="space-y-2 text-sm">
              <p className="text-slate-400">Product updates, new tools, and useful AI workflow ideas.</p>
              <div className="flex items-center gap-2 pt-4">
                <input
                  className="h-10 w-full max-w-64 rounded-xl border border-white/10 bg-white/5 px-3 text-white placeholder-slate-500 outline-none ring-sky-500 focus:ring-2"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="h-10 cursor-pointer rounded-xl bg-sky-500 px-4 text-white transition hover:bg-sky-400">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="pb-6 pt-4 text-center text-xs text-slate-500 md:text-sm">
        Copyright 2026 (c) Swift. All rights reserved.
      </p>
    </footer>
  );
}
