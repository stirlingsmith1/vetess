const stats = [
  { number: '47k+', label: 'Veterans Placed' },
  { number: '2,400+', label: 'Employers Hiring Now' },
  { number: '94%', label: 'Hired in 90 Days' },
  { number: '$0', label: 'Cost to Veterans' },
]

const services = [
  {
    title: 'Resume Builder',
    text: 'AI-powered tools translate military experience into civilian language employers understand.',
  },
  {
    title: 'Career Coaching',
    text: 'One-on-one guidance from coaches who understand military transition.',
  },
  {
    title: 'Veteran Job Board',
    text: 'Browse active roles from employers intentionally seeking veteran talent.',
  },
  {
    title: 'Interview Prep',
    text: 'Practice interviews and feedback to build confidence and stronger stories.',
  },
  {
    title: 'Mentorship Network',
    text: 'Connect with veterans who have already made the transition successfully.',
  },
  {
    title: 'Salary Coaching',
    text: 'Understand market value and confidently negotiate your next offer.',
  },
]

const testimonials = [
  {
    name: 'Sgt. Marcus Reed',
    role: 'US Army Veteran',
    quote:
      'Vetess coach translated 8 years as an Army Intelligence Officer into language civilian employers actually understood.',
    placement: 'Placed: Language Analyst @ Booz Allen Hamilton',
  },
  {
    name: 'Jennifer Walsh',
    role: 'Military Spouse',
    quote:
      'As a military spouse who moved often, Vetess helped me build a career story instead of a messy list of jobs.',
    placement: 'Placed: UX Designer @ Dell Technologies',
  },
  {
    name: 'Cpl. Devon Torres',
    role: 'USMC Veteran',
    quote:
      'Mock interviews were game-changing. I stopped answering like a Marine and started answering like a professional.',
    placement: 'Placed: Program Manager @ FedEx',
  },
]

export default function Home() {
  return (
    <div className="bg-sand-0">
      <section className="bg-sand-100 pt-16 md:pt-22">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 pb-12 md:px-10 lg:grid-cols-2">
          <div>
            <span className="mb-6 inline-block rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
              Serving Those Who Served
            </span>

            <h1 className="font-display text-5xl font-black leading-tight text-navy-700 md:text-[68px] md:leading-[1.04]">
              Find Your Next
              <span className="block italic text-crimson-700 underline decoration-gold-500 decoration-3 underline-offset-4">
                Mission.
              </span>
              <span className="block">In Civilian Life.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-ink-body md:text-lg">
              Vetess connects veterans, active duty members, and military spouses
              with employers who understand the value of your service.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-md bg-crimson-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-crimson-500">
                Get Started Free
              </button>
              <button className="rounded-md border border-navy-700 px-5 py-3 text-sm font-semibold text-navy-700 transition hover:bg-navy-700 hover:text-white">
                Browse 2,400+ Jobs
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-ink-muted">
              <span>✓ 100% Free for Veterans</span>
              <span>✓ 47,000+ Placed</span>
              <span>✓ No Login to Browse</span>
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-[20px] bg-white shadow-hero">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Veterans and professionals working together"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="border-y border-sand-200 bg-white py-8">
          <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-10 px-5 md:gap-16 md:px-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-4xl font-medium text-navy-700 md:text-[48px]">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm text-ink-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-0 py-20">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.12em] text-crimson-700">
            Our Services
          </p>
          <h2 className="mt-4 text-center font-display text-4xl font-black text-navy-700">
            Everything You Need to Land Your Next Role
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-ink-muted">
            Comprehensive support designed specifically for veterans, active duty,
            and military families.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-sand-200 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-lifted"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-xl">
                  ✦
                </div>
                <h3 className="font-display text-2xl font-bold text-navy-700">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-body">{service.text}</p>
                <p className="mt-5 text-sm font-semibold text-navy-700">Learn more →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-100 py-20">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.12em] text-crimson-700">
            Success Stories
          </p>
          <h2 className="mt-4 text-center font-display text-4xl font-black text-navy-700">
            Veterans Who Found Their Path
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-ink-muted">
            Real stories from service members who successfully transitioned to civilian careers.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-2xl border border-sand-200 bg-white p-8 shadow-card">
                <div className="mb-4 text-gold-500">★★★★★</div>
                <p className="font-display text-lg italic leading-8 text-navy-900">
                  “{item.quote}”
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-navy-900">{item.name}</p>
                  <p className="text-sm text-ink-muted">{item.role}</p>
                  <p className="mt-2 text-xs font-semibold text-gold-700">
                    {item.placement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-navy-700 px-8 py-14 md:px-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gold-500">
            For Veterans & Military Spouses
          </p>
          <h3 className="mt-4 font-display text-4xl font-bold text-white">
            Translate Your Service Into Success
          </h3>
          <p className="mt-4 max-w-xl text-white/80">
            Access tools and support designed specifically for veterans making the transition.
          </p>
          <ul className="mt-6 space-y-3 text-white/85">
            <li>✓ Resume Builder</li>
            <li>✓ Career Coaching</li>
            <li>✓ Mentorship</li>
            <li>✓ Placement</li>
          </ul>
          <button className="mt-8 rounded-md bg-crimson-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-crimson-500">
            Start Your Journey
          </button>
        </div>

        <div className="bg-sand-100 px-8 py-14 md:px-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-crimson-700">
            For Employers & Companies
          </p>
          <h3 className="mt-4 font-display text-4xl font-bold text-navy-700">
            Hire Leaders Who Are Mission-Proven
          </h3>
          <p className="mt-4 max-w-xl text-ink-body">
            Connect with disciplined, talented veteran candidates ready to contribute immediately.
          </p>
          <ul className="mt-6 space-y-3 text-ink-body">
            <li>✓ Talent Database</li>
            <li>✓ Career Fairs</li>
            <li>✓ Direct Placement</li>
            <li>✓ Tools</li>
          </ul>
          <button className="mt-8 rounded-md bg-navy-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-600">
            Post a Job Free
          </button>
        </div>
      </section>

      <section className="bg-sand-0 px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[1200px] rounded-[20px] bg-crimson-700 px-8 py-10 shadow-hero md:flex md:items-center md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gold-300">
              Support Our Mission
            </p>
            <h3 className="mt-3 font-display text-4xl font-black text-white">
              Help Us Serve More Veterans
            </h3>
            <p className="mt-3 max-w-2xl text-white/85">
              Your donation directly funds free career services for veterans and military families.
            </p>
          </div>

          <button className="mt-6 rounded-md bg-white px-5 py-3 text-sm font-semibold text-crimson-700 transition hover:bg-sand-100 md:mt-0">
            Donate Today ♥
          </button>
        </div>
      </section>
    </div>
  )
}