import React from 'react';
import Image from 'next/image';

const profileCard = ({ photo, name, linkedin, github }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-bright_green border-4">
                <Image src={photo} alt={name} width="180" height="180" />
            </div>
            <p className="text-lg font-semibold mt-2">{name}</p>
            <div className="flex justify-center mt-1">
                <a href={linkedin} target='_blank' className="mr-2">
                    <Image src="/linkedin.png" width="20" height="20" className="w-6 h-6" />
                </a>
                <a href={github} target='_blank'>
                    <Image src="/instagram.png" width="20" height="20" className="w-6 h-6" />
                </a>
            </div>
        </div>

        // <a href="#" className="group relative block bg-black rounded-xl">
        //     <img
        //         alt="Profile Image"
        //         src={photo}
        //         className="absolute inset-0 h-52 w-52 object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl"
        //     />

        //     <div className="relative p-4 sm:p-6 lg:p-8">
        //         <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

        //         <p className="text-xl font-bold text-white sm:text-2xl">{name}</p>

        //         <div className="mt-32 sm:mt-48 lg:mt-64">
        //             <div
        //                 className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
        //             >
        //                 <p className="text-sm text-white">
        //                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
        //                     quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </a>
    );
};

export default profileCard;
