import { useState } from "react";
import VeteranIntakeModal from "../components/VeteranIntakeModal";

export default function ForVeterans() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    
    
    <section className="min-h-screen bg-[#f8f5f1] px-4 py-12 md:px-8">
      
       {/* my page container */}   

      <div className="mx-auto max-w-6xl">
       
       
       {/* hero section */}
       
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
            Support for Veterans
          </p>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#1f1f1f] md:text-5xl">
            Built to support your next step
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-[#5f5f5f] md:text-lg">
            Vetess is here to help you transition into civilian life with real
            support, better job preparation, and opportunities that actually make sense for you.
          </p>
        </div>

            {/* here are the support cards */}


        <div className="mb-16 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-[#e7dfd4] bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-[#1f1f1f]">
              Transition Support
            </h2>
            <p className="text-sm leading-6 text-[#555]">
              Moving out of the military can feel like a lot. This helps you understand
              what comes next and how to navigate it without feeling lost.
            </p>
          </article>

          <article className="rounded-3xl border border-[#e7dfd4] bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-[#1f1f1f]">
              Job Readiness
            </h2>
            <p className="text-sm leading-6 text-[#555]">
              Get your resume right, understand what employers are looking for,
              and feel more confident going into interviews.
            </p>
          </article>

          <article className="rounded-3xl border border-[#e7dfd4] bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-[#1f1f1f]">
              Career Growth
            </h2>
            <p className="text-sm leading-6 text-[#555]">
              This isn’t just about getting a job. It’s about building something long-term
              that actually works for your life.
            </p>
          </article>
        </div>
    

            {/* how it works section */}


        <div className="mb-16 rounded-3xl border border-[#e7dfd4] bg-white p-6 shadow-sm md:p-10">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
              How it works
            </p>
            <h2 className="text-3xl font-bold text-[#1f1f1f]">
              Simple steps to get started
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#fcfbf8] p-5">
              <p className="mb-2 text-sm font-semibold text-[#8b6f47]">01</p>
              <h3 className="mb-2 text-lg font-semibold text-[#1f1f1f]">
                Tell us what you need
              </h3>
              <p className="text-sm leading-6 text-[#555]">
                Start with your goals and what kind of support you’re looking for.
              </p>
            </div>
        
            <div className="rounded-2xl bg-[#fcfbf8] p-5">
              <p className="mb-2 text-sm font-semibold text-[#8b6f47]">02</p>
              <h3 className="mb-2 text-lg font-semibold text-[#1f1f1f]">
                Explore your options
              </h3>
              <p className="text-sm leading-6 text-[#555]">
                Look through opportunities and resources that actually fit your background.
              </p>
            </div>

            <div className="rounded-2xl bg-[#fcfbf8] p-5">
              <p className="mb-2 text-sm font-semibold text-[#8b6f47]">03</p>
              <h3 className="mb-2 text-lg font-semibold text-[#1f1f1f]">
                Take the next step
              </h3>
              <p className="text-sm leading-6 text-[#555]">
                Move forward with more direction and confidence in what you’re doing.
              </p>
            </div>
          </div>
        </div>

               {/* tried to make call to action section */}
        <div className="rounded-3xl border border-[#e7dfd4] bg-white p-8 text-center shadow-sm md:p-10">
          <h2 className="mb-4 text-3xl font-bold text-[#1f1f1f]">
            Ready to see what’s out there?
          </h2>

          <p className="mx-auto mb-6 max-w-2xl text-sm leading-6 text-[#555] md:text-base">
            Check out available opportunities and start figuring out what your next move looks like.
          </p>

          <a
            href="/job-board"
            className="inline-flex items-center justify-center rounded-full bg-[#9b7a46] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >

            View Job Board
          </a>
        </div>
      </div>
    <div className="mx-auto max-w-[1200px] px-5 py-12 md:py-20 md:px-10">
      <div className="flex flex-col items-center">
        <h1 className="font-display text-3xl md:text-5xl font-black text-navy-700 text-center leading-tight">
          Services for Veterans
        </h1>

        <p className="mt-4 text-base md:text-lg text-ink-body text-center max-w-2xl">
          Comprehensive support designed specifically for veterans and military
          families transitioning to civilian careers.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center w-full md:w-auto">
          <a
            href="/job-board"
            className="mt-8 md:mt-10 w-full md:w-auto text-center inline-block rounded-md bg-crimson-700 px-10 py-4 text-sm font-semibold !text-white transition-all hover:bg-crimson-500 active:scale-95 shadow-md"
    <section className="bg-[#f7f4ef] px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* page intro / action trigger */}
        <div className="text-center">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a6b4a]">
            Veteran Intake
          </p>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#1f2f6b] md:text-6xl">
            Start Your Next Step with Vetess
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-[#5f5f5f] md:text-base">
            Share a few details to help us understand your goals and what kind of support you need.
          </p>

          {/* open modal button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center rounded-full bg-[#9b7a46] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Start Intake Form
          </button>

        {/* hero section (already built by jacob) */}
        {/* this is the top intro area with the main heading and text.
            i didn’t touch this since it was already assigned */}

        {/* services / next steps section */}
        {/* this section follows the figma design.
            even though it says "our services", it also works as
            a way to guide the user on what they can do next */}

        <div className="rounded-[1.5rem] bg-[#f3eee3] px-6 py-14 md:px-10">

          {/* section header */}
          {/* this is just the label, main title, and short description.
              kept it centered and spaced out to match the figma */}
          <div className="mb-12 text-center">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a6b4a]">
              OUR SERVICES
            </p>

            <h2 className="mb-4 text-3xl font-bold leading-tight text-[#1f2f6b] md:text-5xl">
              Everything You Need to Land Your Next Role
            </h2>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-[#6a6a6a] md:text-base">
              Comprehensive support designed to guide veterans, active duty,
              and military families toward the right resources.
            </p>
          </div>

          {/* cards section */}
          {/* using a grid so everything lines up evenly and stacks on mobile */}
          <div className="grid gap-6 md:grid-cols-3">

            {/* card 1 - job board */}
            {/* this lets users go look at open jobs */}
            <article className="rounded-[1.25rem] border border-[#e4d8c4] bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-2xl font-semibold text-[#1f2f6b]">
                Explore Opportunities
              </h3>

              <p className="mb-6 text-sm leading-7 text-[#555]">
                Browse open roles and see what opportunities line up with your goals,
                experience, and next move.
              </p>

              <a
                href="/job-board"
                className="inline-flex rounded-full bg-[#9b7a46] px-5 py-2.5 text-sm font-medium text-white"
              >
                View Job Board
              </a>
            </article>

            {/* card 2 - about */}
            {/* this is for learning more about the platform */}
            <article className="rounded-[1.25rem] border border-[#e4d8c4] bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-2xl font-semibold text-[#1f2f6b]">
                Learn More About Vetess
              </h3>

              <p className="mb-6 text-sm leading-7 text-[#555]">
                Get a better understanding of the mission behind the platform
                and how it is built to support veterans.
              </p>

              <a
                href="/about"
                className="inline-flex rounded-full border border-[#9b7a46] px-5 py-2.5 text-sm font-medium text-[#5a4a2f]"
              >
                Learn More
              </a>
            </article>

            {/* card 3 - donate */}
            {/* this lets users support the mission */}
            <article className="rounded-[1.25rem] border border-[#e4d8c4] bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-2xl font-semibold text-[#1f2f6b]">
                Support the Mission
              </h3>

              <p className="mb-6 text-sm leading-7 text-[#555]">
                Help support the work being done to connect veterans with better
                opportunities, guidance, and resources.
              </p>

              <a
                href="/donate"
                className="inline-flex rounded-full bg-[#9b7a46] px-5 py-2.5 text-sm font-medium text-white"
              >
                Donate
              </a>
            </article>

          </div>
        </div>

      </div>

      {/* intake modal */}
      <VeteranIntakeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}