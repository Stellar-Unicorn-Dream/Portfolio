import React from 'react';
import { Link } from 'react-router-dom';

const Project2 = () => {
    return (
        <div className="container mx-auto px-4 py-8 text-gray-800">
            <section className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Project 2: Dimed</h1>
                <p className="text-xl text-gray-600 mb-8">Transportation company Logo</p>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Project Overview</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
                            <span className="text-gray-500">Logo placeholder</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg mb-4">
                            Dimed is a transportation company that needed a new logo to represent their brand. The project involved creating a modern, memorable logo that conveys the idea of movement and reliability.
                        </p>
                        <p className="text-lg mb-4">
                            The design process included research into the transportation industry, sketching various concepts, and refining the chosen direction into a polished final product.
                        </p>
                        <p className="text-lg">
                            The final logo successfully captures the essence of Dimed's services while being versatile enough to work across various applications, from vehicle branding to digital platforms.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Logo Creating Process</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Starting with hand-drawn sketches on paper to explore shapes and meaning, then experimenting with
                    AI-assisted variations to quickly test alternative forms before vector refinement.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                        <span className="text-gray-500">Variant 1</span>
                    </div>
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                        <span className="text-gray-500">Variant 2</span>
                    </div>
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                        <span className="text-gray-500">Variant 3</span>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Design Variants</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Presenting multiple refined directions that emphasize clarity, memorability, and scalability across
                    print and digital contexts.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                        <span className="text-gray-500">Design 1</span>
                    </div>
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                        <span className="text-gray-500">Design 2</span>
                    </div>
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                        <span className="text-gray-500">Design 3</span>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Chosen Concept & Showcases</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Applying the selected logo to key touchpoints (vehicle livery, signage, stationery, and web) to
                    validate contrast, legibility, and impact.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                        <span className="text-gray-500">Showcase 1</span>
                    </div>
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                        <span className="text-gray-500">Showcase 2</span>
                    </div>
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                        <span className="text-gray-500">Showcase 3</span>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Featured by the Ministry of Health of Ukraine</h2>
                <p className="text-lg text-gray-700 mb-6">
                    This logo was showcased on the official Facebook page of the Ministry of Health of Ukraine.
                </p>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl h-64 flex items-center justify-center">
                    <span className="text-gray-500">Facebook feature placeholder</span>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Final Deliverables</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Handoff includes logo files in multiple formats (SVG, PDF, PNG), color specifications, and usage
                    guidance to ensure consistent application across media.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                        <span className="text-gray-500">Deliverable 1</span>
                    </div>
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                        <span className="text-gray-500">Deliverable 2</span>
                    </div>
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                        <span className="text-gray-500">Deliverable 3</span>
                    </div>
                </div>
            </section>

            <Link to="/" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out">
                Back to Portfolio
            </Link>
        </div>
    );
};

export default Project2;
