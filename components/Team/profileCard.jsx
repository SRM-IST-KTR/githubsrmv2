import React from "react";
import Image from "next/image";

const profileCard = ({ photo, name, caption, socials }) => {

    const { linkedin, github, instagram } = socials || {};
    return (
        // <div className="flex flex-col items-center">
        //     <div className="w-24 h-24 rounded-full overflow-hidden border-bright_green border-4">
        //         <Image src={photo} alt={name} width="180" height="180" />
        //     </div>
        //     <p className="text-lg font-semibold mt-2">{name}</p>
        //     <div className="flex justify-center mt-1">
        //         <a href={linkedin} target='_blank' className="mr-2">
        //             <Image src="/linkedin.png" width="20" height="20" className="w-6 h-6" />
        //         </a>
        //         <a href={github} target='_blank'>
        //             <Image src="/instagram.png" width="20" height="20" className="w-6 h-6" />
        //         </a>
        //     </div>
        // </div>

        <div className="group relative block rounded-3xl h-60 w-60">
            <div className="absolute inset-0 bg-black rounded-3xl filter drop-shadow-glow"></div>

            <div className="relative z-10 outline-2 border-gradient bg-black rounded-3xl h-full w-full">
                <img
                    alt="Profile Pic"
                    src={photo}
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-50 rounded-3xl"
                />

                <div className="relative p-4 sm:p-6 lg:p-4">
                    <p
                        className="font-medium font-poppins text-white sm:text-lg"
                        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                    >
                        {name}
                    </p>

                    <div className=" mt-32 font-dmSans">
                        <div className="translate-y-2 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 flex flex-col items-center">
                            <p className="text-center text-white">{caption}</p>
                            <div className="flex justify-between mb-2 space-x-2">
                                {/* Conditionally render only if the social link exists */}
                                {linkedin && (
                                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                        <Image
                                            src="/linkedin.png"
                                            width="20"
                                            height="20"
                                            className="w-6 h-6"
                                            alt="LinkedIn"
                                        />
                                    </a>
                                )}
                                {github && (
                                    <a href={github} target="_blank" rel="noopener noreferrer">
                                        <Image
                                            src="/github_logo.png"
                                            width="20"
                                            height="20"
                                            className="w-6 h-6"
                                            alt="GitHub"
                                        />
                                    </a>
                                )}
                                {instagram && (
                                    <a href={instagram} target="_blank" rel="noopener noreferrer">
                                        <Image
                                            src="/instagram.png"
                                            width="20"
                                            height="20"
                                            className="w-6 h-6"
                                            alt="Instagram"
                                        />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .drop-shadow-glow {
                    filter: drop-shadow(0 0 8px rgba(13, 255, 78, 0.6));
                    transition: filter 0.3s ease-in-out;
                }

                .group:hover .drop-shadow-glow {
                    filter: drop-shadow(0 0 12px rgba(13, 255, 78, 0.8));
                }
            `}</style>
        </div>
    );
};

export default profileCard;