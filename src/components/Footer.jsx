import { Link } from 'react-router-dom'

const footerLinks = {
  'For Veterans': [
    'Resume Builder',
    'Job Board',
    'Career Coaching',
    'Mentorship',
    'Interview Prep',
  ],
  'For Employers': [
    'Post a Job',
    'Search Candidates',
    'Career Fairs',
    'Direct Placement',
  ],
  Organization: ['About Vetess', 'Our Team', 'Contact', 'Donate', 'Volunteer'],
}

export default function Footer() {
  return (
    <footer className="border-t-[2.5px] border-crimson-700 bg-navy-900 pt-[72px] pb-10">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="font-display text-2xl font-black text-white">
              ★ Vetess
            </div>

            <p className="mt-3 font-display text-sm italic text-white/45">
              Your Service. Your Career. Your Bridge.
            </p>

            {/* SIMPLE ICON PLACEHOLDERS */}
            <div className="mt-5 flex gap-3">
              {['in', '🌐', '✉️', '💼'].map((icon, index) => (
                <div
                  key={index}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-crimson-700"
                >
                  {icon}
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-white/30">
              🛡️ 501(c)(3) Nonprofit
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading}>
              <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.12em] text-gold-500">
                {heading}
              </h3>

              <div className="space-y-2">
                {items.map((item) => (
                  <p
                    key={item}
                    className="text-sm text-white/55 transition-colors duration-150 hover:text-white"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Vetess. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-3">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Accessibility</span>
            <Link
              to="/admin/login"
              className="text-white/20 transition hover:text-white/45"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}