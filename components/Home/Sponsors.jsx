import React from 'react';
import { useEffect, useState } from "react";
// const sponsors = [
//     { name: "SWOC", logo: "https://res.cloudinary.com/doslhy0tq/image/upload/v1729971260/SWOC_mfzb98.png" },
//     { name: "Linux Foundation", logo: "https://www.linuxfoundation.org/hubfs/lf-stacked-color.svg" },
//     { name: "Genxyz", logo: "https://res.cloudinary.com/doslhy0tq/image/upload/v1729540377/xyz-logo-color_mrldu1.svg" }
// ];

const Sponsors = () => {
    const [sponsors, setSponsors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSponsors = async () => {
            try {
                setLoading(true);

                // Add timeout to fetch request
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

                const response = await fetch("/api/v1/sponsers", {
                    signal: controller.signal
                });

                clearTimeout(timeoutId);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log("Sponsors fetched successfully");
                setSponsors(result.data || []);
            } catch (error) {
                console.error("Error fetching sponsors:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSponsors();
    }, []);

    // Skeleton component for loading state
    const SponsorSkeleton = () => (
        <div className="border-gradient rounded-xl">
            <div className="bg-bg_black p-4 rounded-xl shadow-md flex justify-center items-center h-36 w-36 lg:w-72 lg:h-64">
                <div className="animate-pulse bg-gray-600 rounded-md w-24 h-12 lg:w-48 lg:h-24"></div>
            </div>
        </div>
    );

    return (
        <div className="py-12 text-center mb-10">
            <h2 className="text-4xl text-white mb-10 font-bold font-poppins">Sponsors</h2>
            <div className="flex flex-wrap justify-center items-center gap-10 rounded-xl">
                {loading ? (
                    // Show 6 skeleton components while loading
                    Array.from({ length: 6 }, (_, index) => (
                        <SponsorSkeleton key={`skeleton-${index}`} />
                    ))
                ) : (
                    sponsors.map((sponsor, index) => (
                        <div
                            key={index}
                            className="border-gradient rounded-xl transition-transform duration-300 hover:drop-shadow-glow"
                        >
                            <div
                                className="bg-bg_black p-4 rounded-xl shadow-md flex justify-center items-center h-36 w-36 lg:w-72 lg:h-64"
                            >
                                <img
                                    src={sponsor.logo}
                                    alt={`${sponsor.name} Logo`}
                                    className="object-contain max-w-full max-h-full"
                                />
                            </div>
                        </div>
                    ))
                )}
            </div>

            <style jsx>{`
                .border-gradient {
                    border: 3px solid transparent;
                    filter: drop-shadow(0 0 10px rgba(13, 255, 78, 0.2));
                    transition: filter 0.3s ease-in-out; /* Ensure smooth transition */
                }

                .border-gradient:hover {
                    filter: drop-shadow(0 0 20px rgba(13, 255, 78, 1)); /* Stronger glow on hover */
                    transition: filter 0.3s ease-in-out; /* Smooth transition on hover */
                }

                @keyframes skeleton-pulse {
                    0%, 100% {
                        opacity: 0.6;
                    }
                    50% {
                        opacity: 0.3;
                    }
                }

                .animate-pulse {
                    animation: skeleton-pulse 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}

export default Sponsors;
