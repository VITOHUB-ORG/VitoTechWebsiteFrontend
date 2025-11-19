// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import type { MouseEvent } from "react";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#team", label: "Team" },
  { href: "#news", label: "News" },
  { href: "#contacts", label: "Contacts" },
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("#home");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Funga scroll ukiwa kwenye mobile drawer
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setActive(href);
    setIsOpen(false);

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* DESKTOP / TOP BAR */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center"
          >
            <img
              src="images/vt4-1.png"
              alt="VitoTech"
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`border-b-2 border-transparent pb-1 text-sm font-medium tracking-wide transition-colors ${
                  active === item.href
                    ? "border-indigo-500 text-indigo-600"
                    : "text-slate-800 hover:text-indigo-500"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Share icon (desktop) */}
          <button
            className="hidden items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50 md:inline-flex"
            aria-label="Share"
          >
            <span className="icon fa fa-share-alt" />
          </button>

          {/* Mobile hamburger */}
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-800 transition hover:bg-slate-50 md:hidden"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <span className="block h-0.5 w-4 rounded bg-slate-800" />
            <span className="mt-1 block h-0.5 w-4 rounded bg-slate-800" />
            <span className="mt-1 block h-0.5 w-4 rounded bg-slate-800" />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-30 bg-slate-900/40 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* MOBILE DRAWER */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 transform bg-white shadow-xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-4 pt-4 pb-3">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-800 hover:bg-slate-50"
          >
            <span className="text-lg">&larr;</span>
          </button>

          <div className="flex items-center">
            <img
              src="images/vt4-1.png"
              alt="VitoTech"
              className="h-8 w-auto"
            />
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4 border-b border-slate-100 px-4 py-4 text-slate-600">
          <a href="#" className="text-xl hover:text-indigo-500">
            <span className="icon fa fa-facebook" />
          </a>
          <a href="#" className="text-xl hover:text-indigo-500">
            <span className="icon fa fa-twitter" />
          </a>
          <a
            href="https://www.instagram.com/vitohub/"
            className="text-xl hover:text-indigo-500"
          >
            <span className="icon fa fa-instagram" />
          </a>
        </div>

        {/* Mobile nav links */}
        <nav className="mt-2 flex flex-col">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`px-4 py-3 text-base font-medium tracking-wide ${
                active === item.href
                  ? "bg-indigo-500 text-white"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
