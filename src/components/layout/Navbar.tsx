import logo from "@/assets/logo-big.png"
import i18n from "@/lib/i18n"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()
  const { t, i18n: i18next } = useTranslation()

  const [menuOpen, setMenuOpen] = useState(false)

  const currentLang = i18next.language

  const changeLanguage = (lang: "id" | "en") => {
    i18n.changeLanguage(lang)
    localStorage.setItem("lang", lang)
  }

  const navItems = [
    { name: t("nav.capabilities"), path: "/capabilities" },
    { name: t("nav.work"), path: "/work" },
    { name: t("nav.company"), path: "/company" },
  ]

  return (
    <header className="border-b border-neutral-300 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between h-20">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="PT. Langit Strategi Indonesia"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12 text-sm tracking-wide font-medium">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-neutral-900 font-semibold"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-6">

          {/* Language Toggle */}
          <div className="hidden md:flex relative w-20 bg-neutral-100 rounded-full p-1 text-xs font-medium">
            <div
              className={`absolute top-1 bottom-1 w-8 rounded-full bg-white shadow-sm transition-all duration-300 ${
                currentLang === "id" ? "left-1" : "left-9"
              }`}
            />

            <button
              onClick={() => changeLanguage("id")}
              className="relative z-10 w-1/2 text-center text-neutral-700"
            >
              ID
            </button>

            <button
              onClick={() => changeLanguage("en")}
              className="relative z-10 w-1/2 text-center text-neutral-700"
            >
              EN
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          >
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black my-1 transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="container py-8 flex flex-col gap-6">

            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-neutral-800"
              >
                {item.name}
              </Link>
            ))}

            {/* Language Switch */}
            <div className="flex gap-4 pt-6 border-t border-neutral-200 text-sm">

              <button
                onClick={() => changeLanguage("id")}
                className={`${
                  currentLang === "id"
                    ? "font-semibold text-black"
                    : "text-neutral-500"
                }`}
              >
                Indonesia
              </button>

              <button
                onClick={() => changeLanguage("en")}
                className={`${
                  currentLang === "en"
                    ? "font-semibold text-black"
                    : "text-neutral-500"
                }`}
              >
                English
              </button>

            </div>
          </div>
        </div>
      )}
    </header>
  )
}