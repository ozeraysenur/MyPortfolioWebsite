const HireMe = () => {
    return (
        <div className="flex justify-between items-center p-10">
            <div>
                <button className="bg-[#EEEBFF] rounded-full text-[#635ad3] px-6 py-4 text-bold text-3xl">
                    <span className="block rotate-45">A</span>
                </button>
            </div>
            <div className="flex gap-4">
                <button className="text-gray-500 px-6 py-3 rounded-md hover:border border-[#3730A3] hover:text-[#3730A3] transition text-lg font-semibold">
                    Skills
                </button>
                <button className="text-gray-500 px-6 py-3 rounded-md hover:border border-[#3730A3] hover:text-[#3730A3] transition text-lg font-semibold">
                    Projects
                </button>
                <button className="text-gray-500 px-6 py-3 rounded-md hover:border border-[#3730A3] hover:text-[#3730A3] transition text-lg">
                    Hire Me
                </button>
            </div>
        </div>
    );
}

export default HireMe;
