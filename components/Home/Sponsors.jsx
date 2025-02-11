import React from 'react';
import { useEffect, useState } from "react";
// const sponsors = [
//     { name: "SWOC", logo: "https://res.cloudinary.com/doslhy0tq/image/upload/v1729971260/SWOC_mfzb98.png" },
//     { name: "Linux Foundation", logo: "https://www.linuxfoundation.org/hubfs/lf-stacked-color.svg" },
//     { name: "Genxyz", logo: "https://res.cloudinary.com/doslhy0tq/image/upload/v1729540377/xyz-logo-color_mrldu1.svg" }
// ];

const Sponsors = () => {
    const [sponsors, setSponsors] = useState([]);
    useEffect(() => {
        const fetchSponsors = async () => {
            try {
                const response = await fetch("../api/v1/sponsers");
                const result = await response.json(); 
                console.log("hello")
                setSponsors(result.data);
            } catch (error) {
                console.error("Error fetching sponsors:", error);
            }
        };

        fetchSponsors();
    }, []);

    return (
        <div className="py-12 text-center mb-10">
            <h2 className="text-4xl text-white mb-10 font-bold font-poppins">Sponsors</h2>
            <div className="flex flex-wrap justify-center items-center gap-10 rounded-xl">
                {sponsors.map((sponsor, index) => (
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
                ))}
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
            `}</style>
        </div>
    );
}

export default Sponsors;
