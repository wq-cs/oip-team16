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
        <div className="min-h-screen relative pt-24">
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-600 mb-8 animate-fade-in">River Kelvin: A Complex Ecosystem</h1>

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
                    <section className="bg-white/75 p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Current State</h2>
                        <p className="mb-4">
                            The River Kelvin, often referred to as one of the "most polluted rivers" in Glasgow, flows into the River Clyde. While the river faces significant challenges with pollution, it remains a vital part of Glasgow's ecosystem and continues to support a diverse range of wildlife.
                        </p>
                        <p className="mb-4">
                            The river's murky waters conceal numerous hazards, from natural obstacles like rocks and logs to man-made dangers such as discarded clothing and, most concerningly, used heroin needles. These hidden dangers pose significant risks to both wildlife and human visitors.
                        </p>
                    </section>

                    <section className="bg-gradient-to-r from-blue-600/75 to-teal-400/75 p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-semibold text-white mb-4">Local Insights & Community Connection</h2>
                        <p className="mb-4 text-white">
                            Despite its reputation, the River Kelvin remains deeply loved by local anglers. During our fieldwork, we had the privilege of meeting Tom and Lee, passionate fishermen who shared their intimate knowledge of the river. Their insights proved invaluable to our understanding of the river's dynamics and challenges.
                        </p>
                        <div className="bg-white/90 p-6 rounded-lg mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Solution Journey</h3>
                            <p className="mb-4">
                                Through our collaboration with Tom, Lee, and other local anglers, we identified an opportunity to support SEPA (Scottish Environment Protection Agency) in their river data collection and prediction efforts. This led to the development of our innovative solution: a social app concept that empowers anglers to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Log real-time river conditions</li>
                                <li>Record fish sightings and catches</li>
                                <li>Share local knowledge and insights</li>
                                <li>Contribute to citizen science initiatives</li>
                                <li>Build a community of river stewards</li>
                            </ul>
                        </div>
                        <p className="text-sm text-white/90 italic">
                            Special thanks to Tom and Lee for their time, knowledge, and for allowing us to experience the River Kelvin through their eyes.
                        </p>
                    </section>

                    <section className="bg-gradient-to-r from-blue-600/75 to-teal-400/75 p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-semibold text-white mb-4">Key Challenges</h2>
                        <ul className="list-disc list-inside space-y-4 text-white/90">
                            <li>Severe water pollution affecting the river's ecosystem</li>
                            <li>Hidden hazards including rocks, sandbags, and discarded items</li>
                            <li>Drug paraphernalia posing serious health and safety risks</li>
                            <li>Maintaining safe recreational access for licensed fishermen</li>
                            <li>Balancing human activity with wildlife preservation</li>
                        </ul>
                    </section>

                    <section className="bg-white/75 p-8 rounded-2xl shadow-lg">
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
                                            <p className="text-xl text-white mb-2">Debris</p>
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
