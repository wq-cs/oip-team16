import React from "react";

const CoreMessage = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Core Message</h1>
        
        <section className="prose prose-lg max-w-none">
          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <p className="text-lg">
              This project combines community knowledge, ethical data practices, and environmental science 
              to propose a practical and user-centered tool for predicting river conditions, benefiting 
              both people and the planet.
            </p>
          </div>

          <div className="grid gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Project Pillars</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl mb-2">🌊</div>
                  <h4 className="font-semibold">Environmental Science</h4>
                  <p className="text-sm">River condition monitoring and prediction</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl mb-2">👥</div>
                  <h4 className="font-semibold">Community Knowledge</h4>
                  <p className="text-sm">Leveraging local expertise</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl mb-2">🔒</div>
                  <h4 className="font-semibold">Ethical Practices</h4>
                  <p className="text-sm">Responsible data collection</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Impact Areas</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Public Safety</h4>
                  <p>Enhanced river condition awareness for safer activities</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Environmental Monitoring</h4>
                  <p>Better understanding of river ecosystem changes</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold">Community Empowerment</h4>
                  <p>Enabling anglers to contribute their expertise</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">Data Innovation</h4>
                  <p>Combining human insights with technological solutions</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Future Vision</h3>
              <p className="mb-4">
                This project lays the groundwork for a more comprehensive approach to river monitoring 
                that could be expanded to other waterways and communities, creating a network of 
                informed and engaged environmental stewards.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-blue-600 mb-2">Scalability</h4>
                  <p>Potential to expand to other rivers and communities</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-green-600 mb-2">Sustainability</h4>
                  <p>Long-term environmental monitoring and protection</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CoreMessage;
