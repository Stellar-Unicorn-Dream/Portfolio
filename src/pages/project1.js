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
                    const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
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

    return (
        <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">Project Showcase</h2>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <LaptopDisplay imageSrc={selectedPage.image} />
                </div>

                <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4">Select Webpage</h3>
                    <div className="flex flex-wrap gap-2">
                        {pages.map((page, index) => (
                            <button
                                key={index}
                                className={`px-3 py-1 rounded-full transition-colors text-sm ${selectedPage.name === page.name
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                onClick={() => setSelectedPage(page)}
                            >
                                {page.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Project1 = () => {
    return (
        <div className="container mx-auto px-4 py-8 text-gray-800">
            <section className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Project 1: DIOvision</h1>
                <p className="text-xl text-gray-600 mb-8">Cloud video surveillance reimagined</p>
            </section>

            <section className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
                        <ul className="space-y-2">
                            <li><strong>Client:</strong> DIOvision</li>
                            <li><strong>Year:</strong> 2020-2023</li>
                            <li><strong>Platform:</strong> Website, Mobile App</li>
                            <li><strong>Tools:</strong> Figma, Adobe Creative Suite, DaVinci Resolve, Chat GPT, Cameras</li>
                        </ul>
                    </div>
                    <div>
                        <video
                            src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/Dio Vision Video.mp4'}
                            autoPlay
                            muted
                            loop
                            playsInline
                            disablePictureInPicture
                            controlsList="nodownload nofullscreen noremoteplayback"
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        ></video>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">The Challenge</h2>
                <p className="text-lg mb-4">
                    In the Ukrainian market, the issue of cumbersome and costly video surveillance persists. Traditional setups require an array of cameras, storage servers, extensive wiring, and specialised software, making installation complex and expensive. Recognising this challenge, our team set out to revolutionize video surveillance, making it accessible and user-friendly.
                </p>
                <p className="text-lg mb-4">
                    Our mission was clear: to devise a solution that would democratize video surveillance, streamline installation processes, and provide seamless 24/7 support to our users. Moreover, we aimed to modernize and automate our service, incorporating eco-friendly features such as motion-triggered camera activation. Additionally, we sought to enhance functionality with advanced features like facial and license plate recognition.
                </p>
                <p className="text-lg mb-4">
                    To tackle these challenges, our team need to embarked on a journey of innovation and creativity. To develop a comprehensive system that combines cutting-edge technology with intuitive design, allowing users to effortlessly set up and manage their surveillance networks.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">My Role</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-lg mb-4">As the sole designer on the project, I took on a diverse set of responsibilities that extended beyond the realm of a traditional UI/UX designer:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>UI/UX Designer:</strong> Created websites, developed brand identities, worked on aspects of the application, and designed materials for print.</li>
                            <li><strong>Content Maker:</strong> Created various types of content to engage our audience, including shooting videos and preparing images for social media platforms.</li>
                            <li><strong>Videomaker:</strong> Made educational videos for our YouTube channel.</li>
                        </ul>
                    </div>
                    <div>
                        <img
                            src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/3e6d73_f1fe22ffe71e4a108394df4d72a9981b~mv2.jpg'}
                            alt="My Role"
                            className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">User Research</h2>
                <p className="text-lg mb-4">
                    Our team conducted approximately ten interviews with potential users, organized several meetings with residents of large residential complexes, and were able to identify the main issues faced by people who already have a video surveillance system, as well as the barriers for those who are considering its installation.
                    As a result, I compiled a table of positive and negative user experiences with the video surveillance system. Based on it, our team was able to prioritize product development directions and find the best solution to meet customer needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/olexandr.png'} alt="Volodymyr" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Volodymyr</h3>
                            <p className="text-gray-600 mb-4">Private House Owner</p>
                            <p>Volodymyr has a private house in the village near Kyiv. His home stood on the end of the street without a lot of neighbors around. He wanted to protect his property and record everything that happening near his home when Volodymyr is at work.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/a91f25c7c6635454-sticker_edited.png'} alt="Oleksandr" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Oleksandr</h3>
                            <p className="text-gray-600 mb-4">Big living complex inhabitant</p>
                            <p>Oleksandr is a very active and charismatic person. He is living in the big living complex on the 14th floor. He has a small flat, but a lot of hobbies, so he decided to store his stuff in the special room. Sasha wants to install video surveillance system near the entrance to the storage to prevent strangers coming inside.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/Olena.png'} alt="Olena" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Olena</h3>
                            <p className="text-gray-600 mb-4">Old house inhabitant</p>
                            <p>Olena is a young modern mother living with her family in the old five-story house. They haven't any storage rooms so sometimes the family needs to leave the baby stroller or bicycle near the flat. Olena experienced robbery before and wants to prevent it or be able to find thefts if it happens again.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Research Insights</h2>
                <p className="text-lg mb-4">
                    During the interviews and conversations with users, we gathered numerous insights that weren't immediately apparent. For instance:
                </p>
                <p className="text-lg mb-4">
                    1. Some individuals already have surveillance cameras, but they're dissatisfied with the need for a large and expensive hard drive to store video footage. They would gladly switch to another system but are hesitant to invest in purchasing new cameras.
                </p>
                <p className="text-lg mb-4">
                    2. In large residential complexes, there's an existing surveillance system, yet tenants often lack access to it. Retrieving video footage from cameras typically requires an official request, a process that is lengthy, and users see little benefit in such a system.
                </p>
                <p className="text-lg mb-4">
                    3. Tenants in a specific building expressed interest in installing 1-2 cameras and sharing the cost of installation and maintenance among all residents.
                </p>
                <p className="text-lg mb-4">
                    4. Residents of massive residential complexes require a smart license plate recognition system to allow them to add relatives' or builders' license plate numbers to the database and avoid having to open the barrier for each guest.
                </p>
                <p className="text-lg mb-4">
                    5. The majority of individuals expressed a preference for a subscription-based video surveillance system.
                </p>
                <p className="text-lg mb-4">
                    6. Some residents would like to have affordable cameras with microphones and rotating lenses to communicate with their children or pets while they're away from home.
                </p>
                <p className="text-lg mb-4">
                    These insights illuminate unmet needs and preferences among users, guiding our product development efforts.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Proposition</h2>
                <p className="text-lg mb-4">
                    DIOvision is a cloud-based video surveillance service that allows you to remotely view video from your cameras, receive motion or sound alerts, store archives of any size, download necessary video fragments, and create personal video streams. This service has a Website and a Mobile App. Camera connection takes only 2 minutes.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Design</h2>
                <p className="text-lg mb-4">
                    Based on our user research and market insights, we designed a comprehensive solution to address the diverse needs of our users:
                </p>
                <ul className="list-disc list-inside space-y-4 text-lg mb-6">
                    <li><strong>Cloud-Based Platform:</strong> Eliminates the need for expensive hardware, offering secure remote storage and management of footage.</li>
                    <li><strong>Enhanced Accessibility:</strong> Provides direct access to surveillance footage through an intuitive online platform and mobile app.</li>
                    <li><strong>Community-Based Program:</strong> Allows residents to collectively invest in and share surveillance systems in communal living spaces.</li>
                    <li><strong>Smart License Plate Recognition:</strong> Streamlines access control in residential complexes with advanced recognition technology.</li>
                    <li><strong>Flexible Subscription Model:</strong> Offers various subscription tiers to cater to different user needs and preferences.</li>
                    <li><strong>Next-Generation Cameras:</strong> Introduces affordable cameras with features like built-in microphones and rotating lenses for enhanced functionality.</li>
                </ul>
                <p className="text-lg">
                    This comprehensive design aims to revolutionize video surveillance by providing a seamless, cost-effective, and feature-rich solution that enhances safety and security for all users.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Design System</h2>
                <img src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/DESIGN%20SYSTEM%20DIOVISION.png'} alt="Design System" className="w-full h-auto object-cover rounded-lg shadow-lg" />
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Design Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Challenge 01: Main Page</h3>
                        <img src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/Screenshot%202024-04-09%20at%2023_36_25.png'} alt="Main Page Challenge" className="mb-4 w-full h-auto object-cover rounded-lg shadow-lg" />
                        <img src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/Screenshot%202024-04-09%20at%2023_54_10.png'} alt="Main Page Solution" className="mb-4 w-full h-auto object-cover rounded-lg shadow-lg" />
                        <p className="text-lg">Initial design and updated design for the main page.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Challenge 02: FAQ Page</h3>
                        <img src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/Screenshot%202024-04-10%20at%2016_56_24.png'} alt="FAQ Page" className="mb-4 w-full h-auto object-cover rounded-lg shadow-lg" />
                        <p className="text-lg">Created a comprehensive FAQ page with easy navigation and search functionality.</p>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-4">Challenge 03: Pricing Tables</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <img src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/Screenshot%202024-04-10%20at%2019_47_13.png'} alt="Pricing Table 1" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                        <img src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/Screenshot%202024-04-10%20at%2019_52_26.png'} alt="Pricing Table 2" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </div>
                    <p className="text-lg mt-4">Designed intuitive pricing tables for different video analytics services and cloud storage options.</p>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Final Designs</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <img src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/3e6d73_555d0ef029584d36800f68600a297ca9~mv2.png'} alt="Final Design 1" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    <img src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/3e6d73_5b1790ff8c5d472e98c2bd31f7477b16~mv2.png'} alt="Final Design 2" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    <img src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/3e6d73_5e45080a6d234fc48fc4e266b93931f3~mv2.png'} alt="Final Design 3" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    <img src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/3e6d73_394dbd1bef4c442ea72607d6c1e378dc~mv2.png'} alt="Final Design 4" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    <img src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/3e6d73_0ef6f8ba84764d61bb33974ab7e9b076~mv2.png'} alt="Final Design 5" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    <img src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/3e6d73_6705089d75cf4fc6a6b7ee09d55538b9~mv2.png'} alt="Final Design 6" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    <img src={process.env.PUBLIC_URL + '/Project 1 _ Portfolio_files/3e6d73_3cf4c03350c043a188eda827eb19ec1c~mv2.png'} alt="Final Design 7" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                </div>
            </section>

            <ProjectShowcase />

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Reflection</h2>
                <p className="text-lg mb-4">
                    Working on the DiOvision project provided me with valuable and unique experience in creating a product from scratch. I learned to conduct interviews, handle objections, and view any criticism positively as an opportunity to improve the design. I established direct communication with the developer, allowing us to maintain constant contact and optimize the work on the website.
                </p>
                <p className="text-lg mb-4">
                    This project also honed my skills in several areas, such as user-centered design and iterative development. My previous achievements in redesigning the video analytics pages and special offer pages laid a strong foundation for this work.
                </p>
                <p className="text-lg">
                    I am immensely grateful to this product and my team for the opportunity to grow and develop, enhance my skills, and gain expertise in a field I am passionate about. I can summarize this experience as a true challenge, but I am very glad I had the chance to take it on.
                </p>
            </section>

            <Link to="/" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out">
                Back to Portfolio
            </Link>
        </div>
    );
};

export default Project1;