import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Faq = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="bg-event_gray text-white my-8 p-4  rounded-lg mx-20">
    <p className="text-5xl text-center my-5 pb-10 font-bold">Frequently Asked Questions</p>
  
    <Accordion
      variant="splitted"
      className="bg-gray-900 rounded-lg"
    >
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title={<div className="text-center py-4 px-6 rounded-md">What is GitHub Community SRM</div>}
        className="text-white text-lg pl-[40px] mx-[160px] rounded-3xl font-semibold  border-transparent hover:border hover:border-bright_green hover:shadow-md hover:shadow-bright_green"
      >
        <div className="p-4 text-center text-gray-300">{defaultContent}</div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title={<div className="text-center py-4 px-6 rounded-md">How can I join the Community</div>}
        className="text-white  pl-[40px] mx-[160px] rounded-3xl text-lg font-semibold  border-transparent hover:border hover:border-bright_green hover:shadow-md hover:shadow-bright_green"
      >
        <div className="p-4 text-center text-gray-300">{defaultContent}</div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title={<div className="text-center py-4 px-6 rounded-md">How Often does GitHub SRM organize events</div>}
        className="text-white text-lg  pl-[40px] mx-[160px] rounded-3xl font-semibold   hover:border hover:border-bright_green hover:shadow-md hover:shadow-bright_green"
      >
        <div className="p-4 text-center text-gray-300">{defaultContent}</div>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 4"
        title={<div className="text-center py-4 px-6 rounded-md">How can I stay updated to the events</div>}
        className="text-white  pl-[40px] mx-[160px] rounded-3xl text-lg font-semibold  border-transparent hover:border hover:border-bright_green hover:shadow-md hover:shadow-bright_green"
      >
        <div className="p-4 text-center text-gray-300">{defaultContent}</div>
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Accordion 5"
        title={<div className="text-center py-4 px-6 rounded-md">What are the roles available</div>}
        className="text-white  pl-[40px] mx-[160px] rounded-3xl text-lg font-semibold  border-transparent hover:border hover:border-bright_green hover:shadow-md hover:shadow-bright_green"
      >
        <div className="p-4 text-center text-gray-300">{defaultContent}</div>
      </AccordionItem>
      <AccordionItem
        key="6"
        aria-label="Accordion 6"
        title={<div className="text-center py-4 px-6 rounded-md">More FAQs</div>}
        className="text-white  pl-[40px] mx-[160px] rounded-3xl text-lg font-semibold  border-transparent hover:border hover:border-bright_green hover:shadow-md hover:shadow-bright_green"
      >
        <div className="p-4 text-center text-gray-300">{defaultContent}</div>
      </AccordionItem>
    </Accordion>
  </div>
  
  );
};

export default Faq;
