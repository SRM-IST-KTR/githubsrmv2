{/* 
bright_green: "#0DFF4E"  -> added in tailwind.config.js
border bright_green gradient -> "#00E43D"
border dark_green gradient -> "#006600"
*/}

import { DM_Sans } from 'next/font/google';

const dmsans = DM_Sans({
    subsets: ['latin'],
    display: 'swap',
});

const PastEvents = ({
    title,
    certificateLink,
}) => {

    const GetCertificate = () => {
        window.open(certificateLink, '_blank');
    };

    return (
        <div className={`block outline-2 outline-white p-4 rounded-lg max-w-[100%] ${dmsans.className}`}>
            <div className="relative">
                <img
                    alt=""
                    src="https://s3-alpha-sig.figma.com/img/ea69/5937/2d0ba426506ee31eb9f73d09f81e8c1e?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FC4aflQ4xaOm8GdnX2JdjhDPY24ywS5cIxZCI4Z7f9Qyz~iWgry9AFIrNF5WUmoT06mZJ16Nk6W866C9oHzApXHzlERE~35qkrvxrp5xzBjr1ESff78WqxcTblOINdu2~2sGtN2XbdplmMVDX79lfzaNGStFhkcN2UnklaYQKK-5zhqIRopGuKEltLlcuRXi4WxT7JLFSXMdoYChOk2ErE6SIzfTBMLzKjLaYOl3nyQyN-1zMeEcSuMTIkyO20rUaqSS1SGmbIPi9Nw0uaRtT~prdDQK4qKljJnqRBoliYic9e~8o8NTqY1DbNc7fnkbMAC3s8~NPlQi5R-utpfrtQ__"
                    className="h-full w-full object-cover rounded-lg border-gradient filter drop-shadow-glow"
                />
            </div>

            <div className="flex items-center mt-4">
                <h3 className="text-lg font-bold text-white sm:text-xl py-2 px-4 pl-0">{title}</h3>
                <button
                    onClick={GetCertificate}
                    className="ml-auto filter bg-bright_green hover:bg-green-700 text-black font-bold rounded h-9 w-40"
                >
                    Get Certificate
                </button>
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
        </div>
    );
};

export default PastEvents;
