"use client"

export function NewReleasePromo() {
  return (
    <section className="mt-12 w-full  pb-120 ">
      <div className="mx-auto max-w-4xl rounded-[40px] border border-black/5 dark:border-white/20 p-2 shadow-sm">
        <div className="relative mx-auto h-[400px] max-w-4xl overflow-hidden rounded-[38px] border border-black/5 dark:border-white/20 bg-primary p-2 shadow-sm">
          {/* Subtle radial glow from center */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255, 64, 23, 0.1), transparent 70%)",
            }}
          />

          {/* Film grain overlay */}
          <div
            className="absolute inset-0 z-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10">
            <div className="mt-8 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Build. Customize. Deploy Quickly.</h2>
              <p className="text-white/60 mb-8">Built to keep you hooked.</p>
              <div className="flex items-center justify-center">
                <a href="/docs/get-started">
                  <div className="group border-border bg-secondary/70 flex h-[64px] cursor-pointer items-center gap-2 rounded-full border p-[11px] mt-10">
                    <div className="border-border bg-primary flex h-[43px] items-center justify-center rounded-full border">
                      <p className="mr-3 ml-2 flex items-center justify-center gap-2 font-medium tracking-tight text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-globe animate-spin"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        Join the Team
                      </p>
                    </div>
                    <div className="border-border flex size-[26px] items-center justify-center rounded-full border-2 transition-all ease-in-out group-hover:ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right transition-all ease-in-out group-hover:rotate-45"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Stroked text wordmark */}
            <h1
              className="absolute inset-x-0 mt-[120px] text-center text-[100px] font-semibold text-transparent sm:mt-[30px] sm:text-[190px] pointer-events-none"
              style={{
                WebkitTextStroke: "1px currentColor",
                color: "transparent",
              }}
              aria-hidden="true"
            >
              skiper/ui
            </h1>
            <h1
              className="absolute inset-x-0 mt-[120px] text-center text-[100px] font-semibold text-primary sm:mt-[30px] sm:text-[190px] pointer-events-none"
              aria-hidden="true"
            >
              skiper/ui
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
