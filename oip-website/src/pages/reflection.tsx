import React from "react";

const Reflection: React.FC = () => {
  return (
    <div className="min-h-screen relative pt-24">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-600 mb-8 animate-fade-in">Project Reflections</h1>
        
        <div className="space-y-8 text-gray-600">
          <section className="bg-white/75 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Learning Journey</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
            </p>
          </section>

          <section className="bg-gradient-to-r from-blue-600/75 to-teal-400/75 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Key Insights</h2>
            <div className="space-y-6">
              <div className="bg-white/90 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Technical Discoveries</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
              </div>
              <div className="bg-white/90 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Team Collaboration</h3>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
              </div>
              <div className="bg-white/90 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Future Improvements</h3>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
              </div>
            </div>
          </section>

          <section className="bg-white/75 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Challenges Overcome</h2>
            <p className="mb-4">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.
            </p>
            <p>
              Sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Reflection;
