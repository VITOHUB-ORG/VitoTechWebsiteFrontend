// src/components/ContactUs.tsx
type ContactUsProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactUs({ open, onClose }: ContactUsProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-lg rounded-md bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h4 className="text-lg font-semibold text-gray-900">Contact Us</h4>
          <button
            type="button"
            onClick={onClose}
            className="text-2xl leading-none text-gray-500 hover:text-gray-800"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          <form
            className="space-y-4"
            data-form-output="form-output-global"
            data-form-type="contact-modal"
            method="post"
            action="bat/rd-mailform.php"
          >
            <div className="form-wrap">
              <input
                className="form-input w-full border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                id="contact-modal-name"
                type="text"
                name="name"
                data-constraints="@Required"
              />
              <label
                className="form-label mt-1 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500"
                htmlFor="contact-modal-name"
              >
                Your Name
              </label>
            </div>

            <div className="form-wrap">
              <input
                className="form-input w-full border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                id="contact-modal-email"
                type="email"
                name="email"
                data-constraints="@Email @Required"
              />
              <label
                className="form-label mt-1 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500"
                htmlFor="contact-modal-email"
              >
                E-mail
              </label>
            </div>

            <div className="form-wrap">
              <input
                className="form-input w-full border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                id="contact-modal-phone"
                type="text"
                name="phone"
                data-constraints="@Numeric"
              />
              <label
                className="form-label mt-1 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500"
                htmlFor="contact-modal-phone"
              >
                Phone
              </label>
            </div>

            <div className="form-wrap">
              <label
                className="form-label mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500"
                htmlFor="contact-modal-message"
              >
                Message
              </label>
              <textarea
                className="form-input textarea-lg w-full min-h-[140px] resize-y border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                id="contact-modal-message"
                name="message"
                data-constraints="@Required"
              />
            </div>

            <button
              className="mt-2 inline-flex items-center justify-center bg-indigo-500 px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-indigo-600"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
