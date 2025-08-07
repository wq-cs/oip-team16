import React, { useState } from "react";

const Journey: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const timelinePhases = [
    {
      title: "Phase 1: Partner Meeting",
      text: "Before the project begun, the teams were scheduled to meet with relevant stakeholders to understand their concerns, pain points, and current systems in place. This meeting allowed us to align our goals and expectations with the partner for the project as well as clarify any uncertainties with regards to the problem statements.",
      img: [`${import.meta.env.BASE_URL}images/FORKLogo.png`],
      borderColor: "bg-blue-500",
    },
    {
      title: "Phase 2: Problem Framing",
      text: "After the partner meeting, the team worked together to research on the core existing problems with river monitoring, researched environmental challenges, and refined our problem statement further. This phase led us to discover a paper 'Local Habit Action Plan' published by the Glasgow City Council which highlighted the urgent concerns of the existing problems and need for better monitoring of the River Kelvin conditions, better aligning our solution with the current situation.",
      img: [
        `${import.meta.env.BASE_URL}images/ProblemFraming1.png`,
        `${import.meta.env.BASE_URL}images/ProblemFraming2.png`,
      ],
      borderColor: "bg-red-500",
    },
    {
      title: "Phase 3: Stakeholder Mapping",
      text: "Through our internal team discussions whilst referring to the notes taken down from the previous partner meeting, we identified key stakeholders including FORK, local anglers, residents, dogwalkers and government agencies to tailor our solution to their needs. This phase also involved understanding the River Kelvin's ecosystem and its significance to the local community, which helped us empathize with the users and their interactions with the river. Eventually, the team settled on local anglers as the primary user group for our solutions as they are the most active users of the river and have a vested interest in its health and conditions.",
      img: [
        `${import.meta.env.BASE_URL}images/RiverKelvinAngler.jpg`,
        `${import.meta.env.BASE_URL}images/RiverKelvinKids.jpg`,
        `${import.meta.env.BASE_URL}images/KelvinWalkwayTrekkers.jpg`,
      ],
      borderColor: "bg-indigo-500",
    },
    {
      title: "Phase 4: Technical Research on Existing Solutions & Feasibility Analysis",
      text: "Moving on to the next phase, the team reviewed existing sensor technologies, environmental monitoring tools, and evaluated what was technically feasible for our project. This included researching current solutions like the UK Centre for Ecology & Hydrology's river monitoring systems, The Big River Watch's community engagement tools, and the Water Tracker's data collection methods. We also assessed the technical feasibility of integrating these technologies into our solution. This phase helped us identify gaps in existing solutions and opportunities for innovation, leading to the development of a more effective and user-friendly low-fi prototype subsequently.",
      img: [
        `${import.meta.env.BASE_URL}images/UKCEH.png`,
        `${import.meta.env.BASE_URL}images/TheBRW.png`,
        `${import.meta.env.BASE_URL}images/WTT.svg`,
      ],
      borderColor: "bg-orange-500",
    },
    {
      title: "Phase 5: Low-Fi Prototyping",
      text: "After ideation, we began sketching and creating low-fidelity prototypes to test initial concepts, building on the insights gathered from previous phases. This included wireframes, user flows, and basic interaction designs to visualize how users would interact with our solution. We focused on creating a simple, intuitive interface that would allow users to easily access river monitoring data and contribute their observations. The low-fi prototype focused on key features which included a map view of the river, real-time data on water quality, and a community feedback section for users to share their observations and concerns which the team deemed important.",
      img: [
        `${import.meta.env.BASE_URL}images/Phase2Pic1.jpg`,
        `${import.meta.env.BASE_URL}images/Phase2Pic2.jpg`,
        `${import.meta.env.BASE_URL}images/Phase2Pic3.jpg`,
      ],
      borderColor: "bg-green-500",
    },
    {
      title: "Phase 6: Field Work Study",
      text: "After the completion of the low-fi prototypes, we visited the River Kelvin and interviewed local anglers to gain field insights and feedback on our prototype. This field work study allowed us to observe how users interacted with the river, understand their needs and pain points, and gather valuable feedback on our prototype. We were grateful to have the opportunity to engage with the community in this way and listen first hand from the users themselves on their experiences and challenges as well as their hopes for the future of river monitoring, providing feedback on our design as well as their personal stories. These invaluable feedbacks would not have been possible from the comfort of the labs and lecture rooms and was crucial in validating our assumptions and refining our prototype based on real-world user feedback.",
      img: [
        `${import.meta.env.BASE_URL}images/Phase3Pic2.jpg`,
        `${import.meta.env.BASE_URL}images/Phase3Pic1.jpg`,
      ],
      borderColor: "bg-purple-500",
    },
    {
      title: "Phase 7: Improved Prototyping",
      text: "Based on the real-world feedback gathered, we refined features and enhanced the UI for a cleaner, more usable experience using Figma. This phase involved iterating on the low-fi prototype, incorporating user feedback to improve usability and functionality. We focused on simplifying the user interface, enhancing the map view, and adding features that addressed user needs such as real-time data updates and community engagement tools. The improved prototype was designed to be more intuitive and user-friendly, ensuring that users could easily access the information they needed and contribute their observations effectively.",
      img: [`${import.meta.env.BASE_URL}images/Phase4Pic1.jpg`],
      borderColor: "bg-yellow-500",
    },
    {
      title: "Phase 8: Usability Testing",
      text: "Lastly, We conducted usability tests, iterated based on findings, and aligned the prototype closer to user mental models. This phase involved testing the improved prototype with users to identify any usability issues and gather feedback on the overall user experience. We observed how users interacted with the prototype, noted any challenges they faced, and collected their suggestions for improvement. Based on the findings from usability testing, we made further refinements to the prototype, ensuring that it aligned with user mental models and provided a seamless experience. The final prototype was designed to be intuitive, user-friendly, and effective in addressing the needs of local anglers and the community.",
      img: [`${import.meta.env.BASE_URL}images/phase5.jpg`],
      borderColor: "bg-pink-500",
    },
  ];

  return (
    <div className="min-h-screen relative pt-24">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8 animate-fade-in">Project Journey</h1>

        <div className="space-y-8">
          {/* Project Timeline Section */}
          <section className="bg-white/85 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Project Timeline</h2>
            <div className="flex flex-col gap-12">
              {timelinePhases.map((phase, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div key={index} className="flex flex-col md:flex-row items-stretch gap-4 md:gap-8">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2">
                      {isEven ? (
                        <div className="flex flex-wrap gap-4">
                          {phase.img.map((imgPath, i) => (
                            <img
                              key={i}
                              src={imgPath}
                              alt={`${phase.title} - ${i + 1}`}
                              className="w-full cursor-pointer rounded-xl shadow-md object-cover"
                              onClick={() => handleImageClick(imgPath)}
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="h-full flex flex-col justify-center">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{phase.title}</h3>
                          <p className="text-gray-600">{phase.text}</p>
                        </div>
                      )}
                    </div>

                    {/* Center Timeline Line */}
                    <div className="hidden md:flex justify-center">
                      <div className={`w-[4px] ${phase.borderColor} rounded-full min-h-full`}></div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/2">
                      {!isEven ? (
                        <div className="flex flex-wrap gap-4">
                          {phase.img.map((imgPath, i) => (
                            <img
                              key={i}
                              src={imgPath}
                              alt={`${phase.title} - ${i + 1}`}
                              className="w-full cursor-pointer rounded-xl shadow-md object-cover"
                              onClick={() => handleImageClick(imgPath)}
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="h-full flex flex-col justify-center">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{phase.title}</h3>
                          <p className="text-gray-600">{phase.text}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Milestones Achieved Section */}
          <section className="bg-gradient-to-r from-teal-400/75 to-emerald-500/75 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Milestones Achieved</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-white/90 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">🤝 Partner Collaboration Established</h3>
                <p className="text-gray-600">
                  Built a strong working relationship with FORK and gained clarity on stakeholder needs and vision.
                </p>
              </div>
              <div className="p-4 bg-white/90 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">✅ Field-Validated Design</h3>
                <p className="text-gray-600">
                  Validated prototype design through real conversations and observations at the River Kelvin with locals.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-3xl max-h-[80vh] rounded-lg border-4 border-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-red-400"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Journey;
