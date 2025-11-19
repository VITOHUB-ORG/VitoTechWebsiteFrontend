export default function ContactInformation() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Phones */}
          <article className="flex h-full flex-col items-center justify-center rounded-sm border border-gray-100 bg-white px-8 py-12 text-center shadow-sm">
            <div className="mb-6 text-4xl text-[#6f7dfa]">
              <span className="fl-bigmug-line-cellphone55" />
            </div>
            <p className="text-sm font-medium text-gray-900">
              <a href="tel:+255678665780" className="hover:text-[#6f7dfa]">
                +255-678-665-780
              </a>
            </p>
            <p className="text-sm font-medium text-gray-900">
              <a href="tel:+255672969004" className="hover:text-[#6f7dfa]">
                +255-672-969-004
              </a>
            </p>
            <p className="text-sm font-medium text-gray-900">
              <a href="tel:+255753786912" className="hover:text-[#6f7dfa]">
                +255-753-786-912
              </a>
            </p>
            <p className="text-sm font-medium text-gray-900">
              <a href="tel:+255627857470" className="hover:text-[#6f7dfa]">
                +255-627-857-470
              </a>
            </p>
          </article>

          {/* Address */}
          <article className="flex h-full flex-col items-center justify-center rounded-sm border border-gray-100 bg-white px-8 py-12 text-center shadow-sm">
            <div className="mb-6 text-4xl text-[#6f7dfa]">
              <span className="fl-bigmug-line-up104" />
            </div>
            <p className="text-sm font-medium text-gray-900">
              Iyumbu-Dodoma,
            </p>
            <p className="text-sm font-medium text-gray-900">Tanzania</p>
          </article>

          {/* Web & Email */}
          <article className="flex h-full flex-col items-center justify-center rounded-sm border border-gray-100 bg-white px-8 py-12 text-center shadow-sm">
            <div className="mb-6 text-4xl text-[#6f7dfa]">
              <span className="fl-bigmug-line-chat55" />
            </div>
            <p className="text-sm font-medium text-gray-900">
              <a
                href="https://www.vitohub.org"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#6f7dfa]"
              >
                www.vitohub.org
              </a>
            </p>
            <p className="text-sm font-medium text-gray-900">
              <a
                href="mailto:info@vitohub.org"
                className="hover:text-[#6f7dfa]"
              >
                info@Vitohub.org
              </a>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
