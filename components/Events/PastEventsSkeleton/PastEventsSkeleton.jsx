const PastEventsSkeleton = () => {
    return (
        <div
            className=" animate-pulse lg:w-[520px] w-96"
        >
            <div className="">
                <div className="lg:h-[520px] lg:w-[520px] w-96 h-96 object-cover rounded-lg bg-gray-100" />
            </div>

            <div className="flex items-center mt-4">
                <div className="ml-auto h-9 w-40 bg-gray-100 rounded"></div>
            </div>
        </div>
    );
};

export default PastEventsSkeleton;
