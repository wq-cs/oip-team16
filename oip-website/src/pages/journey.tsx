import React from "react";

const Journey: React.FC = () => {
  return (
    <div className="min-h-screen relative pt-24">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8 animate-fade-in">Project Journey</h1>

        <div className="space-y-8">
          {/* Project Timeline Section */}
          <section className="bg-white/85 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Project Timeline</h2>
            <div className="flex flex-col gap-12">
              {[
                {
                  title: "Phase 1: Partner Meeting",
                  text: "We met with stakeholders to understand their concerns, pain points, and current systems in place.",
                  img: ["../../public/images/phase1.jpg"],
                  borderColor: "bg-blue-500"
                },
                {
                  title: "Phase 2: Low-Fi Prototyping",
                  text: "After ideation, we began sketching and creating low-fidelity prototypes to test initial concepts.",
                  img: ["../../public/images/Phase2Pic1.jpg", "../../public/images/Phase2Pic2.jpg","../../public/images/Phase2Pic3.jpg"],
                  borderColor: "bg-green-500"
                },
                {
                  title: "Phase 3: Field Work Study",
                  text: "We visited River Kelvin and interviewed anglers to gain field insights and feedback on our prototype.",
                  img: ["../../public/images/Phase3Pic2.jpg","../../public/images/Phase3Pic1.jpg"],
                  borderColor: "bg-purple-500"
                },
                {
                  title: "Phase 4: Improved Prototyping",
                  text: "Based on real-world feedback, we refined features and enhanced the UI for a cleaner, more usable experience.",
                  img: ["../../public/images/Phase4Pic1.jpg"],
                  borderColor: "bg-yellow-500"
                },
                {
                  title: "Phase 5: Usability Testing",
                  text: "We conducted usability tests, iterated based on findings, and aligned the prototype closer to user mental models.",
                  img: ["../../public/images/phase5.jpg"],
                  borderColor: "bg-pink-500"
                }
              ].map((phase, index) => {
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
                              className="w-full rounded-xl shadow-md object-cover"
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
                              className="w-full rounded-xl shadow-md object-cover"
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
                <h3 className="font-semibold text-gray-800 mb-2">Partner Collaboration Established</h3>
                <p className="text-gray-600">
                  Built a strong working relationship with FORK and gained clarity on stakeholder needs and vision.
                </p>
              </div>
              <div className="p-4 bg-white/90 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Field-Validated Design</h3>
                <p className="text-gray-600">
                  Validated prototype design through real conversations and observations at the River Kelvin with locals.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Journey;
