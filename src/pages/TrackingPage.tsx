import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  CheckCircle,
  Truck,
  MapPin,
  Package,
  Inbox,
  AlertTriangle,
} from "lucide-react";

/* ---------------- TYPES ---------------- */

type TrackingEvent = {
  id: number;
  staTus: string;
  location: string;
  timestamp: string;
  activity?: string;
};

type Party = {
  name: string;
  address: string;
};

type ShipmentItem = {
  quantity: number;
  weight: number;
  content: string;
};

type PackageData = {
  trackingNumber: string;
  staTus: string;
  currentLocation: string;
  destination: string;
  estimatedDelivery: string;
  carrierChain: string;
  trackingEvents: TrackingEvent[];

  // NEW (optional, safe)
  smartTrackingActive?: boolean;
  shipper?: Party;
  receiver?: Party;
  shipmentItems?: ShipmentItem[];
};

/* ---------------- CONFIG ---------------- */

const API_URL =
  "https://enduring-ducks-6d60e5bfb7.strapiapp.com/api";

/* ---------------- ICON LOGIC ---------------- */

const getEventIcon = (status: string) => {
  const s = status.toLowerCase();
  const base = "h-5 w-5";

  if (s.includes("delivered"))
    return <CheckCircle className={`${base} text-green-400`} />;

  if (s.includes("delayed"))
    return <AlertTriangle className={`${base} text-red-400`} />;

  if (s.includes("custom"))
    return <Package className={`${base} text-orange-400`} />;

  if (s.includes("departed") || s.includes("out"))
    return <Truck className={`${base} text-blue-400`} />;

  if (s.includes("transit"))
    return <MapPin className={`${base} text-blue-400`} />;

  if (s.includes("received"))
    return <Inbox className={`${base} text-blue-400`} />;

  return <Inbox className={`${base} text-slate-400`} />;
};

const getStatusColor = (status: string) => {
  const s = status.toLowerCase();

  if (s.includes("delivered")) return "text-green-400";
  if (s.includes("delayed")) return "text-red-400";
  if (s.includes("custom")) return "text-orange-400";

  return "text-blue-400";
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
    if (tn) setTrackingNumber(tn);
  }, [searchParams]);

  useEffect(() => {
    if (trackingNumber) fetchTracking();
  }, [trackingNumber]);

  const fetchTracking = async () => {
    setLoading(true);
    setError("");
    setPkg(null);

    try {
      const res = await fetch(
        `${API_URL}/packages?filters[trackingNumber][$eq]=${trackingNumber}&populate=*`
      );

      const json = await res.json();

      if (!json.data?.length) {
        setError("Tracking number not found");
        return;
      }

      const data = json.data[0];

      const sortedEvents = [...(data.trackingEvents || [])].sort(
        (a, b) =>
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

        smartTrackingActive: true,
        shipper: data.shipper,
        receiver: data.receiver,
        shipmentItems: data.shipmentItems,
      });
    } catch {
      setError("Failed to load tracking information");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#020617] px-4 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold mb-6">
          Tracking Details
        </h1>

        {/* INPUT */}
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
            <div className="rounded-2xl bg-white/5 p-6 mb-8 border border-white/10">
              <p className="text-sm text-slate-400">Tracking Number</p>
              <p className="font-mono text-lg mb-4">
                {pkg.trackingNumber}
              </p>

              <p className={`font-medium ${getStatusColor(pkg.staTus)}`}>
                {pkg.staTus}
              </p>

              <p className="text-sm text-slate-300">
                Current Location: {pkg.currentLocation}
              </p>

              <p className="text-sm text-slate-400">
                Estimated delivery: {pkg.estimatedDelivery}
              </p>

              <div className="my-4 h-px bg-white/10" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-400 mb-1">Carrier Chain</p>
                  <p className="text-slate-200">
                    {pkg.carrierChain}
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 mb-1">Destination</p>
                  <p className="text-slate-200">
                    {pkg.destination}
                  </p>
                </div>
              </div>
            </div>

            {/* SMART TRACKING */}
            {pkg.smartTrackingActive && (
              <div className="rounded-xl bg-blue-600/20 p-4 border border-blue-500/30 mb-10">
                <div className="flex gap-3">
                  <Package className="text-blue-400 mt-1" />
                  <div>
                    <p className="font-medium text-blue-400">
                      Smart Multi-Carrier Tracking Active
                    </p>
                    <p className="text-sm text-slate-300">
                      We’re automatically tracking your package across
                      multiple carriers including DHL eCommerce,
                      YunExpress, and USPS.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* SHIPMENT PROFILE */}
            {pkg.shipper && pkg.receiver && (
              <div className="rounded-2xl bg-white/5 p-6 mb-10 border border-white/10">
                <h2 className="text-lg font-semibold mb-6">
                  Shipment Profile
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="rounded-xl bg-blue-600/20 p-5 border border-blue-500/30">
                    <p className="font-medium mb-2">
                      Shipper Details
                    </p>
                    <p className="text-sm">
                      {pkg.shipper.name}
                    </p>
                    <p className="text-xs text-slate-300 mt-1">
                      {pkg.shipper.address}
                    </p>
                  </div>

                  <div className="rounded-xl bg-blue-600/20 p-5 border border-blue-500/30">
                    <p className="font-medium mb-2">
                      Receiver Details
                    </p>
                    <p className="text-sm">
                      {pkg.receiver.name}
                    </p>
                    <p className="text-xs text-slate-300 mt-1">
                      {pkg.receiver.address}
                    </p>
                  </div>
                </div>

                {pkg.shipmentItems && pkg.shipmentItems.length > 0 && (
                  <>
                    <p className="font-medium mb-4">
                      Shipment Content / Description
                    </p>

                    <table className="w-full text-sm">
                      <thead className="text-slate-400 border-b border-white/10">
                        <tr>
                          <th className="py-2 text-left">No</th>
                          <th className="py-2 text-left">Qty</th>
                          <th className="py-2 text-left">Weight</th>
                          <th className="py-2 text-left">Content</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pkg.shipmentItems.map((item, i) => (
                          <tr
                            key={i}
                            className="border-b border-white/5"
                          >
                            <td className="py-3">{i + 1}</td>
                            <td className="py-3">{item.quantity}</td>
                            <td className="py-3">
                              {item.weight} KG
                            </td>
                            <td className="py-3">{item.content}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
              </div>
            )}

            {/* TRACKING HISTORY */}
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <div className="grid grid-cols-2 bg-white text-black font-semibold px-6 py-4">
                <span>Tracking History</span>
                <span>Activity</span>
              </div>

              {pkg.trackingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`grid grid-cols-2 gap-6 px-6 py-6 ${
                    index % 2 === 0
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <div className="flex gap-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full border">
                      {getEventIcon(event.staTus)}
                    </div>
                    <div>
                      <p className="font-medium">{event.staTus}</p>
                      <p className="text-sm opacity-80">
                        {event.location}
                      </p>
                      <p className="text-xs opacity-60 mt-1">
                        {new Date(event.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="text-sm">
                    {event.activity || "—"}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default TrackingPage;