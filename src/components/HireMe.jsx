const HireMe = () => {
    return (
        <div className="flex gap-6 flex-row p-10">
            <div ><button className="bg-[#EEEBFF] rounded-full text-[#7B61FF] px-6 py-4 text-bold text-3xl"><span className="block rotate-45">A</span></button></div>
            <div>
            <button className="text-gray-500  px-6 py-3 rounded-md hover:border border-[#3730A3] hover:text-[#3730A3] transition text-lg">
                Hire Me
            </button>
            <button className="text-gray-500  px-6 py-3 rounded-md hover:border border-[#3730A3] hover:text-[#3730A3] transition text-lg">
            Github
            </button>
            <button className="text-gray-500  px-6 py-3 rounded-md hover:border border-[#3730A3] hover:text-[#3730A3] transition text-lg">
                LinkedIn
            </button>
            </div>
      </div>
    );
}

export default HireMe;