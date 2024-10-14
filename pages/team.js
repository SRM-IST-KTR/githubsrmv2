import React, { useState, useEffect } from "react";
import Hero from "@/components/Team/Hero";
import ProfileCard from "@/components/Team/profileCard";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Head from "next/head";
import { set } from "mongoose";

const ProfileSkeleton = () => {
    return (
        <div className="animate-pulse w-60 rounded-3xl">
            <div className="w-60 h-60 object-cover rounded-lg bg-gray-100" />
        </div>
    );
};

const Teams = () => {
    const [fetched, setFetched] = useState(false);
    const [convenor, setConvenor] = useState(null);
    const [president, setPresident] = useState(null);
    const [vp, setVp] = useState(null);

    const [admins, setAdmins] = useState([]);
    const [leads, setLeads] = useState([]);
    const [associates, setAssociates] = useState([]);
    const [members, setMembers] = useState([]);

    const [domain, setDomain] = useState("Technical");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("../api/v1/team");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();

                const convenorData = data.data.find(
                    (item) => item.position === "Convenor"
                );
                const presidentData = data.data.find(
                    (item) => item.position === "President"
                );
                const vpData = data.data.find(
                    (item) => item.position === "vicePresident"
                );

                const adminsData = data.data.filter(
                    (item) => item.position === "Admin"
                );
                const leadsData = data.data.filter(
                    (item) => item.position === "Lead"
                );
                const associatesData = data.data.filter(
                    (item) => item.position === "Associate"
                );
                const membersData = data.data.filter(
                    (item) => item.position === "Member"
                );

                setConvenor(convenorData);
                setPresident(presidentData);
                setVp(vpData);
                setAdmins(adminsData);
                setLeads(leadsData);
                setAssociates(associatesData);
                setMembers(membersData);
                setFetched(true);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleDomainChange = (selectedDomain) => {
        if (selectedDomain !== domain) {
            setDomain(selectedDomain);
        }
    };

    const filteredAdmins = admins.filter((admin) => admin.domain === domain);
    const filteredLeads = leads.filter((lead) => lead.domain === domain);
    const filteredAssociates = associates.filter((associates) => associates.domain === domain);
    const filteredMembers = members.filter(
        (member) => member.domain === domain
    );

    const generateKeywords = () => {
        const keywordsArray = [
            convenor?.name || "",
            president?.name || "",
            vp?.name || "",
            leads.length > 0 ? leads.map(lead => lead.name).join(", ") : "",
            associates.length > 0 ? associates.map(associate => associate.name).join(", ") : "",
            members.length > 0 ? members.map(member => member.name).join(", ") : "",
            "GitHub Community SRM team",
            "Technical domain",
            "Corporate domain",
            "Creative domain",
            "GitHub",
            "SRM",
            "SRMIST",
            "LinkedIn",
            "Instagram",
            "Open Source",
            "GitHub SRM community"
        ];
        return keywordsArray.filter(Boolean).join(", ");
    };

    return (
        <section className="bg-bg_black">
            <Head>
                <title>Meet the Team | GitHub Community SRM | Technical, Corporate, Creative</title>
                <meta name="description" content="Meet the GitHub Community SRM team, including President, Vice President, Leads, Associates, and Members from the Technical, Corporate, and Creative domains. Learn more about the talented individuals driving our open-source initiatives." />
                <meta name="keywords" content={generateKeywords()} />
                <meta property="og:title" content="Meet the Team | GitHub Community SRM | Technical, Corporate, Creative" />
                <meta property="og:description" content="Meet the team behind GitHub Community SRM, including the President, Vice President, Leads, Associates, and Members from the Technical, Corporate, and Creative domains." />
                <meta property="og:image" content="/public/Logo.png" />
                <meta property="og:url" content="https://githubsrmist.tech/team" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="/public/Logo.png" />
                <meta name="twitter:title" content="Meet the Team | GitHub Community SRM" />
                <meta name="twitter:description" content="Discover the talented individuals from the Technical, Corporate, and Creative domains at GitHub Community SRM, including Leads, Associates, and Members." />
                <meta name="twitter:image" content="/public/Logo.png" />
                <meta name="twitter:site" content="@GithubSrm" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "GitHub Community SRM",
                        "url": "https://githubsrmist.tech",
                        "logo": "/public/Logo.png",
                        "sameAs": [
                            "https://github.com/SRM-IST-KTR",
                            "https://www.linkedin.com/company/githubsrm",
                            "https://www.instagram.com/githubsrm/",
                            "https://twitter.com/GithubSrm"
                        ],
                        "employee": [
                            {
                                "@type": "Person",
                                "name": president?.name,
                                "jobTitle": "President",
                                "image": president?.pictureUrl,
                            },
                            {
                                "@type": "Person",
                                "name": vp?.name,
                                "jobTitle": "Vice President",
                                "image": vp?.pictureUrl,
                            },
                            ...leads.map(lead => ({
                                "@type": "Person",
                                "name": lead.name,
                                "jobTitle": `Lead - ${lead.domain}`,
                                "image": lead.pictureUrl,
                            })),
                            ...associates.map(associate => ({
                                "@type": "Person",
                                "name": associate.name,
                                "jobTitle": `Associate - ${associate.domain}`,
                                "image": associate.pictureUrl,
                            })),
                            ...members.map(member => ({
                                "@type": "Person",
                                "name": member.name,
                                "jobTitle": `Member - ${member.domain}`,
                                "image": member.pictureUrl,
                            }))
                        ]
                    })}
                </script>
            </Head>
            <Hero />
            <div className="text-white">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mt-16">
                    Convenor
                </h2>
                {!fetched ? (
                    <div className="flex justify-center mt-8">
                        <ProfileSkeleton />
                    </div>
                ) : (
                    <div className="flex justify-center mt-8">
                        <ProfileCard
                            photo={convenor.pictureUrl}
                            name={convenor.name}
                            caption={convenor.caption}
                            socials={convenor.socials}
                        />
                    </div>
                )}

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-16 p-8 mt-16">
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
                            President
                        </h2>
                        {!fetched ? (
                            <ProfileSkeleton />
                        ) : (
                            <ProfileCard
                                photo={president.pictureUrl}
                                name={president.name}
                                caption={president.caption}
                                socials={president.socials}
                            />
                        )}
                    </div>

                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
                            Vice President
                        </h2>
                        {!fetched ? (
                            <ProfileSkeleton />
                        ) : (
                            <ProfileCard
                                photo={vp.pictureUrl}
                                name={vp.name}
                                caption={vp.caption}
                                socials={vp.socials}
                            />
                        )}
                    </div>
                </div>
            </div>


            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="flex justify-center items-center relative text-black">
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => handleDomainChange("Technical")}
                            className={`bg-bright_green text-blk font-dmSans h-12 w-32 px-6 rounded-full my-2 md:my-6 shadow-lg transition-transform transform hover:scale-105 ${domain === "Technical"
                                ? " text-black bg-bright_green font-bold"
                                : "text-white bg-zinc-900 font-medium"
                                }`}
                        >
                            Technical
                        </button>
                        <button
                            onClick={() => handleDomainChange("Corporate")}
                            className={`bg-bright_green text-blk font-dmSans h-12 w-32 px-6 rounded-full my-2 md:my-6 shadow-lg transition-transform transform hover:scale-105 ${domain === "Corporate"
                                ? " text-black bg-bright_green font-bold"
                                : "text-white bg-zinc-900 font-medium"
                                }`}
                        >
                            Corporate
                        </button>
                        <button
                            onClick={() => handleDomainChange("Creatives")}
                            className={` text-blk font-dmSans h-12 w-32 px-6 rounded-full my-2 md:my-6 shadow-lg transition-transform transform hover:scale-105 ${domain === "Creatives"
                                ? " text-black bg-bright_green font-bold"
                                : "text-white bg-zinc-900 font-medium"
                                }`}
                        >
                            Creatives
                        </button>
                    </div>
                </div>

                <TransitionGroup className="flex flex-col items-center">
                    <CSSTransition
                        key={domain}
                        timeout={500}
                        classNames={{
                            enter: "opacity-0",
                            enterActive:
                                "opacity-100 transition-opacity duration-500 ease-in-out",
                            exit: "opacity-100",
                            exitActive:
                                "opacity-0 transition-opacity duration-500 ease-in-out"
                        }}
                    >
                        <div>
                            <div className="pt-16 md:p-4 lg:px-4 lg:pt-24">
                                <h1 className="text-2xl sm:text-4xl font-bold text-center text-white">
                                    Lead
                                </h1>
                            </div>
                            {!fetched ? (
                                <div className="flex justify-center flex-wrap gap-8 mt-8">
                                    {Array.from({ length: 2 }, (_, index) => (
                                        <div key={index} className="w-60">
                                            <ProfileSkeleton />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex justify-center flex-wrap gap-8 mt-8 mx-4 md:mx-16">
                                    {filteredLeads.map((leads, index) => (
                                        <ProfileCard
                                            key={index}
                                            photo={leads.pictureUrl}
                                            name={leads.name}
                                            caption={leads.caption}
                                            socials={leads.socials}
                                        />
                                    ))}
                                </div>
                            )}

                            <div className="pt-16 md:p-12 lg:px-16 lg:pt-24">
                                <h1 className="text-2xl sm:text-4xl font-bold text-center text-white">
                                    Associates
                                </h1>
                            </div>
                            {!fetched ? (
                                <div className="flex justify-center flex-wrap gap-8 mt-8">
                                    {Array.from({ length: 2 }, (_, index) => (
                                        <div key={index} className="w-60">
                                            <ProfileSkeleton />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex justify-center flex-wrap gap-8 mt-8 mx-4 md:mx-16">
                                    {filteredAssociates.map((associates, index) => (
                                        <ProfileCard
                                            key={index}
                                            photo={associates.pictureUrl}
                                            name={associates.name}
                                            caption={associates.caption}
                                            socials={associates.socials}
                                        />
                                    ))}
                                </div>
                            )}

                            <div className="pt-16 md:p-12 lg:px-16 lg:pt-24">
                                <h1 className="text-2xl sm:text-4xl font-bold text-center text-white">
                                    Members
                                </h1>
                            </div>
                            {!fetched ? (
                                <div className="flex justify-center flex-wrap gap-8 mt-8">
                                    {Array.from({ length: 2 }, (_, index) => (
                                        <div key={index} className="w-60">
                                            <ProfileSkeleton />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 mx-4 md:mx-16 justify-items-center">
                                <div className="flex justify-center flex-wrap gap-8 mt-8">
                                    {filteredMembers.map((member, index) => (
                                        <ProfileCard
                                            key={index}
                                            photo={member.pictureUrl}
                                            name={member.name}
                                            caption={member.caption}
                                            socials={member.socials}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </section>
    );
};

export default Teams;
