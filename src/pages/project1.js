import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const pages = [
    { name: "Entrance Surveillance", image: "/Project 1 _ Portfolio_files/Акція.png" },
    { name: "Video Analytics", image: "/Project 1 _ Portfolio_files/Відеоаналітика.png" },
    { name: "Number Plate Recognition", image: "/Project 1 _ Portfolio_files/Детектор автономерів.png" },
    { name: "People Crowd Detection", image: "/Project 1 _ Portfolio_files/Детектор скупчення людей.png" },
    { name: "Face Recognition", image: "/Project 1 _ Portfolio_files/Розпізнавання облич.png" },
    { name: "ACS (Face Recognition Based)", image: "/Project 1 _ Portfolio_files/СКУД_на_базі_технології_розпізнавання_облич.png" },
    { name: "Thermal Map", image: "/Project 1 _ Portfolio_files/Теплові мапи.png" },
    { name: "School Surveillance", image: "/Project 1 _ Portfolio_files/шкіл.png" }
];

const LaptopDisplay = ({ imageSrc }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            const startPosition = scrollRef.current.scrollTop;
            const startTime = performance.now();
            const duration = 300;

            const animateScroll = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                if (elapsedTime < duration) {
                    const progress = elapsedTime / duration;
                    const easeProgress = 1 - Math.pow(1 - progress, 3);
                    scrollRef.current.scrollTop = startPosition * (1 - easeProgress);
                    requestAnimationFrame(animateScroll);
                } else {
                    scrollRef.current.scrollTop = 0;
                }
            };

            requestAnimationFrame(animateScroll);
        }
    }, [imageSrc]);

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <img
                src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/Desktop Semi-Realistic Dark.svg'}
                alt="MacBook frame"
                className="w-full h-auto"
            />
            <div className="absolute top-[5.8%] left-[11.5%] right-[11.5%] bottom-[8%] overflow-hidden">
                <div ref={scrollRef} className="w-full h-full overflow-y-scroll">
                    <img
                        src={process.env.PUBLIC_URL + imageSrc}
                        alt="Scrollable content"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

