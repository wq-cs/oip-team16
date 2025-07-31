import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Problem: React.FC = () => {
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 animate-fade-in">River Kelvin: A Complex Ecosystem</h1>

                {/* Video Section */}
                <section className="mb-8 rounded-2xl overflow-hidden shadow-lg bg-gray-900">
                    <video
                        className="w-full h-[500px] object-cover opacity-90"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/videos/River Kelvin Footage.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </section>

                <div className="space-y-8 text-gray-600">
                    <section className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Current State</h2>
                        <p className="mb-4">
                            River Kelvin faces significant challenges with pollution despite being a vital part of Glasgow's ecosystem. While the river remains a popular spot for licensed fishermen pursuing their hobby, its waters tell a concerning story of environmental challenges and safety risks.
                        </p>
                        <p className="mb-4">
                            The river's murky waters conceal numerous hazards, from natural obstacles like rocks and logs to man-made dangers such as discarded clothing and, most concerningly, used heroin needles. These hidden dangers pose significant risks to both wildlife and human visitors.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Challenges</h2>
                        <ul className="list-disc list-inside space-y-4">
                            <li>Severe water pollution affecting the river's ecosystem</li>
                            <li>Hidden hazards including rocks, sandbags, and discarded items</li>
                            <li>Drug paraphernalia posing serious health and safety risks</li>
                            <li>Maintaining safe recreational access for licensed fishermen</li>
                            <li>Balancing human activity with wildlife preservation</li>
                        </ul>
                    </section>

                    <section className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Wildlife Resilience</h2>
                        <p className="mb-4">
                            Despite these challenges, River Kelvin showcases nature's remarkable resilience. The river remains home to a diverse ecosystem, with various bird species making their home along its banks. Perhaps most impressively, salmon can still be seen jumping in its waters, a testament to the river's enduring capacity to support life.
                        </p>
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">River Life Gallery</h3>
                            <div className="rounded-xl overflow-hidden shadow-inner bg-gray-900">
                                <Slider {...carouselSettings} className="slider-container">
                                    <div className="relative h-80">
                                        <img
                                            src="/images/containers.jpg"
                                            alt="Containers by the river"
                                            className="w-full h-full object-cover transition-opacity duration-300"
                                            loading="lazy"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 text-center">
                                            <p className="text-xl text-white mb-2">Abandoned Containers</p>
                                            <p className="text-gray-200 text-sm">Environmental hazards affecting the river's ecosystem</p>
                                        </div>
                                    </div>
                                    <div className="relative h-80">
                                        <img
                                            src="/images/jacket.jpg"
                                            alt="Discarded jacket"
                                            className="w-full h-full object-cover transition-opacity duration-300"
                                            loading="lazy"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 text-center">
                                            <p className="text-xl text-white mb-2">Discarded Clothing</p>
                                            <p className="text-gray-200 text-sm">One of many items improperly disposed in the river</p>
                                        </div>
                                    </div>
                                    <div className="relative h-80">
                                        <img
                                            src="/images/muddy.jpg"
                                            alt="Muddy river water"
                                            className="w-full h-full object-cover transition-opacity duration-300"
                                            loading="lazy"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 text-center">
                                            <p className="text-xl text-white mb-2">Murky Waters</p>
                                            <p className="text-gray-200 text-sm">Poor visibility poses risks to both wildlife and visitors</p>
                                        </div>
                                    </div>
                                    <div className="relative h-80">
                                        <img
                                            src="/images/squirrel.jpg"
                                            alt="Local wildlife"
                                            className="w-full h-full object-cover transition-opacity duration-300"
                                            loading="lazy"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 text-center">
                                            <p className="text-xl text-white mb-2">Resilient Wildlife</p>
                                            <p className="text-gray-200 text-sm">Local fauna persisting despite environmental challenges</p>
                                        </div>
                                    </div>
                                    <div className="relative h-80">
                                        <img
                                            src="/images/twigs.jpg"
                                            alt="River debris"
                                            className="w-full h-full object-cover transition-opacity duration-300"
                                            loading="lazy"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 text-center">
                                            <p className="text-xl text-white mb-2">Natural Debris</p>
                                            <p className="text-gray-200 text-sm">Accumulated debris affecting water flow and safety</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Problem;
