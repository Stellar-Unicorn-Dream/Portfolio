import React from 'react';
import { Link } from 'react-router-dom';

const Project1 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Project 1: DIOvision</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <img src="/3e6d73_22056eb79c8f4ef0ba12122310803868~mv2.png" alt="DIOvision Logo" className="mb-4 max-w-full h-auto" />
        <ul className="list-disc list-inside">
          <li><strong>Client:</strong> DIOvision</li>
          <li><strong>Year:</strong> 2020-2023</li>
          <li><strong>Platform:</strong> Website, Mobile App</li>
          <li><strong>Tools:</strong> Figma, Adobe Photoshop, Adobe Illustrator, DaVinci Resolve, Chat GPT, Cameras</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
        <p className="mb-4">
          Cloud video surveillance in the Ukrainian market faced issues with cumbersome and costly setups. 
          Traditional systems required multiple cameras, storage servers, extensive wiring, and specialized software, 
          making installation complex and expensive.
        </p>
        <p>Our mission was to revolutionize video surveillance by:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Making it accessible and user-friendly</li>
          <li>Streamlining installation processes</li>
          <li>Providing seamless 24/7 support</li>
          <li>Modernizing and automating the service</li>
          <li>Incorporating eco-friendly features like motion-triggered camera activation</li>
          <li>Enhancing functionality with advanced features such as facial and license plate recognition</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">My Role</h2>
        <img src="/3e6d73_f1fe22ffe71e4a108394df4d72a9981b~mv2.jpg" alt="My Role" className="mb-4 max-w-full h-auto" />
        <p>As the sole designer on the project, I took on multiple responsibilities:</p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>UI/UX Designer:</strong> Created websites, developed brand identities, worked on application aspects, and designed materials for print</li>
          <li><strong>Content Maker:</strong> Created various types of content for social media platforms, including videos and images</li>
          <li><strong>Videomaker:</strong> Produced educational videos for the YouTube channel</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/3e6d73_22056eb79c8f4ef0ba12122310803868~mv2.png" alt="Volodymyr" className="mb-4 max-w-full h-auto" />
            <h3 className="text-xl font-semibold mb-2">Volodymyr</h3>
            <p className="mb-2"><strong>Private House Owner</strong></p>
            <p>Volodymyr has a private house in the village near Kyiv. His home stood on the end of the street without a lot of neighbors around. He wanted to protect his property and record everything that happening near his home when Volodymyr is at work.</p>
          </div>
          <div>
            <img src="/a91f25c7c6635454-sticker_edited.png" alt="Oleksandr" className="mb-4 max-w-full h-auto" />
            <h3 className="text-xl font-semibold mb-2">Oleksandr</h3>
            <p className="mb-2"><strong>Big living complex inhabitant</strong></p>
            <p>Oleksandr is a very active and charismatic person. He is living in the big living complex on the 14th floor. He has a small flat, but a lot of hobbies, so he decided to store his stuff in the special room. Sasha wants to install video surveillance system near the entrance to the storage to prevent strangers coming inside. And the main request from him was a possibility to save recorded videos and integrate face recognition.</p>
          </div>
          <div>
            <img src="/Olena.png" alt="Olena" className="mb-4 max-w-full h-auto" />
            <h3 className="text-xl font-semibold mb-2">Olena</h3>
            <p className="mb-2"><strong>Old house inhabitant</strong></p>
            <p>Olena is a young modern mother living with her family in the old five-story house. They haven't any storage rooms so sometimes the family needs to leave the baby stroller or bicycle near the flat. Olena experienced robbery before and wants to prevent it or be able to find thefts if it happens again. She asked about the possibility to install equipment by herself and wanted access to online video streaming from her phone.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">User Research</h2>
        <img src="/8cd0b216d6dd4d52bd46d3afbb8cf020.jpg" alt="User Research" className="mb-4 max-w-full h-auto" />
        <p className="mb-4">
          We conducted interviews with potential users and organized meetings with residents of large residential complexes. Key insights included:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Dissatisfaction with existing systems due to expensive hardware and complex setups</li>
          <li>Limited access to footage in large residential complexes</li>
          <li>Interest in shared surveillance systems among tenants</li>
          <li>Need for smart license plate recognition in massive residential complexes</li>
          <li>Preference for subscription-based video surveillance systems</li>
          <li>Desire for affordable cameras with advanced features like microphones and rotating lenses</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Solution</h2>
        <p className="mb-4">
          DIOvision: A cloud-based video surveillance service allowing users to:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Remotely view video from cameras</li>
          <li>Receive motion or sound alerts</li>
          <li>Store archives of any size</li>
          <li>Download necessary video fragments</li>
          <li>Create personal video streams</li>
        </ul>
        <p className="mt-4">
          The service includes both a website and a mobile app, with camera connection taking only 2 minutes.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Design System</h2>
        <img src="/DESIGN%20SYSTEM%20DIOVISION.png" alt="Design System" className="mb-4 max-w-full h-auto" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Design Process</h2>
        <ol className="list-decimal list-inside ml-4">
          <li>Created a design system with reusable components</li>
          <li>Redesigned video analytics pages and company offers</li>
          <li>Developed dedicated pages for each video analytics feature</li>
          <li>Designed a new layout for displaying pricing plans and costs</li>
          <li>Created an FAQ page with comprehensive answers and easy navigation</li>
          <li>Updated the initial design to maintain consistency across the website</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Design Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Challenge 01: Main Page</h3>
            <img src="/Screenshot%202024-04-09%20at%2023_36_25.png" alt="Main Page Challenge" className="mb-4 max-w-full h-auto" />
            <img src="/Screenshot%202024-04-09%20at%2023_54_10.png" alt="Main Page Solution" className="mb-4 max-w-full h-auto" />
            <p>Initial design and updated design for the main page.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Challenge 02: FAQ Page</h3>
            <img src="/Screenshot%202024-04-10%20at%2016_56_24.png" alt="FAQ Page" className="mb-4 max-w-full h-auto" />
            <p>Created a comprehensive FAQ page with easy navigation and search functionality.</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Challenge 03: Pricing Tables</h3>
          <img src="/Screenshot%202024-04-10%20at%2019_47_13.png" alt="Pricing Table 1" className="mb-4 max-w-full h-auto" />
          <img src="/Screenshot%202024-04-10%20at%2019_52_26.png" alt="Pricing Table 2" className="mb-4 max-w-full h-auto" />
          <p>Designed intuitive pricing tables for different video analytics services and cloud storage options.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Final Designs</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/3e6d73_555d0ef029584d36800f68600a297ca9~mv2.png" alt="Final Design 1" className="max-w-full h-auto" />
          <img src="/3e6d73_5b1790ff8c5d472e98c2bd31f7477b16~mv2.png" alt="Final Design 2" className="max-w-full h-auto" />
          <img src="/3e6d73_5e45080a6d234fc48fc4e266b93931f3~mv2.png" alt="Final Design 3" className="max-w-full h-auto" />
          <img src="/3e6d73_394dbd1bef4c442ea72607d6c1e378dc~mv2.png" alt="Final Design 4" className="max-w-full h-auto" />
          <img src="/3e6d73_0ef6f8ba84764d61bb33974ab7e9b076~mv2.png" alt="Final Design 5" className="max-w-full h-auto" />
          <img src="/3e6d73_6705089d75cf4fc6a6b7ee09d55538b9~mv2.png" alt="Final Design 6" className="max-w-full h-auto" />
          <img src="/3e6d73_3cf4c03350c043a188eda827eb19ec1c~mv2.png" alt="Final Design 7" className="max-w-full h-auto" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Reflection</h2>
        <p className="mb-4">
          This project provided valuable experience in creating a product from scratch, including:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Conducting user interviews</li>
          <li>Handling objections and viewing criticism positively</li>
          <li>Establishing direct communication with developers</li>
          <li>Honing skills in user-centered design and iterative development</li>
        </ul>
        <p className="mt-4">
          The experience was challenging but rewarding, offering significant opportunities for growth and skill enhancement in a passionate field.
        </p>
      </section>

      <Link to="/" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out">
        Back to Portfolio
      </Link>
    </div>
  );
};

export default Project1;