
import { DM_Sans } from 'next/font/google';

const dmsans = DM_Sans({
    subsets: ['latin'],
    display: 'swap',
});

const BodyStory = ({
    title,
}) => {

 
    return (
           
           <div class="bg-black p-4  h-screen w-screen">
            <div className="flex items-center justify-center h-[70vh] w-[70vw] rounded-lg border drop-shadow-[0_0_15px_#82F6A2] hover:bg-gradient-to-b from-[#00E43D] via-[#000000] to-[#00E43D] border-transparent ml-[12%] mr-[10%] mt-[5%]">
            <div className="bg-black justify-center h-[69vh] w-[69.25vw] rounded-lg">
                <h3 className="text-2xl text-center font-bold text-[#00E43D] pt-4 ">Our Story</h3>
                <p className='text-white p-4 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p className='text-white p-4 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p className='text-white p-4 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
 
            </div>
        </div>
        </div>
        
        
    );
};

export default BodyStory;