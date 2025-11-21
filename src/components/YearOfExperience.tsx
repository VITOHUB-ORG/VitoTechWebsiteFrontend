// src/components/YearsOfExperience.tsx
export default function YearsOfExperience() {
  return (
    <section id="experience" className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-start lg:justify-between">
        {/* ===== BIG 1 upande wa kushoto ===== */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative h-[360px] w-40 overflow-hidden rounded-md bg-linear-to-b from-[#6f79ff] to-[#4049ff]">
            {/* Video ya mazingira ya molekuli */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-90"
              style={{
                maskImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" font-size=\"80\" font-weight=\"700\" fill=\"white\">1</text></svg>')",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" font-size=\"80\" font-weight=\"700\" fill=\"white\">1</text></svg>')",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
              }}
            >
              <source src="/videos/particles-blue.mp4" type="video/mp4" />
              {/* Fallback ikiwa video haipatikani */}
              <div className="flex h-full items-end justify-center pb-4">
                <span className="text-[260px] leading-none font-semibold text-white">
                  1
                </span>
              </div>
            </video>
            
            {/* Animation ya molekuli kwa kutumia CSS ikiwa video haipo */}
            <div className="absolute inset-0">
              {/* Molekuli 1 */}
              <div className="absolute left-1/4 top-1/3 h-2 w-2 animate-float rounded-full bg-white opacity-60" style={{ animationDelay: '0s' }}></div>
              
              {/* Molekuli 2 */}
              <div className="absolute left-1/2 top-1/4 h-1.5 w-1.5 animate-float rounded-full bg-white opacity-40" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Molekuli 3 */}
              <div className="absolute left-1/3 top-2/3 h-1 w-1 animate-float rounded-full bg-white opacity-50" style={{ animationDelay: '0.8s' }}></div>
              
              {/* Molekuli 4 */}
              <div className="absolute left-2/3 top-3/4 h-2.5 w-2.5 animate-float rounded-full bg-white opacity-30" style={{ animationDelay: '2.2s' }}></div>
              
              {/* Molekuli 5 */}
              <div className="absolute left-3/4 top-1/2 h-1.5 w-1.5 animate-float rounded-full bg-white opacity-70" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* ===== Maelezo ya katikati ===== */}
        <div className="max-w-md">
          <div className="flex gap-6">
            <span className="mt-4 hidden h-20 w-0.5 bg-slate-200 lg:block" />
            <div>
              <h3 className="mb-4 text-4xl font-semibold leading-tight">
                Years Of <br />
                Experience
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-500">
                VitoTech is a team of highly experienced ML engineers, graphics
                designer and software developer creating and design unique
                software for you.
              </p>
              <a
                href="#modalCta"
                data-toggle="modal"
                className="button button-secondary button-pipaluk inline-block px-10"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>

        {/* ===== Takwimu 4 upande wa kulia ===== */}
        <div className="w-full max-w-sm lg:max-w-md">
          <div className="grid grid-cols-2 border border-slate-200">
            {/* 8 SOFTWARE DEVELOPED */}
            <div className="flex flex-col items-center justify-center border-b border-r border-slate-200 py-8">
              <div className="mb-1 text-6xl font-semibold leading-none">8</div>
              <h6 className="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-500 text-center">
                Software <br /> Developed
              </h6>
            </div>

            {/* 2 CONSULTANTS */}
            <div className="flex flex-col items-center justify-center border-b border-slate-200 py-8">
              <div className="mb-1 text-6xl font-semibold leading-none">2</div>
              <h6 className="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-500 text-center">
                Consultants
              </h6>
            </div>

            {/* 1 AWARDS WON */}
            <div className="flex flex-col items-center justify-center border-r border-slate-200 py-8">
              <div className="mb-1 text-6xl font-semibold leading-none">1</div>
              <h6 className="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-500 text-center">
                Awards Won
              </h6>
            </div>

            {/* 4 EMPLOYEES */}
            <div className="flex flex-col items-center justify-center py-8">
              <div className="mb-1 text-6xl font-semibold leading-none">4</div>
              <h6 className="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-500 text-center">
                Employees
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}