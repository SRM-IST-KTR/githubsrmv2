import React from "react";
import Image from "next/image";
import heroimg_events from "@/public/heroimg_events.png";

const Teams = () => {
  return (
    <>
      <section
        className="relative"
        style={{
          backgroundImage: `url(${heroimg_events.src})`,
          backgroundSize: "cover",
          position: "relative",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="flex justify-start items-center relative">
            <div className="text-left">
              <h1 className="text-6xl font-bold ml-20">Our <span style={{ color: "#0DFF4E" }}>Team</span></h1>
              <br></br>
              <p className="text-xl font-semibold ml-20 text-balance">The GitHub SRM introduces you to the dynamic and collaborative ecosystem of our diverse teams. Discover passionate individuals driving innovation in areas ranging from open-source contributions to cutting-edge tech projects. Meet our dedicated team members, explore their expertise, and learn about the exciting projects they're working on. Whether you're interested in coding, design, or community engagement, find your niche and connect with like-minded enthusiasts on our Teams page. Join us in shaping the future of technology at GitHub SRM!</p>
              <br></br>
              <br></br>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex justify-center items-center relative">
            <h1 className="text-5xl font-bold">Admins</h1>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-8 mx-4 md:mx-16">
            {adminData.map((admin, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-bright_green border-4">
                  <Image src={admin.photo} alt={admin.name} width='150' height='150'/>
                </div>
                <p className="text-lg font-semibold mt-2">{admin.name}</p>
                <div className="flex justify-center mt-1">
                  <a href={admin.linkedin} className="mr-2">
                    <Image src="/linkedin.jpg" width='20' height='20'className="w-6 h-6" />
                  </a>
                  <a href={admin.github}>
                    <Image src="/github.png" width='20' height='20' className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex justify-center items-center relative">
            <h1 className="text-5xl font-bold">Leads</h1>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-8 mx-4 md:mx-16">
            {leadData.map((lead, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-bright_green border-4">
                  <Image src={lead.photo} alt={lead.name} width='150' height='150'/>
                </div>
                <p className="text-lg font-semibold mt-2">{lead.name}</p>
                <div className="flex justify-center mt-1">
                  <a href={lead.linkedin} className="mr-2">
                    <Image src="/linkedin.jpg" width='20' height='20'className="w-6 h-6" />
                  </a>
                  <a href={lead.github}>
                    <Image src="/github.png" width='20' height='20' className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex justify-center items-center relative">
            <h1 className="text-5xl font-bold">Members</h1>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-8 mx-4 md:mx-16">
            {membersData.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-bright_green border-4">
                  <Image src={member.photo} alt={member.name} width='150' height='150'/>
                </div>
                <p className="text-lg font-semibold mt-2">{member.name}</p>
                <div className="flex justify-center mt-1">
                  <a href={member.linkedin} className="mr-2">
                    <Image src="/linkedin.jpg" width='20' height='20'className="w-6 h-6" />
                  </a>
                  <a href={member.github}>
                    <Image src="/github.png" width='20' height='20' className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
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
  },
  {
    name: "Admin 2",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Admin 3",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Admin 4",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Admin 5",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Admin 6",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  }
  // Add more admins as needed
];

const leadData = [
  {
    name: "Lead 1",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Lead 2",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Lead 3",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Lead 4",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Lead 5",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Lead 6",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  }
  // Add more admins as needed
];

const membersData = [
  {
    name: "Member 1",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Member 2",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Member 3",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Member 4",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Member 5",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Member 6",
    photo: "/user.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  }
];
