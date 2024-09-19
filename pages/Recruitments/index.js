import React, { useState } from 'react';
import FormSub from '@/components/Recruitments/FormSub';
import heroimg_events from "@/public/heroimg_events.png";
import recruitmentpos from "@/public/heroimg_events.png";
function Index() {
  const targetDate = '2024-09-20T09:00:00'; // Ensure this matches the event start date and time

  // Here we could use the CountdownTimer component if it were separate, but since you requested a single component:
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const timeLeft = calculateTimeLeft(); // This would ideally use useState and useEffect for reactivity

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  return (
 <>
  <div className="relative h-screen p-6  " 
   style={{
    backgroundImage: `url(${heroimg_events.src})`,
    position: "relative",
    backgroundAttachment: "fixed"
}}>
  <div className="absolute inset-0 bg-gradient-to-t from-bg_black to-transparent "></div>
  <div className='comp relative '> 
 
 <div className="w-screen -translate-y-6 sm:-translate-y-20 p-5 sm:p-0 lg:mx-auto mt-20">
                <p className="pt-5 max-md:pb-1 max-md:text-2xl max-md:pt-1 pb-10 text-center font-extrabold font-poppins text-4xl text-white">
                    <span className="text-bright_green">Upcoming</span> Event
                </p>
                <div className="flex flex-col justify-center items-center md:flex-row xl:mx-48 gap-4 lg:gap-16">
                    <div className="relative group pt-4">
                        <div className="rounded-lg">
                            <img //USE img TAG IF LINK IS PROVIDED
                                src='recruitmentpos.jpg'
                                alt="Upcoming Event"
                                className="rounded-lg w-[400px] sm:w-[526px]"
                            />
                        </div>
                        <h3 className="text-sm font-bold max-md:text-center text-white sm:text-xl py-4 max-md:hidden px-4 pl-0">
                            
                        </h3>
                    </div>

                    {/* INFO */}
                    <div className="my-auto">
                        <div className="md:w-[447px] font-dmSans font-medium text-md sm:text-xl space-y-4 sm:space-y-8 text-white">
                            <div className="h-[60px] sm:h-20 lg:h-28 lg:w-[447px] w-full bg-event_gray rounded-lg flex justify-start items-center px-7">
                                
                                <p className='text-white text-center'>2024-09-20</p>
                            </div>

                            <div className="h-[60px] sm:h-20 lg:h-28  lg:w-[447px] bg-event_gray rounded-lg text-left flex items-center justify-start px-7">
                            <div className='3  bg-event_gray text-white text-center space-x-2  font-semibold'>
                <span className="text-2xl">{String(timeLeft.days).padStart(2, '0')} Days</span>
                <span className="text-2xl">{String(timeLeft.hours).padStart(2, '0')} Hours</span>
                <span className="text-2xl">{String(timeLeft.minutes).padStart(2, '0')} Minutes</span>
              </div>
                            </div>

                            <button
                                onClick={handleClick}
                                className="ml-auto filter bg-bright_green hover:bg-green-700 text-black font-dmSans font-semibold w-full rounded-lg p-3 sm:p-5 text-xl"
                            >
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>


{isVisible && <FormSub />}

 
 

 </div>
 </div>
 </>
  );
}

export default Index;
