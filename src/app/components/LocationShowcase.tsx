import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { MapPin, Plane, Train, Hotel, Anchor } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Coordinate constants
const PRANAVAYU_COORDS: [number, number] = [17.7128, 83.3113];

// Locations relative to Pranavayu
const locations = [
    {
        name: "Pranavayu",
        coords: PRANAVAYU_COORDS,
        icon: MapPin,
        type: "center",
    },
    {
        name: "Visakhapatnam Int. Airport",
        coords: [17.7283, 83.2223] as [number, number],
        dist: "~12 km",
        icon: Plane,
        labelPos: "-top-0 left-4"
    },
    {
        name: "Visakhapatnam Railway Station",
        coords: [17.7259, 83.2974] as [number, number],
        dist: "~4 km",
        icon: Train,
        labelPos: "-top-6 left-1/2 -translate-x-1/2"
    },
    {
        name: "RK Beach",
        coords: [17.7138, 83.3275] as [number, number],
        dist: "~2 km",
        icon: Anchor,
        labelPos: "top-3 right-0" // bottom right
    },
    {
        name: "Novotel Varun Beach",
        coords: [17.7156, 83.3286] as [number, number],
        dist: "~2 km",
        icon: Hotel,
        labelPos: "-top-6 left-1/2 -translate-x-1/2" // top center
    },
    {
        name: "INS Kursura Museum",
        coords: [17.7169, 83.3347] as [number, number],
        dist: "~3 km",
        icon: Anchor,
        labelPos: "top-1 left-3" // right side
    },
];

export function LocationShowcase() {
    const mapRef = useRef<HTMLDivElement>(null);
    const leafletMap = useRef<L.Map | null>(null);

    useEffect(() => {
        if (!mapRef.current) return;

        if (!leafletMap.current) {
            leafletMap.current = L.map(mapRef.current, {
                center: PRANAVAYU_COORDS,
                zoom: 13.5,
                zoomControl: false,
                scrollWheelZoom: false,
                dragging: false,
                doubleClickZoom: false,
                boxZoom: false,
                keyboard: false,
                attributionControl: false, // Cleaner look
            });

            // CartoDB Positron (light grey land, soft water, minimal roads)
            L.tileLayer(
                "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
                {
                    subdomains: "abcd",
                    maxZoom: 20,
                }
            ).addTo(leafletMap.current);

            // Add center marker
            const centerIcon = L.divIcon({
                className: "custom-div-icon",
                html: `
            <div class="relative flex items-center justify-center pointer-events-none">
            <div class="absolute w-12 h-12 bg-[#0FACA3]/20 rounded-full animate-ping"></div>
            <div class="absolute w-8 h-8 bg-[#0FACA3]/40 rounded-full"></div>
            <div class="relative w-4 h-4 bg-[#0FACA3] rounded-full border-2 border-white shadow-lg"></div>
            <div class="absolute top-6 right-2 whitespace-nowrap bg-white px-3 py-1.5 rounded-lg shadow-md text-[#1a3a4a] text-[13px] font-semibold mt-2 z-30">
              Pranavayu Rehabilitation
            </div>
          </div>
        `,
                iconSize: [30, 30],
                iconAnchor: [15, 15],
            });
            L.marker(PRANAVAYU_COORDS, { icon: centerIcon }).addTo(leafletMap.current);

            // Only display the center marker as requested
        }

        return () => {
            // Cleanup map on unmount
            if (leafletMap.current) {
                leafletMap.current.remove();
                leafletMap.current = null;
            }
        };
    }, []);

    return (
        <section className="py-16 lg:py-24 bg-[#f8fafb]">
            <div className="max-w-6xl mx-auto px-5 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-[#0FACA3] text-[11px] tracking-[0.15em] uppercase mb-4">
                        Strategic Location
                    </p>
                    <h2 className="text-[#1a3a4a] mb-4 text-[24px] lg:text-[32px]" style={{ fontWeight: 600 }}>
                        Heart of Visakhapatnam
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-[15px]" style={{ lineHeight: 1.7 }}>
                        Conveniently situated in Maharanipeta, Pranavayu offers easy access from major transit hubs
                        and premier accommodations along the beautiful Bay of Bengal coastline.
                    </p>
                </motion.div>

                {/* Horizontal Layout Container */}
                <div className="bg-white rounded-[24px] shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden border border-gray-100 flex flex-col lg:flex-row h-[600px] lg:h-[500px]">
                    {/* Map Side */}
                    <div className="w-full lg:w-3/5 h-[300px] lg:h-full relative bg-[#e5e7eb]">
                        <div ref={mapRef} className="absolute inset-0 z-0" style={{ background: "#f0f2f5" }} />

                        {/* Overlay Gradient for seamless integration */}
                        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 hidden lg:block pointer-events-none" />
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-10 lg:hidden pointer-events-none" />
                    </div>

                    {/* List Side */}
                    <div className="w-full lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center bg-white z-20">
                        <h3 className="text-[#1a3a4a] text-[18px] mb-8" style={{ fontWeight: 600 }}>
                            Distances from Pranavayu
                        </h3>

                        <div className="space-y-6">
                            {locations
                                .filter((l) => l.type !== "center")
                                .map((loc, i) => {
                                    const Icon = loc.icon;
                                    return (
                                        <motion.div
                                            key={loc.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 * i }}
                                            className="flex items-center justify-between group"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-[#f6f9fc] text-[#0B4D6E] flex items-center justify-center group-hover:bg-[#0B4D6E] group-hover:text-white transition-colors">
                                                    <Icon size={18} strokeWidth={1.5} />
                                                </div>
                                                <span className="text-gray-700 text-[14.5px]" style={{ fontWeight: 500 }}>
                                                    {loc.name}
                                                </span>
                                            </div>
                                            <div className="bg-[#f6f9fc] px-3 py-1.5 rounded-full text-[#0FACA3] text-[12px]" style={{ fontWeight: 600 }}>
                                                {loc.dist}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                        </div>

                        {/* Directions Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-8 pt-6 border-t border-gray-100"
                        >
                            <a
                                href="https://maps.app.goo.gl/1jt95g8eiEcfarxB9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-4 bg-[#0FACA3] text-white rounded-xl hover:bg-[#0b827b] transition-all font-medium text-[15px] shadow-lg shadow-[#0FACA3]/20"
                            >
                                <MapPin size={18} />
                                Get Directions to Pranavayu
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
