import {
  Lightbulb,
  Search,
  MessageCircle,
  LayoutDashboard,
  Users,
  Sparkles,
  Target,
  Rocket,
  Heart,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "IdeaVault | About",
  description:
    "Learn about IdeaVault — a modern platform to share, discover, and collaborate on startup ideas.",
};

const features = [
  {
    icon: Lightbulb,
    title: "Share Ideas",
    desc: "Post your startup concepts easily with a clean, intuitive form and let the community discover them.",
  },
  {
    icon: Search,
    title: "Smart Discovery",
    desc: "Find ideas by search and categories so you never miss the next big concept.",
  },
  {
    icon: MessageCircle,
    title: "Nested Comments",
    desc: "Discuss, give feedback, and collaborate through a full comment system on every idea.",
  },
  {
    icon: LayoutDashboard,
    title: "Personal Dashboard",
    desc: "Track your ideas, interactions, and activity from a dedicated user space.",
  },
];

const values = [
  {
    icon: Target,
    title: "Innovation First",
    desc: "We believe every great product starts with a raw idea. IdeaVault gives those ideas a home.",
  },
  {
    icon: Users,
    title: "Community Driven",
    desc: "Builders, students, and entrepreneurs come together to explore, improve, and ship ideas.",
  },
  {
    icon: Heart,
    title: "Open & Inclusive",
    desc: "Whether you’re a first-time founder or an experienced builder, your ideas are welcome here.",
  },
];

const AboutPage = () => {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden pb-12 sm:pb-16 space-y-12 sm:space-y-16 md:space-y-20">
      {/* Ambient glow — constrained so it doesn’t cause horizontal scroll */}
      <div
        className="absolute -top-20 sm:-top-32 left-1/2 -translate-x-1/2 w-[min(100vw,420px)] sm:w-[500px] md:w-[600px] h-[200px] sm:h-[280px] md:h-[300px] bg-blue-500/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] pointer-events-none"
        aria-hidden
      />

      {/* Hero */}
      <section className="relative z-10 text-center w-full max-w-3xl mx-auto px-1 sm:px-2 pt-2 sm:pt-4">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-base-200 border border-base-content/10 text-xs sm:text-sm font-semibold text-base-content/70 mb-4 sm:mb-6">
          <Sparkles size={14} className="text-blue-500 shrink-0" />
          About IdeaVault
        </div>

        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] break-words">
          Where Ideas Find{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Their Home
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-base-content/70 font-medium leading-relaxed max-w-2xl mx-auto px-1">
          IdeaVault is a modern idea-sharing platform built for creators,
          developers, and entrepreneurs. Share your thoughts, explore others’
          concepts, and turn imagination into real-world impact.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center justify-center gap-3 sm:gap-4 w-full max-w-md xs:max-w-none mx-auto">
          <Link
            href="/ideas"
            className="w-full xs:w-auto text-center px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm sm:text-base font-bold shadow-lg shadow-blue-500/20 hover:opacity-90 active:scale-[0.98] transition-all"
          >
            Explore Ideas
          </Link>
          <Link
            href="/addIdea"
            className="w-full xs:w-auto text-center px-5 sm:px-6 py-3 rounded-xl border border-base-content/15 bg-base-200 text-sm sm:text-base font-bold text-base-content/90 hover:bg-base-300 active:scale-[0.98] transition-all"
          >
            Share Your Idea
          </Link>
        </div>
      </section>

      {/* Mission */}
      <section className="relative z-10 w-full max-w-4xl mx-auto px-0">
        <div className="rounded-2xl sm:rounded-3xl border border-base-content/10 bg-base-200/60 backdrop-blur-sm p-5 sm:p-8 md:p-10 shadow-xl">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Rocket
              size={18}
              className="text-blue-500 shrink-0 sm:w-5 sm:h-5"
            />
            <h2 className="text-[10px] sm:text-xs font-black tracking-wider text-base-content/40 uppercase">
              Our Mission
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-base-content/90 leading-relaxed">
            We bridge the gap between raw imagination and world-changing
            execution. IdeaVault gives every idea a place to be seen, discussed,
            and improved — so the next breakthrough doesn’t stay locked in
            someone’s notes.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 w-full">
        <div className="text-center mb-6 sm:mb-10 px-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">
            What You Can Do
          </h2>
          <p className="mt-2 text-sm sm:text-base text-base-content/60 font-medium">
            Everything you need to share and grow ideas in one place
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {features.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-base-content/10 bg-base-200/50 p-5 sm:p-6 hover:border-blue-500/30 hover:bg-base-200 transition-all duration-300 min-w-0"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
                <item.icon
                  size={20}
                  className="text-blue-500 sm:w-[22px] sm:h-[22px]"
                />
              </div>
              <h3 className="font-bold text-base-content mb-1.5 sm:mb-2 text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-base-content/65 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 w-full">
        <div className="text-center mb-6 sm:mb-10 px-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">
            What We Stand For
          </h2>
          <p className="mt-2 text-sm sm:text-base text-base-content/60 font-medium">
            The principles behind IdeaVault
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-base-content/10 bg-base-100 p-5 sm:p-7 text-center sm:text-left min-w-0"
            >
              <div className="inline-flex w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-base-200 items-center justify-center mb-3 sm:mb-4">
                <item.icon
                  size={22}
                  className="text-purple-500 sm:w-6 sm:h-6"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-base-content/65 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="relative z-10 w-full max-w-3xl mx-auto text-center px-1">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-2 sm:mb-3">
          Built with Modern Stack
        </h2>
        <p className="text-sm sm:text-base text-base-content/60 font-medium mb-5 sm:mb-8">
          Fast, secure, and ready for real users
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {[
            "Next.js",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT Auth",
            "Tailwind CSS",
            "Vercel",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold bg-base-200 border border-base-content/10 text-base-content/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 w-full">
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-base-content/10 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10 p-6 sm:p-10 md:p-14 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-snug">
            Ready to share your next big idea?
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-base-content/70 font-medium max-w-xl mx-auto">
            Join IdeaVault today. Post ideas, explore others, and be part of a
            community that builds the future.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4 max-w-md xs:max-w-none mx-auto">
            <Link
              href="/register"
              className="w-full xs:w-auto text-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm sm:text-base font-bold shadow-lg shadow-purple-500/20 hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Get Started Free
            </Link>
            <Link
              href="/ideas"
              className="w-full xs:w-auto text-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-base-100 border border-base-content/15 text-sm sm:text-base font-bold hover:bg-base-200 active:scale-[0.98] transition-all"
            >
              Browse Ideas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
