import React from "react";
import ContactForm from "@/components/Contact/ContactForm";
import heroimg_events from "@/public/heroimg_events.png";

const Contact = () => {
    return (
        <div
            className="mt-0 top-0 overflow-x-hidden pb-80"
            style={{
                backgroundImage: `url(${heroimg_events.src})`,
                backgroundSize: "cover",
                position: "relative",
                backgroundAttachment: "fixed",
                opacity: 1
            }}
        >
            <ContactForm />
        </div>
    );
};

export default Contact;
