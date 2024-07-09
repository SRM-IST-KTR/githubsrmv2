const BodyStory = ({
    title,
}) => {
    return (
        <div className="bg-black p-4 h-screen w-screen" style={{maxWidth: '100%', overflowX: 'hidden'}}>
         <div className="flex items-center justify-center mt-[10vh] h-fit sm:h-[70vh] w-[90vw] sm:w-[70vw] bg-transparent rounded-lg border drop-shadow-[0_0_15px_#82F6A2] hover:bg-gradient-to-b from-[#00E43D] via-[#000000] to-[#00E43D] border-transparent m-auto">
                <div className="bg-black justify-center h-auto sm:h-[69vh] w-full sm:w-[69.25vw] rounded-lg">
                    <h3 className="text-2xl text-center font-bold text-[#00E43D] pt-4">Our Story</h3>
                    <p className='text-white p-4 text-sm'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.              </p>
                    <p className='text-white p-4 text-sm'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <p className='text-white p-4 text-sm'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BodyStory;