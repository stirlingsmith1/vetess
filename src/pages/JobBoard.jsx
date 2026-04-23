import { useState } from "react";

/* fake listings for data purposes */
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "ERA Solutions",
    location: "Remote",
    type: "Full-Time",
    tag: "Veteran Preferred",
    description:
      "Build everything that a user sees and interacts with on a webpage.",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "ERA Solutions",
    location: "Remote",
    type: "Full-Time",
    tag: "Veteran Preferred",
    description:
      "Build behind-the-scenes operations of a website or application.",
  },
  {
    id: 3,
    title: "Logistics Coordinator",
    company: "ERA Solutions",
    location: "San Antonio, TX",
    type: "Full-Time",
    tag: "SkillBridge",
    description:
      "Support scheduling, communication, and day-to-day team operations.",
  },
  {
    id: 4,
    title: "UX Designer",
    company: "ERA Solutions",
    location: "Remote",
    type: "Contract",
    tag: "SkillBridge",
    description:
      "Design simple and accessible digital experiences for users.",
  },
];

const filters = [
  "All",
  "Remote",
  "Full-Time",
  "Veteran Preferred",
  "SkillBridge",
];

/* search and filter functionality */
export default function JobBoard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      activeFilter === "All" ||
      (activeFilter === "Remote" && job.location === "Remote") ||
      (activeFilter === "Full-Time" && job.type === "Full-Time") ||
      (activeFilter === "Veteran Preferred" &&
        job.tag === "Veteran Preferred") ||
      (activeFilter === "SkillBridge" && job.tag === "SkillBridge");

    return matchesSearch && matchesFilter;
  });

  return (
    <section className="min-h-screen bg-[#f8f5f1] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* header */}
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
            Career Opportunities
          </p>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#1f1f1f] sm:text-4xl md:text-5xl">
            Find Your Next Opportunity
          </h1>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-[#5f5f5f] sm:text-base md:text-lg">
            Explore job opportunities built for veterans and transitioning
            service members.
          </p>
        </div>

        {/* here is the search and filters */}
        <div className="mb-10 rounded-3xl border border-[#e7dfd4] bg-white p-4 shadow-sm sm:p-5 md:mb-12 md:p-6">
          <label htmlFor="job-search" className="sr-only">
            Search jobs
          </label>

          <input
            id="job-search"
            type="text"
            placeholder="Search by job title, company, or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-2xl border border-[#d8d0c4] bg-[#fcfbf8] px-4 py-3 text-sm text-[#1f1f1f] outline-none transition placeholder:text-[#8a8175] focus:border-[#8b6f47] focus:ring-2 focus:ring-[#8b6f47]/10"
          />

          <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`min-h-[40px] rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-[#1f1f1f] text-white"
                      : "border border-[#d8d0c4] bg-white text-[#4f4f4f] hover:border-[#8b6f47] hover:text-[#1f1f1f]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* tried the results count */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-sm text-[#6b6b6b]">
            Showing{" "}
            <span className="font-semibold text-[#1f1f1f]">
              {visibleJobs.length}
            </span>{" "}
            {visibleJobs.length === 1 ? "job" : "jobs"}
          </p>
        </div>

        {/* cards for job listings */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {visibleJobs.length > 0 ? (
            visibleJobs.map((job) => (
              <article
                key={job.id}
                className="flex h-full flex-col rounded-3xl border border-[#e7dfd4] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#f3ede4] px-3 py-1 text-xs font-medium text-[#6f5738]">
                    {job.location}
                  </span>
                  <span className="rounded-full bg-[#f3ede4] px-3 py-1 text-xs font-medium text-[#6f5738]">
                    {job.type}
                  </span>
                  <span className="rounded-full bg-[#f3ede4] px-3 py-1 text-xs font-medium text-[#6f5738]">
                    {job.tag}
                  </span>
                </div>

                <h2 className="mb-2 text-xl font-semibold leading-snug text-[#1f1f1f]">
                  {job.title}
                </h2>

                <p className="mb-3 text-sm font-medium text-[#6b6b6b]">
                  {job.company}
                </p>

                <p className="text-sm leading-6 text-[#555]">
                  {job.description}
                </p>
              </article>
            ))
          ) : (
            <div className="rounded-3xl border border-dashed border-[#d8d0c4] bg-white px-6 py-10 text-center text-[#6b6b6b] md:col-span-2">
              No jobs matched your search or selected filter.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}