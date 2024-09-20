import React, { useState } from 'react';
import FormSub from '@/components/Recruitments/FormSub';
import heroimg_events from "@/public/heroimg_events.png";
import recruitmentpos from "@/public/recruitmentpos.jpg";
import DomainCard from '@/components/Recruitments/DomainCard';
import Hero from '@/components/Recruitments/Hero';
import { MdBuild, MdBusiness, MdBrush } from "react-icons/md"; // Icons for the domains
import Head from "next/head";
function recruitment() {
    const domains = [
        {
            domainName: "Technical",
            description:
                "Love tech? The Technical domain is where we build, code, and innovate. From web development to AI, push boundaries and create the future with us.",
            subDomains: ["Web Development", "App Development", "AIML", "Competitive Programming"],
            icon: <MdBuild />
        },
        {
            domainName: "Corporate",
            description:
                "Be the strategist behind the scenes! In the Corporate domain, you’ll manage operations, secure sponsorships, and handle PR to make things happen.",
            // subDomains: ["Operations", "Sponsorship", "Public Relations"],
            icon: <MdBusiness />
        },
        {
            domainName: "Creatives",
            description:
                "Got ideas? The Creatives domain is for designers, writers, and visual artists. Create content, craft designs, and bring visions to life.",
            subDomains: ["Graphic Design", "VFX"],
            icon: <MdBrush />
        }
    ];
    return (
        <div className='bg-bg_black'>
            <Head>
                <title>Recruitments | GitHub Community SRM</title>
                <meta
                    name="description"
                    content="Learn about GitHub Community SRM, the official student-led group at SRMIST, fostering a collaborative open-source culture."
                />
                <meta
                    name="keywords"
                    content="GitHub, SRMIST, Open Source, Coding, GitHub Community SRM, Development, Collaboration, recruitment, join, community, apply"
                />
                <meta name="author" content="GitHub Community SRM" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="canonical" href="https://githubsrmist.tech/recruitment" />

                <meta name="twitter:card" content="/public/x_logo.png" />
                <meta
                    name="twitter:title"
                    content="Recruitments - GitHub Community SRM"
                />
                <meta
                    name="twitter:description"
                    content="Discover the story behind GitHub Community SRM, a hub for collaborative open-source projects at SRMIST."
                />
                <meta name="twitter:image" content="/public/x_logo.png" />
                <meta name="twitter:site" content="@GithubSrm" />
                <meta
                    name="twitter:url"
                    content="https://githubsrmist.tech/recruitment"
                />

                <meta
                    property="og:title"
                    content="About Us - GitHub Community SRM"
                />
                <meta
                    property="og:description"
                    content="GitHub Community SRM is a space for collaboration and open-source innovation at SRMIST. Learn more about our journey."
                />
                <meta
                    property="og:url"
                    content="https://githubsrmist.tech/recruitment"
                />
                <meta property="og:image" content="/public/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="GitHub Community SRM" />
            </Head>
            <section
                className="relative mt-0 top-0 overflow-x-hidden"
                style={{
                    backgroundImage: `url(${heroimg_events.src})`,
                    position: "relative",
                    backgroundAttachment: "fixed"
                }}
            >
                <div className="bg-black/40 -top-8 lg:top-0 lg:p-8 md:p-12 lg:px-16 lg:py-24 flex justify-center items-center relative">
                    <div className="mt-10 relative z-10">
                        <Hero />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg_black"></div>
                </div>
            </section>

            <div className="bg-bg_black flex justify-center items-center p-6 lg:pb-16 lg:p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
                    {domains.map((domain, index) => (
                        <DomainCard
                            key={index}
                            domainName={domain.domainName}
                            description={domain.description}
                            subDomains={domain.subDomains}
                            icon={domain.icon}
                        />
                    ))}
                </div>
            </div>

            <FormSub />

        </div>
    );
}

export default recruitment;
