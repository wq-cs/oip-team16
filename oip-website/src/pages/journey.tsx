import React from "react";

const Journey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 animate-fade-in">Project Journey</h1>
        
        <div className="space-y-8">
          <section className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Timeline</h2>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                <h3 className="font-semibold text-gray-800 mb-2">Phase 1: Research</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis odio sit amet ex vehicula venenatis. Morbi dignissim elit vitae nulla posuere.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-green-500">
                <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-1"></div>
                <h3 className="font-semibold text-gray-800 mb-2">Phase 2: Development</h3>
                <p className="text-gray-600 mb-4">
                  Nullam auctor, nunc id aliquam tincidunt, nisl nunc tincidunt nunc, vitae aliquam nunc nunc vitae nunc. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-purple-500">
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1"></div>
                <h3 className="font-semibold text-gray-800 mb-2">Phase 3: Testing</h3>
                <p className="text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Milestones Achieved</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Research Completion</h3>
                <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Prototype Development</h3>
                <p className="text-gray-600">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Journey;
