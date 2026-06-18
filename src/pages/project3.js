import React from 'react';
import { Link } from 'react-router-dom';

const Project3 = () => {
    return (
        <div className="container mx-auto px-4 py-8 text-gray-800">
            <section className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Project 3: Logo Case</h1>
                <p className="text-xl text-gray-600 mb-8">A concise brand identity journey</p>
            </section>

            <section className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
                        <ul className="space-y-2">
                            <li><strong>Client:</strong> [Client Name]</li>
                            <li><strong>Year:</strong> 2024</li>
                            <li><strong>Scope:</strong> Logo, Identity Basics</li>
                            <li><strong>Tools:</strong> Figma, Adobe Creative Suite, AI exploration</li>
                        </ul>
                    </div>
                    <div>
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
                            <span className="text-gray-500">Video placeholder</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">The Challenge</h2>
                <p className="text-lg mb-4">
                    Create a distinct, memorable logo that scales across small digital touchpoints and large signage,
                    while reflecting the brand's reliability and modern spirit.
                </p>
                <p className="text-lg mb-4">
                    The direction required quick early exploration, efficient client feedback loops, and clear testing in
                    realistic contexts to validate contrast and legibility.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">My Role</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-lg mb-4">I led end-to-end design activities, including:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Sketching and AI-assisted exploration for breadth of concepts</li>
                            <li>Vector refinement and grid-based construction</li>
                            <li>Color and typography suggestions for identity basics</li>
                        </ul>
                    </div>
                    <div>
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
                            <span className="text-gray-500">Role placeholder</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">User Research</h2>
                <p className="text-lg mb-4">
                    Short interviews with stakeholders and target audience clarified tone, associations, and constraints
                    for the logo: simplicity, clarity, and freshness.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="bg-gray-200 h-48 flex items-center justify-center">
                            <span className="text-gray-500">Persona 1</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Stakeholder A</h3>
                            <p className="text-gray-600 mb-4">Brand Owner</p>
                            <p>Seeks a modern, clean mark that is instantly recognizable.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="bg-gray-200 h-48 flex items-center justify-center">
                            <span className="text-gray-500">Persona 2</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Customer B</h3>
                            <p className="text-gray-600 mb-4">End User</p>
                            <p>Values clarity at small sizes and good contrast on mobile.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="bg-gray-200 h-48 flex items-center justify-center">
                            <span className="text-gray-500">Persona 3</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Partner C</h3>
                            <p className="text-gray-600 mb-4">Supplier</p>
                            <p>Needs a straightforward mark for print and signage workflows.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Research Insights</h2>
                <p className="text-lg mb-4">Key insights that guided the logo:</p>
                <p className="text-lg mb-4">1. Ensure legibility at favicon and app-icon sizes.</p>
                <p className="text-lg mb-4">2. Balance uniqueness with simplicity for recall.</p>
                <p className="text-lg mb-4">3. Provide strong monochrome performance before color.</p>
                <p className="text-lg mb-4">4. Prepare variations for light and dark backgrounds.</p>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Proposition</h2>
                <p className="text-lg mb-4">
                    A minimal, geometric mark with balanced negative space and a wordmark pairing that scales across
                    print, web, and mobile.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Design</h2>
                <p className="text-lg mb-4">Core decisions that shaped the final logo:</p>
                <ul className="list-disc list-inside space-y-4 text-lg mb-6">
                    <li><strong>Geometry:</strong> Uses a grid to maintain optical balance.</li>
                    <li><strong>Monochrome First:</strong> Color applied after form validation.</li>
                    <li><strong>Contrast:</strong> Tuned for accessibility standards.</li>
                    <li><strong>Variants:</strong> Horizontal, stacked, and mark-only options.</li>
                </ul>
                <p className="text-lg">Delivers clarity and flexibility across contexts.</p>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Design System</h2>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
                    <span className="text-gray-500">Design system placeholder</span>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Design Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Challenge 01: Mark Construction</h3>
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center mb-4">
                            <span className="text-gray-500">Screenshot 1</span>
                        </div>
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center mb-4">
                            <span className="text-gray-500">Screenshot 2</span>
                        </div>
                        <p className="text-lg">Constructing and refining the core mark on a grid.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Challenge 02: Applications</h3>
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center mb-4">
                            <span className="text-gray-500">Screenshot 3</span>
                        </div>
                        <p className="text-lg">Testing on backgrounds and sizes to validate performance.</p>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-4">Challenge 03: Spec & Guides</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center">
                            <span className="text-gray-500">Specs 1</span>
                        </div>
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center">
                            <span className="text-gray-500">Specs 2</span>
                        </div>
                    </div>
                    <p className="text-lg mt-4">Preparation of export sets and usage guidance.</p>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Final Designs</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                        <span className="text-gray-500">Final 1</span>
                    </div>
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                        <span className="text-gray-500">Final 2</span>
                    </div>
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                        <span className="text-gray-500">Final 3</span>
                    </div>
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl h-48 flex items-center justify-center">
                        <span className="text-gray-500">Final 4</span>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Reflection</h2>
                <p className="text-lg mb-4">
                    This logo case reinforced the value of quick exploratory breadth followed by focused refinement. Aligning early
                    on criteria made the selection process smooth and objective.
                </p>
                <p className="text-lg mb-4">
                    With clear specification and export guidance, the mark is ready for consistent, long-term use across media.
                </p>
            </section>

            <Link to="/" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out">
                Back to Portfolio
            </Link>
        </div>
    );
};

export default Project3;
