import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  CheckCircle,
  Truck,
  MapPin,
  Package,
  Inbox,
} from "lucide-react";

/* ---------------- TYPES ---------------- */

type TrackingEvent = {
  id: number;
  staTus: string;
  location: string;
  timestamp: string;
};

type PackageData = {
  trackingNumber: string;
  staTus: string;
  currentLocation: string;
  destination: string;
  estimatedDelivery: string;
  carrierChain: string;
  trackingEvents: TrackingEvent[];
};

/* ---------------- CONFIG ---------------- */

const API_URL = "http://localhost:1337/api";

/* ---------------- ICON LOGIC ---------------- */

const getEventIcon = (status: string) => {
  const base = "h-5 w-5";

  if (status.toLowerCase().includes("delivered"))
    return <CheckCircle className={`${base} text-green-400`} />;

  if (status.toLowerCase().includes("out"))
    return <Truck className={`${base} text-blue-400`} />;

  if (status.toLowerCase().includes("transit"))
    return <MapPin className={`${base} text-blue-400`} />;

  if (status.toLowerCase().includes("transfer"))
    return <Package className={`${base} text-blue-400`} />;

  return <Inbox className={`${base} text-blue-400`} />;
};

/* ---------------- PAGE ---------------- */

const TrackingPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [pkg, setPkg] = useState<PackageData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
  const tn = searchParams.get("tn");
  if (tn) {
    setTrackingNumber(tn);
  }
}, [searchParams]);

useEffect(() => {
  if (trackingNumber) {
    fetchTracking();
  }
}, [trackingNumber]);



  const fetchTracking = async () => {
    if (!trackingNumber.trim()) return;

    setLoading(true);
    setError("");
    setPkg(null);

    try {
      const res = await fetch(
        `${API_URL}/packages?filters[trackingNumber][$eq]=${trackingNumber}&populate=trackingEvents`
      );

      const json = await res.json();

      if (!json.data || json.data.length === 0) {
        setError("Tracking number not found");
        return;
      }

      const data = json.data[0];

      // Sort events newest → oldest
      const sortedEvents = [...data.trackingEvents].sort(
        (a: TrackingEvent, b: TrackingEvent) =>
          new Date(b.timestamp).getTime() -
          new Date(a.timestamp).getTime()
      );

      setPkg({
        trackingNumber: data.trackingNumber,
        staTus: data.staTus,
        currentLocation: data.currentLocation,
        destination: data.destination,
        estimatedDelivery: data.estimatedDelivery,
        carrierChain: data.carrierChain,
        trackingEvents: sortedEvents,
      });
    } catch (err) {
      setError("Failed to load tracking information");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#020617] px-4 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <h1 className="text-3xl font-semibold mb-2">Tracking Details</h1>
        <p className="text-slate-400 mb-8">
          Track every step of your package journey
        </p>

        {/* Input */}
        <div className="flex gap-3 mb-10">
          <input
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Enter tracking number"
            className="flex-1 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm outline-none"
          />
          <button
            onClick={fetchTracking}
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-sm font-medium"
          >
            Track
          </button>
        </div>

        {loading && <p className="text-slate-400">Loading…</p>}
        {error && <p className="text-red-400">{error}</p>}

        {pkg && (
          <>
            {/* SUMMARY */}
            <div className="rounded-2xl bg-white/5 p-6 mb-10 border border-white/10">
              <p className="text-sm text-slate-400">Tracking Number</p>
              <p className="font-mono text-lg">{pkg.trackingNumber}</p>

              <div className="mt-4">
                <p
                  className={`font-medium ${
                    pkg.staTus.toLowerCase().includes("delivered")
                      ? "text-green-400"
                      : "text-blue-400"
                  }`}
                >
                  {pkg.staTus}
                </p>

                <p className="text-sm text-slate-300">
                  {pkg.currentLocation}
                </p>

                <p className="text-sm text-slate-400">
                  Estimated delivery: {pkg.estimatedDelivery}
                </p>
              </div>

              <div className="mt-4 text-sm text-slate-400">
                Carrier chain: {pkg.carrierChain}
              </div>
            </div>

            {/* TRACKING HISTORY */}
            <div className="relative rounded-2xl bg-white/5 p-6 border border-white/10">
              <h2 className="text-xl font-semibold mb-6">
                Tracking History
              </h2>

              {/* Vertical line */}
              <div className="absolute left-[45px] top-[72px] bottom-10 w-px bg-white/10" />

              <ul className="space-y-8">
                {pkg.trackingEvents.map((event) => (
                  <li key={event.id} className="relative flex gap-4">
                    {/* Icon */}
                    <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#0b1220] border border-white/10">
                      {getEventIcon(event.staTus)}
                    </div>

                    {/* Content */}
                    <div>
                      <p
                        className={`font-medium ${
                          event.staTus
                            .toLowerCase()
                            .includes("delivered")
                            ? "text-green-400"
                            : "text-blue-400"
                        }`}
                      >
                        {event.staTus}
                      </p>

                      <p className="text-sm text-slate-300">
                        {event.location}
                      </p>

                      <p className="text-xs text-slate-500 mt-1">
                        {new Date(event.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => {
                  setPkg(null);
                  setTrackingNumber("");
                }}
                className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 text-sm font-medium shadow-lg"
              >
                Track Another Package
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default TrackingPage;
