{/* 
bright_green: "#0DFF4E"  -> added in tailwind.config.js
border bright_green gradient -> "#00E43D"
border dark_green gradient -> "#006600"
*/}

import { DM_Sans } from 'next/font/google'
const dmsans = DM_Sans({
    subsets: ['latin'],
    display: 'swap',
})

const PastEvents = () => {
    return (
        <div className={`block outline-2 outline-white p-4 rounded-lg w-[472px] ${dmsans.className}`}>
            <div className="relative">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWgelHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    className="h-[472px] w-[472px] object-cover rounded-lg border-gradient filter drop-shadow-glow"
                />
            </div>

            <div className="flex items-center mt-4">
                <h3 className="text-lg font-bold text-white sm:text-xl py-2 px-4 pl-0">Event Name</h3>
                <button className="ml-auto filter bg-bright_green hover:bg-green-700 text-black font-bold h-9 w-40 rounded">Get Certificate</button>
            </div>

            <style jsx>{`
                .border-gradient {
                    border: 5px solid transparent;
                    background: linear-gradient(to bottom, #00E43D, #006600, #00E43D);
                    border-image: linear-gradient(to bottom, #00E43D, #006600, #00E43D);
                    border-image-slice: 1;
                }

                .drop-shadow-glow {
                    filter: drop-shadow(0 0 30px rgba(13, 255, 78, 0.5));
                }
            `}</style>
        </div >
    );
}

export default PastEvents;