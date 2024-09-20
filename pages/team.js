import React, { useState, useEffect } from "react";
import Hero from "@/components/Team/Hero";
import ProfileCard from "@/components/Team/profileCard";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Head from "next/head";

const ProfileSkeleton = () => {
    return (
        <div className="animate-pulse w-60 rounded-3xl">
            <div className="w-60 h-60 object-cover rounded-lg bg-gray-100" />
        </div>
    );
};

const Teams = () => {
    const [fetched, setFetched] = useState(false);
    const [admins, setAdmins] = useState([]);
    const [leads, setLeads] = useState([]);
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

                const adminsData = data.data.filter(
                    (item) => item.position === "Admin"
                );
                const leadsData = data.data.filter(
                    (item) => item.position === "Lead"
                );
                const membersData = data.data.filter(
                    (item) => item.position === "Member"
                );

                setAdmins(adminsData);
                setLeads(leadsData);
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
    const filteredMembers = members.filter(
        (member) => member.domain === domain
    );

    return (
        <section className="bg-bg_black">
            <Head>
                <title>Meet the Team | GitHub Community SRM</title>
                <meta
                    name="description"
                    content="Meet the talented team behind GitHub Community SRM, including Admins, Leads, and Members from Technical, Corporate, Creatives, and Content domains."
                />
                <meta
                    name="keywords"
                    content={`${admins
                        .map((admin) => admin.name)
                        .join(", ")}, ${leads
                        .map((lead) => lead.name)
                        .join(", ")}, ${members
                        .map((member) => member.name)
                        .join(
                            ", "
                        )}, GitHub Community SRM team, Technical domain, Corporate domain, Creatives domain, Content domain, GitHub, LinkedIn, Instagram`}
                />

                <meta
                    property="og:title"
                    content="Meet the Team | GitHub Community SRM"
                />
                <meta
                    property="og:description"
                    content="Discover the GitHub Community SRM team."
                />
                <meta property="og:image" content="/public/logo.png" />
                <meta
                    property="og:url"
                    content="https://githubsrmist.tech/team"
                />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="/public/x_logo.png" />
                <meta
                    name="twitter:title"
                    content="Meet the Team | GitHub Community SRM"
                />
                <meta
                    name="twitter:description"
                    content="Discover the team behind GitHub Community SRM."
                />
                <meta name="twitter:image" content="/public/x_logo.png" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "GitHub Community SRM",
                        url: "https://githubsrmist.tech",
                        logo: "/public/logo.png",
                        sameAs: [
                            "https://www.github.com/SRM-IST-KTR",
                            "https://www.linkedin.com/company/githubsrm",
                            "https://www.instagram.com/githubsrm/",
                            "https://twitter.com/GithubSrm"
                        ],
                        employee: members.map((member) => ({
                            "@type": "Person",
                            name: member.name,
                            jobTitle: member.position,
                            image: member.pictureUrl,
                            url: `https://githubsrmist.tech/team/${member.name
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`,
                            sameAs: [
                                member.socials.github,
                                member.socials.linkedin,
                                member.socials.instagram,
                                member.socials.twitter
                            ]
                        }))
                    })}
                </script>
            </Head>
            <Hero />

            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="flex justify-center items-center relative text-black">
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => handleDomainChange("Technical")}
                            className={`bg-bright_green text-blk font-dmSans h-12 w-32 px-6 rounded-full my-2 md:my-6 shadow-lg transition-transform transform hover:scale-105 ${
                                domain === "Technical"
                                    ? " text-black bg-bright_green font-bold"
                                    : "text-white bg-zinc-900 font-medium"
                            }`}
                        >
                            Technical
                        </button>
                        <button
                            onClick={() => handleDomainChange("Corporate")}
                            className={`bg-bright_green text-blk font-dmSans h-12 w-32 px-6 rounded-full my-2 md:my-6 shadow-lg transition-transform transform hover:scale-105 ${
                                domain === "Corporate"
                                    ? " text-black bg-bright_green font-bold"
                                    : "text-white bg-zinc-900 font-medium"
                            }`}
                        >
                            Corporate
                        </button>
                        <button
                            onClick={() => handleDomainChange("Creatives")}
                            className={` text-blk font-dmSans h-12 w-32 px-6 rounded-full my-2 md:my-6 shadow-lg transition-transform transform hover:scale-105 ${
                                domain === "Creatives"
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
                                    Admins
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
                                    {filteredAdmins.map((admin, index) => (
                                        <ProfileCard
                                            key={index}
                                            photo={admin.pictureUrl}
                                            name={admin.name}
                                            caption={admin.caption}
                                            linkedin={admin.socials.linkedin}
                                            instagram={admin.socials.instagram}
                                            github={admin.socials.github}
                                        />
                                    ))}
                                </div>
                            )}

                            <div className="pt-16 md:p-12 lg:px-16 lg:pt-24">
                                <h1 className="text-2xl sm:text-4xl font-bold text-center text-white">
                                    Leads
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
                                    {filteredLeads.map((lead, index) => (
                                        <ProfileCard
                                            key={index}
                                            photo={lead.pictureUrl}
                                            name={lead.name}
                                            caption={lead.caption}
                                            linkedin={lead.socials.linkedin}
                                            instagram={lead.socials.instagram}
                                            github={lead.socials.github}
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
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-8 mt-8 mx-4 md:mx-16">
                                    {filteredMembers.map((member, index) => (
                                        <ProfileCard
                                            key={index}
                                            photo={member.pictureUrl}
                                            name={member.name}
                                            caption={member.caption}
                                            linkedin={member.socials.linkedin}
                                            instagram={member.socials.instagram}
                                            github={member.socials.github}
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
