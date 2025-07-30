import React from "react";

const DesignJourney = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Design Journey</h1>
        
        <section className="prose prose-lg max-w-none">
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-lg">
              Our design journey evolved through continuous learning and feedback, moving from a broad 
              approach to a focused solution targeting specific user needs and environmental considerations.
            </p>
          </div>

          <div className="grid gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Project Evolution</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Initial Concept</h4>
                  <p>Use large datasets from SEPA and other sources to model conditions</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Refinement</h4>
                  <p>Feedback from project partner George helped narrow the focus to anglers</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold">Field Research</h4>
                  <p>George introduced suitable data collection sites and emphasized quality over quantity in data</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Key Learnings</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-purple-600 mb-2">Environmental Indicators</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Observable conditions: clarity, flow</li>
                    <li>Lab work needed: chemical content</li>
                    <li>Importance of visual assessment</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-indigo-600 mb-2">Ethical Considerations</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>GDPR compliance critical</li>
                    <li>Data consent requirements</li>
                    <li>Privacy protection measures</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Insights</h3>
              <div className="grid gap-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded">👥</div>
                  <div>
                    <h4 className="font-semibold">Domain Expertise</h4>
                    <p>Engaging with experienced anglers provided crucial insights into river behavior</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded">🎯</div>
                  <div>
                    <h4 className="font-semibold">Focused Approach</h4>
                    <p>Narrowing scope to specific user group improved solution effectiveness</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-2 rounded">📊</div>
                  <div>
                    <h4 className="font-semibold">Data Quality</h4>
                    <p>Emphasis on quality over quantity in data collection</p>
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

export default DesignJourney;
