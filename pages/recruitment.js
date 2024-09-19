import React, { useState } from 'react';
import FormSub from '@/components/Recruitments/FormSub';
import heroimg_events from "@/public/heroimg_events.png";
import recruitmentpos from "@/public/recruitmentpos.jpg";
import Hero from '@/components/Recruitments/Hero';
function recruitment() {
    return (
        <>
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

            <FormSub />

        </>
    );
}

export default recruitment;
