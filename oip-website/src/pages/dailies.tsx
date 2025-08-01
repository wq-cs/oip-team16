import React from "react";

const Dailies: React.FC = () => {
  return (
    <div className="min-h-screen relative pt-24">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-600 mb-8 animate-fade-in">Daily Reflection Journals</h1>
        
        <div className="space-y-8 text-gray-600">
          <section className="bg-gradient-to-r from-blue-600/75 to-teal-400/75 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Daily Progress</h2>
            <div className="space-y-6">
              <div className="bg-white/90 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Initial Brainstorming (22/7)</h3>
                <p>Our journey began with an open-minded brainstorming session where we explored environmental themes. The idea of addressing pollution along the River Kelvin emerged organically from our discussions.</p>
              </div>
              <div className="bg-white/90 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Partner Engagement (23/7)</h3>
                <p>We met with our partner to better understand the local context. Through that conversation, we discovered the River Kelvin's significance and its pressing pollution issues — shaping our project's direction.</p>
              </div>
              <div className="bg-white/90 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Prototyping Phase (24/7)</h3>
                <p>With a direction in mind, we began prototyping interactive elements and visual components for our website. The process helped us visualize how to communicate our message effectively to the public.</p>
              </div>
              <div className="bg-white/90 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Content Creation (25/7)</h3>
                <p>We spent the day recording videos and drafting content that would later become central to our storytelling efforts. This gave our prototype a personal, narrative-driven voice.</p>
              </div>
              <div className="bg-white/90 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Fieldwork & Community Input (29/7)</h3>
                <p>Our exploration along the River Kelvin offered firsthand insight into its condition. Meeting Tom and Lee, local anglers, added authentic voices and valuable perspectives to our project.</p>
              </div>
              <div className="bg-white/90 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Consolidation (30/7)</h3>
                <p>We gathered everything — field data, interviews, prototypes — and refined the website into a cohesive experience. This phase was about polishing our ideas into something tangible and impactful.</p>
              </div>
              <div className="bg-white/90 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Iteration & Delivery (31/7 - 1/8)</h3>
                <p>After sharing our work with our partner and receiving thoughtful feedback, we implemented revisions and finalized the video presentation. It marked the culmination of a meaningful and hands-on journey.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dailies;
