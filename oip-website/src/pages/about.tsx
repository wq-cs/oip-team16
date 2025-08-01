import React from "react";
import FORKLogo from "../../public/images/FORKLogo.png";
import TeamPhoto from "../../public/images/OurTeam.jpg";

const About: React.FC = () => {
  return (
    <div className="min-h-screen relative pt-24">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8 animate-fade-in">About Us</h1>

        <div className="space-y-8">
          {/* Mission Section */}
          <section className="bg-white/75 p-8 rounded-2xl shadow-lg">
            <img
              src={FORKLogo}
              alt="Friends of the River Kelvin Logo"
              className="rounded-xl shadow-md mb-6 w-full h-80 object-cover"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">FORK Mission</h2>
            <p className="text-gray-600 mb-4">
              Friends of the River Kelvin (FORK) is a community-led environmental organization dedicated to protecting and enhancing the River Kelvin in Glasgow, Scotland. Since its founding in 1991, FORK has brought together local residents, volunteers, and nature lovers to care for this vital natural resource through education, conservation, and active engagement.
            </p>
            <p className="text-gray-600 mb-4">
              From litter picking to wildlife monitoring, FORK empowers people to take meaningful action to safeguard the river’s health and biodiversity. The organization plays a key role in raising awareness about environmental issues, connecting people with nature, and encouraging sustainable stewardship of our waterways.
            </p>
            <div className="flex items-center text-sm text-blue-600">
              <a href="https://fork.org.uk/" target="_blank" rel="noopener noreferrer" className="underline">
                Visit fork.org.uk to learn more
              </a>
            </div>
          </section>

          {/* Project Section */}
          <section className="bg-white/75 p-8 rounded-2xl shadow-lg">
            <img
              src={TeamPhoto}
              alt="SIT OIP 2025 - Team 16"
              className="rounded-xl shadow-md mb-6 w-full h-80 object-cover"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Project</h2>
            <p className="text-gray-600 mb-4">
              This website and supporting platform are being developed to support FORK’s mission by making it easier for volunteers, partners, and the community to access real-time updates on river conditions, educational resources, and upcoming events. Our goal is to create a digital space that amplifies FORK’s environmental efforts and builds stronger connections with those who care about the River Kelvin.
            </p>
            <p className="text-gray-600 mb-4">
              We aim to provide data-driven insights, community contributions, and collaborative tools that help monitor the health of the river and the impact of conservation efforts — all while preserving FORK’s unique identity as a grassroots movement.
            </p>
            <div className="flex items-center text-sm text-blue-600">
              <span>Developed in collaboration with FORK</span>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-gradient-to-r from-blue-600/75 to-teal-400/75 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Quick Facts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">1991</div>
                <p className="text-white/90">Year FORK Was Founded</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">300+</div>
                <p className="text-white/90">Volunteers Engaged</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <p className="text-white/90">Conservation Events / Year</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
