import React from "react";

const ProjectOverview = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">River Kelvin Condition Prediction Project</h1>
        
        <section className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="mb-6">
            Team 16 focused on predicting river conditions for the River Kelvin in Glasgow. The aim is to improve public safety 
            and sustainability, especially for anglers, by creating a tool that offers more accurate, location-specific insights 
            into river conditions.
          </p>

          <div className="my-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Project Highlights</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Focused on River Kelvin in Glasgow</li>
              <li>Targeting licensed anglers as primary users</li>
              <li>Combining community knowledge with environmental science</li>
              <li>Emphasizing ethical data practices</li>
              <li>Creating location-specific insights</li>
            </ul>
          </div>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Key Objectives</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Safety</h4>
                <p>Improve public safety through accurate river condition predictions</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Sustainability</h4>
                <p>Promote environmental awareness and sustainable river use</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Community</h4>
                <p>Leverage local expertise from licensed anglers</p>
              </div>
              <div className="bg-purple-50 p-4 rounded">
                <h4 className="font-semibold mb-2">Data Quality</h4>
                <p>Ensure high-quality, ethical data collection practices</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectOverview;
