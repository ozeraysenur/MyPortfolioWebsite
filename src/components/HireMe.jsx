const HireMe = () => {
    return (
        <div className="flex justify-between items-center p-10">
            <div>
                <button className="bg-[#EEEBFF] rounded-full text-[#635ad3] px-6 py-4 text-bold text-3xl">
                    <span className="block rotate-45">A</span>
                </button>
            </div>
            <div className="flex gap-4">
                <button className="text-text px-8 py-3 rounded-md hover:border border-primary hover:text-primary transition text-lg font-semibold">
                    Skills
                </button>
                <button className="text-text px-8 py-3 rounded-md hover:border border-primary hover:text-primary transition text-lg font-semibold">
                    Projects
                </button>
                <button className="text-text px-8 py-3 rounded-md hover:border border-primary hover:text-primary transition text-lg font-semibold">
                    Hire Me
                </button>
            </div>
        </div>
    );
}

export default HireMe;
