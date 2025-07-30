import React from "react";

const Solution = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Proposed Solution</h1>
        
        <section className="prose prose-lg max-w-none">
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <p className="text-lg">
              The team shifted from a broad user base to a targeted focus on licensed anglers—local experts 
              with deep familiarity with the river. With proper tools, these anglers could collect and 
              contribute data about observable environmental conditions, complementing traditional sensor data.
            </p>
          </div>

          <div className="grid gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Solution Components</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">Community Expertise</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Leverage knowledge of licensed anglers</li>
                    <li>Create data collection framework</li>
                    <li>Enable sharing of observations</li>
                  </ul>
                </div>
                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-green-600 mb-2">Data Integration</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Combine user observations with sensor data</li>
                    <li>Focus on observable conditions</li>
                    <li>Maintain data quality standards</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <div className="grid gap-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded">🎯</div>
                  <div>
                    <h4 className="font-semibold">Targeted User Base</h4>
                    <p>Focus on experienced anglers ensures quality data collection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded">📊</div>
                  <div>
                    <h4 className="font-semibold">Enhanced Data Collection</h4>
                    <p>Combination of human observations and sensor data provides comprehensive insights</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-2 rounded">🤝</div>
                  <div>
                    <h4 className="font-semibold">Community Engagement</h4>
                    <p>Empowers local experts to contribute to river monitoring</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded">⚡</div>
                  <div>
                    <h4 className="font-semibold">Real-time Updates</h4>
                    <p>Quick dissemination of important river condition changes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Solution;
