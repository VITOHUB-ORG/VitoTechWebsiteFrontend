// src/components/YearsOfExperience.tsx
export default function YearsOfExperience() {
  return (
    <section id="experience" className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-start lg:justify-between">
        {/* ===== BIG 1 upande wa kushoto ===== */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative h-[360px] w-40 overflow-hidden rounded-md bg-linear-to-b from-[#6f79ff] to-[#4049ff]">
            {/* unaweza kuacha hivi au kuongeza pattern ya background baadaye */}
            <div className="flex h-full items-end justify-center pb-4">
              <span className="text-[260px] leading-none font-semibold text-white">
                1
              </span>
            </div>
          </div>
        </div>

        {/* ===== Maelezo ya katikati ===== */}
        <div className="max-w-md">
          <div className="flex gap-6">
            {/* mstari mdogo wa kushoto kama picha */}
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
              {/* button za vibox – naacha classes zako zilezile */}
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
