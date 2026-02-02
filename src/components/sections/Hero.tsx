import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StatPill = ({
  color,
  text,
  label,
}: {
  color: "green" | "orange" | "blue";
  text: string;
  label: string;
}) => {
  const colors = {
    green: "text-green-400",
    orange: "text-orange-400",
    blue: "text-blue-400",
  };

  return (
    <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
      <span className={`font-semibold ${colors[color]}`}>{text}</span>
      <span className="text-slate-200">{label}</span>
    </div>
  );
};

const Hero: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const navigate = useNavigate();

  const handleTrack = () => {
    if (!trackingNumber.trim()) return;

    navigate(`/track?tn=${encodeURIComponent(trackingNumber.trim())}`);
  };

  return (
    <section className="relative overflow-hidden bg-[#0b1a4a] px-4 py-24 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),transparent_65%)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Headline */}
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          The Most Comprehensive
          <br />
          Package Tracking in the World
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
          Traverse Pro finds your package even when carriers change tracking
          numbers mid-transit.
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm">
          Stop losing packages in the logistics maze. Our intelligent tracking
          system follows your shipment through every carrier handoff, from
          shipping warehouse to your door.
        </p>

        {/* Social proof pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-xs sm:text-sm">
          <StatPill color="green" text="6.71M" label="monthly users" />
          <StatPill color="orange" text="1.86M" label="packages today" />
          <StatPill color="blue" text="45.6K" label="shipments/hour" />
        </div>

        {/* Search Input */}
        <div className="mx-auto mt-12 max-w-xl">
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleTrack()}
            placeholder="Enter tracking number"
            className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-sm text-white placeholder:text-slate-300 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <button
            onClick={handleTrack}
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 text-sm font-medium shadow-lg shadow-purple-600/30 transition hover:scale-[1.02] hover:shadow-purple-600/50 active:scale-[0.98]"
          >
            Track your shipment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
