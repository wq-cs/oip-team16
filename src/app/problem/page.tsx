import React from "react";

const ProblemStatement = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Problem Statement</h1>
        
        <section className="prose prose-lg max-w-none">
          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <p className="text-lg">
              The River Kelvin's condition changes unpredictably due to pollution, runoff, and flow rate shifts. 
              This poses risks to river users, especially anglers, who often operate in less monitored areas. 
              There's a lack of accessible, real-time data that can help these users make informed decisions.
            </p>
          </div>

          <div className="grid gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Key Challenges</h3>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Unpredictable Changes:</strong>
                  <p>River conditions can change rapidly due to multiple environmental factors</p>
                </li>
                <li>
                  <strong>Limited Monitoring:</strong>
                  <p>Many areas frequented by anglers lack proper monitoring equipment</p>
                </li>
                <li>
                  <strong>Data Accessibility:</strong>
                  <p>Real-time condition data is not readily available to users</p>
                </li>
                <li>
                  <strong>Safety Concerns:</strong>
                  <p>Lack of information can lead to dangerous situations for river users</p>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Impact Areas</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold mb-2">Public Safety</h4>
                  <p>Risk to anglers and other river users due to unexpected conditions</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold mb-2">Environmental</h4>
                  <p>Difficulty in tracking and responding to environmental changes</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold mb-2">Community</h4>
                  <p>Limited ability for experienced users to share knowledge</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold mb-2">Economic</h4>
                  <p>Affects fishing activities and related local businesses</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProblemStatement;
