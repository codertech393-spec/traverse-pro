import Hero from "../components/sections/Hero";
import { Link } from "react-router-dom";

type Testimonial = {
  name: string;
  date: string;
  message: string;
  rating: number;
};

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1 text-yellow-400">
    {Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.158c.969 0 1.371 1.24.588 1.81l-3.366 2.447a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.366-2.447a1 1 0 00-1.176 0l-3.366 2.447c-.784.57-1.838-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.07 9.382c-.783-.57-.38-1.81.588-1.81h4.158a1 1 0 00.95-.69l1.286-3.955z" />
      </svg>
    ))}
  </div>
);
const Home = () => {
      const stats = [
    {
      icon: "📈",
      value: "6.71M",
      label: "Monthly Active Users",
      subtext: "Google Analytics",
      bg: "bg-purple-600",
    },
    {
      icon: "📦",
      value: "1.8M",
      label: "Packages Tracked Today",
      subtext: "Last 24 hours",
      bg: "bg-orange-600",
    },
    {
      icon: "📊",
      value: "11.1M",
      label: "Packages This Week",
      subtext: "Last 7 days",
      bg: "bg-green-600",
    },
    {
      icon: "⚡",
      value: "45.6K",
      label: "Shipments Tracked Per Hour",
      subtext: "Current volume",
      bg: "bg-blue-600",
    },
    {
      icon: "⚡",
      value: "1200 per minute",
      label: "Tracking Activity Range",
      subtext: "870–1800 per minute",
      bg: "bg-teal-600",
    },
    {
      icon: "🌐",
      value: "2260 carriers",
      label: "Global Carrier Coverage",
      subtext: "Worldwide networks",
      bg: "bg-indigo-600",
    },
  ]

    const features = [
    {
      icon: "🧠",
      title: "Smart Multi-Carrier Chain Tracking",
      description: "Follow the complete logistics journey",
    },
    {
      icon: "🔍",
      title: "AI-Powered Final Mile Detection",
      description: "Never lose sight of your package",
    },
    {
      icon: "🌐",
      title: "2260 Carriers Worldwide",
      description: "Global coverage, local expertise",
    },
    {
      icon: "⚡",
      title: "Pattern Learning Technology",
      description: "Gets smarter with every package",
    },
  ]

  const testimonials: Testimonial[] = [
  {
    name: "Debs W.",
    date: "September 28, 2025",
    message:
      "This is, hands-down, the best tracking app I've encountered (and I've used a lot of them). Thank you so much!",
    rating: 5,
  },
  {
    name: "Faisal S.",
    date: "August 16, 2024",
    message:
      "I have tried others and yours is able to track things the others can't. Good job. I will promote this on Reddit forums.",
    rating: 5,
  },
  {
    name: "Bruce P.",
    date: "January 21, 2024",
    message:
      "What an excellent tool the parcel tracker is. Whoever put the time into this deserves many accolades.",
    rating: 5,
  },
  {
    name: "Eveline van D.",
    date: "May 28, 2025",
    message:
      "Just wanted to thank you for making the Traverse Pro website. It works so well. Thank you very much.",
    rating: 5,
  },
  {
    name: "Joe C.",
    date: "September 20, 2023",
    message:
      "UPS tracking in the United States is really terrible. So much better than what UPS provides. Just wanted to say it's great.",
    rating: 5,
  },
  {
    name: "Nick E.",
    date: "July 12, 2025",
    message:
      "Totally loving this app — great idea, and better implementation.",
    rating: 5,
  },
];

    return (
       <>
       <Hero />
   <section className="relative overflow-hidden bg-gradient-to-b from-[#1B2740] via-[#16213A] to-[#0F172A] text-white py-20 px-6 md:px-16">
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_70%)]" />
<div className="relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Processing Millions of Packages Daily</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Live statistics from our global tracking infrastructure – these numbers update in real-time
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#2A3A5F] p-6 rounded-xl flex flex-col gap-3 shadow-md hover:shadow-lg transition"
          >
            <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${stat.bg} text-white`}>
              {stat.icon}
            </div>
            <span className="text-2xl font-bold">{stat.value}</span>
            <span className="font-medium">{stat.label}</span>
            <span className="text-gray-400 text-sm">{stat.subtext}</span>
          </div>
        ))}
      </div>

      <p className="text-gray-500 text-center text-xs mt-8">
        Stats updated in real-time from our global tracking infrastructure
      </p>
</div>

    </section>

    {/* features section */}
<section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#0B132B] to-[#020617] text-white py-20 px-6 md:px-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Why Choose Traverse Pro?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Advanced AI-powered tracking that goes beyond what traditional services offer
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1B263B] p-6 rounded-xl flex flex-col gap-3 hover:shadow-lg transition"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-blue-700 rounded-lg text-white text-lg">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Detailed Example Box */}
      <div className="bg-[#1B263B] p-6 rounded-xl text-gray-200">
        <h3 className="font-bold text-lg mb-3">Smart Multi-Carrier Chain Tracking</h3>
        <p className="mb-3">
          When DHL eCommerce hands your package to YunExpress, and YunExpress transfers it to Poste
          Italiane, our AI automatically discovers each new tracking number. No more dead ends when
          carriers say "delivered to next carrier."
        </p>

        <div className="bg-[#111B33] p-4 rounded-md text-sm">
          <p className="font-semibold mb-2">Real Example:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Start: DHL eCommerce: EEUS0219988571T0 → Italy</li>
            <li>Handoff: YunExpress: YT2526670359001122</li>
            <li>Final: Poste Italiane: 9C90891163923</li>
          </ul>
          <p className="text-blue-400 mt-2">
            Other services stop at step 1. We track all 3 carriers automatically.
          </p>
        </div>
      </div>
    </section>

  <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#0B132B] to-[#020617] px-4 py-20 text-white">
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),transparent_70%)]" />
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Loved by Users Worldwide
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            See what our users have to say
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 shadow-lg backdrop-blur transition hover:border-white/20"
            >
              <Stars count={item.rating} />

              <p className="mt-4 text-sm leading-relaxed text-slate-200">
                {item.message}
              </p>

              <div className="mt-6">
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-slate-400">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

   <section className="relative overflow-hidden bg-[#020617] px-4 py-24 text-white">
      {/* subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.2),transparent_70%)]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
          Experience Smart Tracking Today
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Join thousands of users who track their packages with confidence.
          Track any shipment, from any carrier, anywhere in the world.
        </p>

        <div className="mt-10">
      <Link to="/track">
  <button
    className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 text-sm font-medium text-white shadow-lg shadow-purple-600/30 transition hover:scale-[1.02] hover:shadow-purple-600/50 active:scale-[0.98]"
  >
    Track your shipment
  </button>
</Link>
        </div>
      </div>
    </section>
       </>
    )
}

export default Home