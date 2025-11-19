export default function ContactForm() {
  return (
    <section
      id="contacts"
      className="bg-white py-16 pb-20 text-left"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Title + description (kama kwenye picha: Get In Touch | text) */}
        <div className="flex flex-col gap-3 border-b border-gray-200 pb-8 md:flex-row md:items-center md:gap-6">
          <h3 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Get In Touch
          </h3>
          <span className="hidden h-7 w-px bg-gray-300 md:inline-block" />
          <p className="max-w-2xl text-sm text-gray-600 md:text-base">
            If you have any questions, just fill in the contact form, and we
            will answer you shortly.
          </p>
        </div>

        {/* Form */}
        <form
          className="mt-10 space-y-6"
          method="post"
          action="#"
        >
          {/* First row: name, email, phone */}
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500"
              >
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                className="w-full border-0 bg-[#f6f6f6] px-4 py-4 text-sm text-gray-900 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-[#6f7dfa]"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500"
              >
                E-mail
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                className="w-full border-0 bg-[#f6f6f6] px-4 py-4 text-sm text-gray-900 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-[#6f7dfa]"
              />
            </div>

            <div>
              <label
                htmlFor="contact-phone"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500"
              >
                Phone
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="text"
                className="w-full border-0 bg-[#f6f6f6] px-4 py-4 text-sm text-gray-900 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-[#6f7dfa]"
              />
            </div>
          </div>

          {/* Message textarea */}
          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              className="w-full resize-none border-0 bg-[#f6f6f6] px-4 py-4 text-sm text-gray-900 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-[#6f7dfa]"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-4 inline-flex items-center justify-center bg-[#6f7dfa] px-10 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-[#5a6aec] focus:outline-none focus:ring-2 focus:ring-[#6f7dfa] focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
