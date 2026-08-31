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
    <div className="relative pb-16 space-y-20">
      {/* Ambient glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero */}
      <section className="relative z-10 text-center max-w-3xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-base-200 border border-base-content/10 text-sm font-semibold text-base-content/70 mb-6">
          <Sparkles size={14} className="text-blue-500" />
          About IdeaVault
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
          Where Ideas Find{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Their Home
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-base-content/70 font-medium leading-relaxed max-w-2xl mx-auto">
          IdeaVault is a modern idea-sharing platform built for creators,
          developers, and entrepreneurs. Share your thoughts, explore others’
          concepts, and turn imagination into real-world impact.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/ideas"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg shadow-blue-500/20 hover:opacity-90 active:scale-[0.98] transition-all"
          >
            Explore Ideas
          </Link>
          <Link
            href="/addIdea"
            className="px-6 py-3 rounded-xl border border-base-content/15 bg-base-200 font-bold text-base-content/90 hover:bg-base-300 active:scale-[0.98] transition-all"
          >
            Share Your Idea
          </Link>
        </div>
      </section>

      {/* Mission */}
      <section className="relative z-10 max-w-4xl mx-auto">
        <div className="rounded-3xl border border-base-content/10 bg-base-200/60 backdrop-blur-sm p-8 sm:p-10 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <Rocket size={20} className="text-blue-500" />
            <h2 className="text-xs font-black tracking-wider text-base-content/40 uppercase">
              Our Mission
            </h2>
          </div>
          <p className="text-lg sm:text-xl font-semibold text-base-content/90 leading-relaxed">
            We bridge the gap between raw imagination and world-changing
            execution. IdeaVault gives every idea a place to be seen, discussed,
            and improved — so the next breakthrough doesn’t stay locked in
            someone’s notes.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            What You Can Do
          </h2>
          <p className="mt-2 text-base-content/60 font-medium">
            Everything you need to share and grow ideas in one place
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-base-content/10 bg-base-200/50 p-6 hover:border-blue-500/30 hover:bg-base-200 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <item.icon size={22} className="text-blue-500" />
              </div>
              <h3 className="font-bold text-base-content mb-2">{item.title}</h3>
              <p className="text-sm text-base-content/65 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            What We Stand For
          </h2>
          <p className="mt-2 text-base-content/60 font-medium">
            The principles behind IdeaVault
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-base-content/10 bg-base-100 p-7 text-center sm:text-left"
            >
              <div className="inline-flex w-12 h-12 rounded-2xl bg-base-200 items-center justify-center mb-4">
                <item.icon size={24} className="text-purple-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-base-content/65 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech / Built with */}
      <section className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
          Built with Modern Stack
        </h2>
        <p className="text-base-content/60 font-medium mb-8">
          Fast, secure, and ready for real users
        </p>
        <div className="flex flex-wrap justify-center gap-3">
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
              className="px-4 py-2 rounded-full text-sm font-bold bg-base-200 border border-base-content/10 text-base-content/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10">
        <div className="rounded-3xl overflow-hidden border border-base-content/10 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10 p-10 sm:p-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Ready to share your next big idea?
          </h2>
          <p className="mt-3 text-base-content/70 font-medium max-w-xl mx-auto">
            Join IdeaVault today. Post ideas, explore others, and be part of a
            community that builds the future.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg shadow-purple-500/20 hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Get Started Free
            </Link>
            <Link
              href="/ideas"
              className="px-7 py-3.5 rounded-xl bg-base-100 border border-base-content/15 font-bold hover:bg-base-200 active:scale-[0.98] transition-all"
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
