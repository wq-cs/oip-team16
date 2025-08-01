import React from "react";

const Solution: React.FC = () => {
  return (
    <div className="min-h-screen relative pt-24">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8 animate-fade-in">Our Solution</h1>

        <div className="space-y-8 text-gray-600">
          {/* NEW SECTION: Prototype Diagram */}
        <section className="bg-white/85 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">System Overview</h2>
          <p className="mb-4">
            Our solution for the River Kelvin leverages an integrated IoT ecosystem to monitor, collect, and analyze environmental and ecological data. Information flows from sensor devices, mobile applications, and community observers to a centralized database, enabling insights and alerts to be shared with relevant stakeholders.
          </p>
          <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <img
              src="../../public/images/OIP_SolutionPrototype.png"
              alt="Solution Prototype for River Kelvin Monitoring"
              className="w-full rounded-lg"
            />
          </div>
        </section>

          <section className="bg-white/85 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Overview</h2>
            <p className="mb-4">
              The system collects multi-source data including sensory inputs (temperature, pH, turbidity), visual/audio data, and user feedback. These are transmitted to a cloud server where AI models assist in analyzing trends and detecting anomalies.
            </p>
            <p className="mb-4">
              Outputs are distributed to mobile apps, community dashboards, and government monitoring platforms for immediate access and action. This empowers both authorities and local citizens to stay informed about river health.
            </p>
          </section>

          <section className="bg-gradient-to-r from-teal-400/85 to-emerald-500/85 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 bg-white/90 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">⏰ Real-time Monitoring</h3>
                <p>Live tracking of river metrics using deployed IoT devices and mobile user inputs to detect pollution or ecological disruptions.</p>
              </div>
              <div className="space-y-2 bg-white/90 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">📊 Data Analytics</h3>
                <p>Centralized database supported by AI analytics to identify trends, forecast issues, and support decision-making.</p>
              </div>
              <div className="space-y-2 bg-white/90 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">🚨 Alert System</h3>
                <p>Notifications for sudden environmental changes sent to stakeholders including government agencies and the public.</p>
              </div>
              <div className="space-y-2 bg-white/90 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">✅ User Interface</h3>
                <p>Accessible dashboards and mobile app interfaces for both casual users and field professionals to interact with live data.</p>
              </div>
            </div>
          </section>

          <section className="bg-white/85 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Implementation Plan</h2>
            <p className="mb-4">
              Phase 1 involves deployment of sensors and integration with mobile app input features. Phase 2 connects the server to stakeholders and builds the data visualization dashboard. Phase 3 evaluates model performance and feedback to refine alert systems and citizen participation.
            </p>
            <p>
              By collaborating with community members (like FORK), we ensure the solution stays rooted in practical needs while being scalable and future-ready.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Solution;
