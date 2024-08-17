import React from "react";
import ContactForm from "@/components/Contact/ContactForm";
import Faq from "@/components/Contact/Faq";
import heroimg_events from "@/public/heroimg_events.png";

const Contact = () => {
    return (
        <div className="mt-0 top-0 overflow-x-hidden bg-bg_black">
            <ContactForm />
            <div>
                <Faq />
            </div>
        </div>
    );
};

export default Contact;
