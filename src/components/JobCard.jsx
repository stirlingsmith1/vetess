export default function JobCard({ job }) {
  const badgeStyles = {
    "Veteran Preferred":
      "border border-[#e7c9cb] bg-[#f8e9ea] text-[#9b3f46]",
    "Security Clearance":
      "border border-[#d4d9e5] bg-[#edf0f6] text-[#4e5d82]",
    "Remote OK":
      "border border-[#d4d9e5] bg-[#edf0f6] text-[#4e5d82]",
    Remote: "border border-[#d4d9e5] bg-[#edf0f6] text-[#4e5d82]",
    Leadership: "border border-[#e5ddd1] bg-[#f4eee4] text-[#6b655d]",
    "Military Spouse OK":
      "border border-[#e5ddd1] bg-[#f4eee4] text-[#6b655d]",
    Relocation: "border border-[#e5ddd1] bg-[#f4eee4] text-[#6b655d]",
    "Sign-On Bonus":
      "border border-[#e5ddd1] bg-[#f4eee4] text-[#6b655d]",
    SkillBridge: "border border-[#e5ddd1] bg-[#f4eee4] text-[#6b655d]",
  };

  const initial = job.company?.charAt(0)?.toUpperCase() || "J";

  return (
    <article
      className="
        flex min-h-[300px] flex-col rounded-[18px]
        border border-[#ddd2bf] border-l-[3px] border-l-[#d2c5b0]
        bg-white px-4 py-4
        shadow-[0_2px_6px_rgba(27,31,59,0.05)]
        transition-all duration-200 ease-out
        hover:-translate-y-[2px]
        hover:shadow-[0_8px_18px_rgba(27,31,59,0.08)]
        hover:border-[#d6cbb8]
      "
      style={{ fontFamily: '"DM Sans", sans-serif' }}
    >
      {/* top */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#f3eee5] text-xs font-semibold text-[#6b665e]">
          {initial}
        </div>

        <button
          type="button"
          aria-label={`Save ${job.title}`}
          className="text-[16px] leading-none text-[#9c968d] transition hover:text-[#2a3560]"
        >
          ♡
        </button>
      </div>

      {/* company */}
      <p className="text-[14px] text-[#8a837a]">{job.company}</p>

      {/* title */}
      <h3
        className="mt-1.5 text-[18px] leading-[1.2] text-[#243463]"
        style={{
          fontFamily: '"Playfair Display", serif',
          fontWeight: 600,
        }}
      >
        {job.title}
      </h3>

      {/* meta */}
      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] text-[#7a746c]">
        <span>📍 {job.location}</span>
        <span>◔ {job.type}</span>
      </div>

      {/* salary */}
      <p className="mt-2 text-[14px] text-[#7a746c]">
        💵 {job.salary}
      </p>

      <div className="my-4 h-px w-full bg-[#eee7db]" />

      {/* tags */}
      <div className="flex flex-wrap gap-2">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-[4px] px-2.5 py-[4px] text-[10px] font-medium ${badgeStyles[tag]}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* apply */}
      <button
        type="button"
        className="
          mt-4 text-left text-[14px] text-[#8d2227]
          transition-all duration-200 ease-out
          hover:translate-x-[2px]
          hover:text-[#a12a30]
        "
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 700,
        }}
      >
        Apply →
      </button>
    </article>
  );
}
