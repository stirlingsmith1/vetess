import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', path: '/' },
  { label: 'Job Board', path: '/job-board' },
  { label: 'For Veterans', path: '/for-veterans' },
  { label: 'For Employers', path: '/for-employers' },
  { label: 'About', path: '/about' },
  { label: 'Donate', path: '/donate' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 bg-navy-700 border-b-[2.5px] border-crimson-700 shadow-nav">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-10">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-gold-500 text-base">★</span>
            <span className="font-display text-xl font-black tracking-wide text-white">
              Vetess
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="rounded-md px-3.5 py-1.5 text-sm font-medium text-white/70 transition-all duration-150 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-md border border-white/30 px-4 py-2 text-sm text-white transition-all hover:bg-white/10">
              Sign In
            </button>
            <button className="rounded-md bg-crimson-700 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-crimson-500">
              Get Started Free
            </button>
          </div>

          <button
            type="button"
            className="text-white md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 bg-navy-900 px-6 md:hidden">
          <button
            type="button"
            className="absolute right-5 top-5 text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-2xl font-medium text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-4 flex flex-col gap-3">
            <button className="rounded-md border border-white/30 px-5 py-3 text-white">
              Sign In
            </button>
            <button className="rounded-md bg-crimson-700 px-5 py-3 font-semibold text-white">
              Get Started Free
            </button>
          </div>
        </div>
      )}
    </>
  )
}