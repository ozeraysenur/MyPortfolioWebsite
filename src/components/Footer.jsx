const Footer = () => {
    return (
        <section>
            <div className="bg-footerBackground py-12">
                <h1 className="text-5xl font-bold mb-4 text-title">Let's work together on</h1>
                <h1 className="text-5xl font-bold mb-12 text-title">your next product.</h1>
                
                <div className="flex justify-between items-start ">
                    
                    <p className="text-[#af0c48] self-start">
                        👉 <a href="mailto:ozeraysenur24@gmail.com" className="underline decoration-[#af0c48]">
                            ozeraysenur24@gmail.com
                        </a>
                    </p>
                    <div className="flex space-x-6">
                        <p className="text-title font-semibold"><a href="https://medium.com/@ozeraysenur">Personal Blog</a></p>
                        <p className="text-green-500 font-semibold"><a href="https://github.com/ozeraysenur">Github</a></p>
                        <p className="text-blue-500 font-semibold"><a href="https://www.linkedin.com/in/ayse-nur-ozer/">Linkedin</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;

