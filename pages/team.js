import React, { useState } from "react";
import Image from "next/image";
import heroimg_events from "@/public/heroimg_events.png";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Teams = () => {
  const [domain, setDomain] = useState("Tech");
  const [previousDomain, setPreviousDomain] = useState(null);
  const [direction, setDirection] = useState(null);

  const handleDomainChange = (selectedDomain) => {
    if (selectedDomain !== domain) {
      setPreviousDomain(domain);
      setDomain(selectedDomain);
      setDirection(selectedDomain > domain ? 'right' : 'left');
    }
  };

  const filteredLeads = leadData.filter((lead) => lead.domain === domain);
  const filteredMembers = membersData.filter((member) => member.domain === domain);
  const filteredAdmins = adminData.filter((admin) => admin.domain === domain);

  return (
    <>
      <section
        className="relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroimg_events.src})`,
          backgroundSize: "cover",
          position: "relative",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="flex justify-start items-center relative">
            <div className="text-left">
              <h1 className="text-6xl font-bold ml-20">
                Our <span className="text-bright_green">Team</span>
              </h1>
              <br />
              <p className="text-xl font-semibold ml-20 text-balance">
                The GitHub Community SRM introduces you to the dynamic and collaborative ecosystem of our diverse teams. Discover passionate individuals driving innovation in areas ranging from open-source contributions to cutting-edge tech projects. Meet our dedicated team members, explore their expertise, and learn about the exciting projects they're working on. Whether you're interested in coding, design, or community engagement, find your niche and connect with like-minded enthusiasts on our Teams page. Join us in shaping the future of technology at GitHub SRM!
              </p>
              <br />
              <br />
            </div>
          </div>

          <div className="flex justify-center items-center relative">
  <div className="flex flex-wrap justify-center gap-4">
    <button
      onClick={() => handleDomainChange("Tech")}
      className={`bg-bright_green text-blk font-semibold h-10 px-6 rounded-full my-2 md:my-6 shadow-lg transition-transform transform hover:scale-105 ${domain === "Tech" ? "border-2 border-white" : ""}`}
    >
      Tech
    </button>
    <button
      onClick={() => handleDomainChange("Corporate")}
      className={`bg-bright_green text-blk font-semibold h-10 px-6 rounded-full my-2 md:my-6 shadow-lg transition-transform transform hover:scale-105 ${domain === "Corporate" ? "border-2 border-white" : ""}`}
    >
      Corporate
    </button>
    <button
      onClick={() => handleDomainChange("Creatives")}
      className={`bg-bright_green text-blk font-semibold h-10 px-6 rounded-full my-2 md:my-6 shadow-lg transition-transform transform hover:scale-105 ${domain === "Creatives" ? "border-2 border-white" : ""}`}
    >
      Creatives
    </button>
    <button
      onClick={() => handleDomainChange("Content")}
      className={`bg-bright_green text-blk font-semibold h-10 px-6 rounded-full my-2 md:my-6 shadow-lg transition-transform transform hover:scale-105 ${domain === "Content" ? "border-2 border-white" : ""}`}
    >
      Content
    </button>
  </div>
</div>

          <TransitionGroup>
            <CSSTransition
              key={domain}
              timeout={500}
              classNames={{
                enter: "opacity-0",
                enterActive: "opacity-100 transition-opacity duration-500 ease-in-out",
                exit: "opacity-100",
                exitActive: "opacity-0 transition-opacity duration-500 ease-in-out",
              }}
            >
              <div>
                <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex justify-center items-center relative">
                  <h1 className="text-5xl font-bold">Admins</h1>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-4 md:mx-16">
                  {filteredAdmins.map((admin, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-bright_green border-4">
                        <Image src={admin.photo} alt={admin.name} width="150" height="150" />
                      </div>
                      <p className="text-lg font-semibold mt-2">{admin.name}</p>
                      <div className="flex justify-center mt-1">
                        <a href={admin.linkedin} className="mr-2">
                          <Image src="/linkedin.png" width="20" height="20" className="w-6 h-6" />
                        </a>
                        <a href={admin.github}>
                          <Image src="/instagram.png" width="20" height="20" className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex justify-center items-center relative">
                  <h1 className="text-5xl font-bold">Leads</h1>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-4 md:mx-16">
                  {filteredLeads.map((lead, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-bright_green border-4">
                        <Image src={lead.photo} alt={lead.name} width="150" height="150" />
                      </div>
                      <p className="text-lg font-semibold mt-2">{lead.name}</p>
                      <div className="flex justify-center mt-1">
                        <a href={lead.linkedin} className="mr-2">
                          <Image src="/linkedin.png" width="20" height="20" className="w-6 h-6" />
                        </a>
                        <a href={lead.github}>
                          <Image src="/instagram.png" width="20" height="20" className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex justify-center items-center relative">
                  <h1 className="text-5xl font-bold">Members</h1>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-4 md:mx-16">
                  {filteredMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-bright_green border-4">
                        <Image src={member.photo} alt={member.name} width="150" height="150" />
                      </div>
                      <p className="text-lg font-semibold mt-2">{member.name}</p>
                      <div className="flex justify-center mt-1">
                        <a href={member.linkedin} className="mr-2">
                          <Image src="/linkedin.png" width="20" height="20" className="w-6 h-6" />
                        </a>
                        <a href={member.github}>
                          <Image src="/instagram.png" width="20" height="20" className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </section>
    </>
  );
};

export default Teams;

// Sample data for admins
const adminData = [
  {
    name: "Admin 1",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Tech",
  },
  {
    name: "Admin 2",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Tech",
  },
  {
    name: "Admin 3",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Tech",
  },
  {
    name: "Admin 4",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Tech",
  },
  {
    name: "Admin 5",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Tech",
  },
  {
    name: "Admin 6",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Tech",
  },
  {
    name: "Admin 1",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Admin 2",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Admin 3",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Admin 4",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Admin 5",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Admin 6",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Admin 1",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Creatives",
  },
  {
    name: "Admin 2",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Creatives",
  },
  {
    name: "Admin 3",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Creatives",
  },
  {
    name: "Admin 4",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Creatives",
  },
  {
    name: "Admin 5",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Creatives",
  },
  {
    name: "Admin 6",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Creatives",
  },
  {
    name: "Admin 1",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Content",
  },
  {
    name: "Admin 2",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Content",
  },
  {
    name: "Admin 3",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Content",
  },
  {
    name: "Admin 4",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Content",
  },
  {
    name: "Admin 5",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Content",
  },
  {
    name: "Admin 6",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Content",
  },
];

// Sample data for leads
const leadData = [
  {
    name: "Lead 1",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Tech",
  },
  {
    name: "Lead 2",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Tech",
  },
  {
    name: "Lead 3",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Tech",
  },
  {
    name: "Lead 4",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Tech",
  },
  {
    name: "Lead 5",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Tech",
  },
  {
    name: "Lead 6",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Tech",
  },
  {
    name: "Lead 1",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Lead 2",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Lead 3",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Lead 4",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Lead 5",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Lead 6",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Lead 1",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Creatives",
  },
  {
    name: "Lead 2",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Creatives",
  },
  {
    name: "Lead 3",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Creatives",
  },
  {
    name: "Lead 4",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Creatives",
  },
  {
    name: "Lead 5",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Creatives",
  },
  {
    name: "Lead 6",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Creatives",
  },
  {
    name: "Lead 1",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Content",
  },
  {
    name: "Lead 2",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Content",
  },
  {
    name: "Lead 3",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Content",
  },
  {
    name: "Lead 4",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Content",
  },
  {
    name: "Lead 5",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Content",
  },
  {
    name: "Lead 6",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Content",
  }
];

// Sample data for members
const membersData = [
  {
    name: "Member 1",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Tech",
  },
  {
    name: "Member 2",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Tech",
  },
  {
    name: "Member 3",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Tech",
  },
  {
    name: "Member 4",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Tech",
  },
  {
    name: "Member 5",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Tech",
  },
  {
    name: "Member 6",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Tech",
  },
  {
    name: "Member 1",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Member 2",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Member 3",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Member 4",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Member 5",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Member 6",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Member 1",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Creatives",
  },
  {
    name: "Member 2",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Creatives",
  },
  {
    name: "Member 3",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Creatives",
  },
  {
    name: "Member 4",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Creatives",
  },
  {
    name: "Member 5",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Member 6",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Corporate",
  },
  {
    name: "Member 1",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Content",
  },
  {
    name: "Member 2",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Content",
  },
  {
    name: "Member 3",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Content",
  },
  {
    name: "Member 4",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Content",
  },
  {
    name: "Member 5",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Content",
  },
  {
    name: "Member 6",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    domain: "Content",
  },
];

export { adminData, leadData, membersData };