const ProjectShowcase = () => {
    const [selectedPage, setSelectedPage] = useState(pages[0]);

    const base = "https://dio.vision";
    const pageUrls = {
        "Entrance Surveillance": `${base}/#/entrance`,
        "Video Analytics": `${base}/#/analytics`,
        "Number Plate Recognition": `${base}/#/plates`,
        "People Crowd Detection": `${base}/#/crowd`,
        "Face Recognition": `${base}/#/face`,
        "ACS (Face Recognition Based)": `${base}/#/acs`,
        "Thermal Map": `${base}/#/thermal`,
        "School Surveillance": `${base}/#/school`,
    };

    return (
        <section className="mb-24 scroll-mt-24">
            <div className="text-center mb-12">
                <div className="inline-block mb-4 px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-sm font-medium">Live Preview</div>
                <h2 className="text-4xl font-bold mb-4">DIOvision Platform</h2>
                <p className="text-gray-500 max-w-xl mx-auto">Explore the actual product — fully functional and deployed.</p>
            </div>

            <div className="relative w-full max-w-5xl mx-auto">
                <img
                    src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/Desktop Semi-Realistic Dark.svg'}
                    alt="Laptop frame"
                    className="w-full h-auto"
                />
                <div className="absolute top-[5.8%] left-[11.5%] right-[11.5%] bottom-[8%] overflow-hidden rounded-sm bg-white flex flex-col">
                    {/* Browser chrome */}
                    <div className="bg-gray-900 px-4 py-2.5 flex items-center gap-3 flex-shrink-0">
                        <div className="flex gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 bg-gray-800 rounded-md px-3 py-1 text-xs text-gray-400 font-mono truncate">
                            dio.vision
                        </div>
                        <a
                            href={pageUrls[selectedPage.name]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded transition-colors font-medium"
                        >
                            Open →
                        </a>
                    </div>
                    {/* Live site */}
                    <iframe
                        src={pageUrls[selectedPage.name]}
                        className="w-full flex-1"
                        title="DIOvision"
                        sandbox="allow-scripts allow-same-origin allow-popups"
                    />
                </div>
            </div>

            {/* Page selector */}
            <div className="max-w-4xl mx-auto mt-8">
                <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Navigate Sections</h3>
                <div className="flex flex-wrap justify-center gap-2">
                    {pages.map((page, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedPage(page)}
                            className={`px-4 py-2 rounded-full transition-all text-sm font-medium ${
                                selectedPage.name === page.name
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {page.name}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

const StatCard = ({ value, label, icon }) => (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
        <span className="text-3xl mb-3 block">{icon}</span>
        <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{value}</p>
        <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
);

const InsightCard = ({ number, text }) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all">
        <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {number}
            </div>
            <p className="text-gray-600 leading-relaxed">{text}</p>
        </div>
    </div>
);

const DesignGrid = ({ images, cols = "md:grid-cols-4" }) => (
    <div className={`grid grid-cols-2 ${cols} gap-4`}>
        {images.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl shadow-md border border-gray-100">
                <img src={img} alt={`Design ${i + 1}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
        ))}
    </div>
);

const Project1 = () => {
    const [visibleSections, setVisibleSections] = useState(new Set());
    const [lightboxImage, setLightboxImage] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => new Set([...prev, entry.target.id]));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const finalDesigns = [
        process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/3e6d73_555d0ef029584d36800f68600a297ca9~mv2.png',
        process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/3e6d73_5b1790ff8c5d472e98c2bd31f7477b16~mv2.png',
        process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/3e6d73_5e45080a6d234fc48fc4e266b93931f3~mv2.png',
        process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/3e6d73_394dbd1bef4c442ea72607d6c1e378dc~mv2.png',
        process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/3e6d73_0ef6f8ba84764d61bb33974ab7e9b076~mv2.png',
        process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/3e6d73_6705089d75cf4fc6a6b7ee09d55538b9~mv2.png',
        process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/3e6d73_3cf4c03350c043a188eda827eb19ec1c~mv2.png',
    ];

    const insights = [
        "Some individuals already have surveillance cameras, but they're dissatisfied with the need for a large and expensive hard drive to store video footage. They would gladly switch to another system but are hesitant to invest in purchasing new cameras.",
        "In large residential complexes, there's an existing surveillance system, yet tenants often lack access to it. Retrieving video footage from cameras typically requires an official request, a process that is lengthy, and users see little benefit in such a system.",
        "Tenants in a specific building expressed interest in installing 1-2 cameras and sharing the cost of installation and maintenance among all residents.",
        "Residents of massive residential complexes require a smart license plate recognition system to allow them to add relatives' or builders' license plate numbers to the database and avoid having to open the barrier for each guest.",
        "The majority of individuals expressed a preference for a subscription-based video surveillance system.",
        "Some residents would like to have affordable cameras with microphones and rotating lenses to communicate with their children or pets while they're away from home."
    ];

    const propositions = [
        { title: "Cloud-Based Platform", desc: "Eliminates the need for expensive hardware, offering secure remote storage and management of footage." },
        { title: "Enhanced Accessibility", desc: "Provides direct access to surveillance footage through an intuitive online platform and mobile app." },
        { title: "Community-Based Program", desc: "Allows residents to collectively invest in and share surveillance systems in communal living spaces." },
        { title: "Smart License Plate Recognition", desc: "Streamlines access control in residential complexes with advanced recognition technology." },
        { title: "Flexible Subscription Model", desc: "Offers various subscription tiers to cater to different user needs and preferences." },
        { title: "Next-Gen Cameras", desc: "Introduces affordable cameras with built-in microphones and rotating lenses for enhanced functionality." },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-800 overflow-visible">
            {/* Hero */}
            <section className="relative text-center mb-24">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 -z-10" />
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-300 via-blue-200 to-transparent rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" />
                <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-300 via-purple-200 to-transparent rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-gradient-to-br from-pink-300 via-pink-200 to-transparent rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }} />

                <div className="max-w-4xl mx-auto px-4">
                    <div className="inline-block mb-4 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Case Study</div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                        DIOvision
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Cloud video surveillance reimagined — end-to-end design for web and mobile.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="mb-24 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    <StatCard value="2020–23" label="Project Duration" icon="📅" />
                    <StatCard value="Web + Mobile" label="Platforms" icon="📱" />
                    <StatCard value="10+" label="User Interviews" icon="🎤" />
                    <StatCard value="8" label="Key Features" icon="⚡" />
                </div>
            </section>

            {/* Overview + Video */}
            <section id="overview" className="mb-24 scroll-mt-24" data-animate>
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                            <div className="space-y-4">
                                {[
                                    { label: "Client", value: "DIOvision" },
                                    { label: "Year", value: "2020–2023" },
                                    { label: "Platform", value: "Website, Mobile App" },
                                    { label: "Tools", value: "Figma, Adobe Suite, DaVinci Resolve, ChatGPT" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider w-20">{item.label}</span>
                                        <span className="text-gray-800 font-medium">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-xl">
                            <video
                                src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/Dio Vision Video.mp4'}
                                autoPlay
                                muted
                                loop
                                playsInline
                                disablePictureInPicture
                                controlsList="nodownload nofullscreen noremoteplayback"
                                className="w-full h-auto"
                            ></video>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge */}
            <section id="challenge" className="mb-24 scroll-mt-24" data-animate>
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block mb-4 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium">The Problem</div>
                    <h2 className="text-4xl font-bold mb-8">The Challenge</h2>
                    <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                        <p className="text-lg">
                            In the Ukrainian market, the issue of cumbersome and costly video surveillance persists. Traditional setups require an array of cameras, storage servers, extensive wiring, and specialized software — making installation complex and expensive.
                        </p>
                        <p className="text-lg">
                            Our mission was clear: <strong className="text-gray-900">democratize video surveillance</strong>, streamline installation processes, and provide seamless 24/7 support. We aimed to modernize the service with eco-friendly features like motion-triggered camera activation, plus advanced capabilities like facial and license plate recognition.
                        </p>
                    </div>
                </div>
            </section>

            {/* My Role */}
            <section id="role" className="mb-24 scroll-mt-24" data-animate>
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block mb-4 px-4 py-1.5 bg-purple-50 text-purple-600 rounded-full text-sm font-medium">My Contribution</div>
                    <h2 className="text-4xl font-bold mb-8">My Role</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="space-y-4">
                            <p className="text-lg text-gray-600">As the sole designer on the project, I took on a diverse set of responsibilities:</p>
                            <div className="space-y-3">
                                {[
                                    { role: "UI/UX Designer", desc: "Created websites, developed brand identities, designed application interfaces, and prepared materials for print." },
                                    { role: "Content Maker", desc: "Created various types of content to engage our audience, including shooting videos and preparing images for social media." },
                                    { role: "Videomaker", desc: "Produced educational videos for our YouTube channel." },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                        <p className="font-bold text-gray-900">{item.role}</p>
                                        <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <img
                                src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/3e6d73_f1fe22ffe71e4a108394df4d72a9981b~mv2.jpg'}
                                alt="My Role"
                                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* User Research */}
            <section id="research" className="mb-24 scroll-mt-24" data-animate>
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block mb-4 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">Research</div>
                    <h2 className="text-4xl font-bold mb-8">User Research</h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        We conducted approximately ten interviews with potential users and organized several meetings with residents of large residential complexes. I compiled findings into a table of positive and negative user experiences to prioritize product development directions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: "Volodymyr", role: "Private House Owner", desc: "A private house in a village near Kyiv. Wanted to protect his property and record everything happening near his home while at work.", img: process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/olexandr.png' },
                            { name: "Oleksandr", role: "Living Complex Inhabitant", desc: "Lives on the 14th floor of a big complex. Has a storage room and wants to install surveillance near the entrance to prevent strangers.", img: process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/a91f25c7c6635454-sticker_edited.png' },
                            { name: "Olena", role: "Young Mother", desc: "Living in an old five-story house with no storage rooms. Experienced robbery before and wants to prevent it or find thieves if it happens again.", img: process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/Olena.png' },
                        ].map((persona, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                                <img src={persona.img} alt={persona.name} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-lg font-bold mb-1">{persona.name}</h3>
                                    <p className="text-sm text-blue-600 font-medium mb-3">{persona.role}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">{persona.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Research Insights */}
            <section id="insights" className="mb-24 scroll-mt-24" data-animate>
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block mb-4 px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-sm font-medium">Key Findings</div>
                    <h2 className="text-4xl font-bold mb-8">Research Insights</h2>
                    <div className="space-y-4">
                        {insights.map((text, i) => (
                            <InsightCard key={i} number={i + 1} text={text} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Proposition */}
            <section id="proposition" className="mb-24 scroll-mt-24" data-animate>
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block mb-4 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">The Solution</div>
                    <h2 className="text-4xl font-bold mb-8">Proposition</h2>
                    <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                        DIOvision is a cloud-based video surveillance service that allows you to remotely view video from your cameras, receive motion or sound alerts, store archives of any size, download necessary video fragments, and create personal video streams. Camera connection takes only 2 minutes.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {propositions.map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm mb-4">
                                    {i + 1}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Design */}
            <section id="design" className="mb-24 scroll-mt-24" data-animate>
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block mb-4 px-4 py-1.5 bg-pink-50 text-pink-600 rounded-full text-sm font-medium">Design</div>
                    <h2 className="text-4xl font-bold mb-8">Design System</h2>
                    <img
                        src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/DESIGN SYSTEM DIOVISION.png'}
                        alt="Design System"
                        className="w-full h-auto rounded-2xl shadow-lg"
                    />
                </div>
            </section>

            {/* Design Process */}
            <section id="process" className="mb-24 scroll-mt-24" data-animate>
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block mb-4 px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-sm font-medium">Process</div>
                    <h2 className="text-4xl font-bold mb-8">Design Process</h2>
                    <div className="space-y-12">
                        {[
                            { title: "Challenge 01: Main Page", images: [
                                process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/Screenshot 2024-04-09 at 23_36_25.png',
                                process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/Screenshot 2024-04-09 at 23_54_10.png',
                            ], desc: "Initial design and updated design for the main page." },
                            { title: "Challenge 02: FAQ Page", images: [
                                process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/Screenshot 2024-04-10 at 16_56_24.png',
                            ], desc: "Created a comprehensive FAQ page with easy navigation and search functionality." },
                            { title: "Challenge 03: Pricing Tables", images: [
                                process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/Screenshot 2024-04-10 at 19_47_13.png',
                                process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/Screenshot 2024-04-10 at 19_52_26.png',
                            ], desc: "Designed intuitive pricing tables for different video analytics services and cloud storage options." },
                        ].map((challenge, i) => (
                            <div key={i}>
                                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{challenge.title}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {challenge.images.map((img, j) => (
                                        <img key={j} src={img} alt={`Challenge ${i + 1} - Image ${j + 1}`} className="w-full h-auto rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow" />
                                    ))}
                                </div>
                                <p className="text-gray-500 mt-4">{challenge.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Designs */}
            <section id="final" className="mb-24 scroll-mt-24" data-animate>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-block mb-4 px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-sm font-medium">Outcome</div>
                        <h2 className="text-4xl font-bold">Final Designs</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {finalDesigns.map((img, i) => (
                            <div
                                key={i}
                                className="group relative overflow-hidden rounded-2xl shadow-md border border-gray-100 cursor-pointer"
                                onClick={() => setLightboxImage(img)}
                            >
                                <img src={img} alt={`Final Design ${i + 1}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ProjectShowcase />

            {/* Reflection */}
            <section id="reflection" className="mb-24 scroll-mt-24" data-animate>
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-bold mb-8">Reflection</h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                        <p>
                            Working on the DIOvision project provided me with valuable and unique experience in creating a product from scratch. I learned to conduct interviews, handle objections, and view any criticism positively as an opportunity to improve the design.
                        </p>
                        <p>
                            I established direct communication with the developer, allowing us to maintain constant contact and optimize the work on the website. This project honed my skills in user-centered design and iterative development.
                        </p>
                        <p>
                            I am immensely grateful to this product and my team for the opportunity to grow and develop. This experience was a true challenge — and I am very glad I had the chance to take it on.
                        </p>
                    </div>
                </div>
            </section>

            <div className="text-center pb-16">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Back to Portfolio
                </Link>
            </div>

            {/* Lightbox */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center cursor-pointer"
                    onClick={() => setLightboxImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                        onClick={() => setLightboxImage(null)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <img
                        src={lightboxImage}
                        alt="Final Design"
                        className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default Project1;
