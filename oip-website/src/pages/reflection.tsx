import React from "react";

const Reflection: React.FC = () => {
  return (
    <div className="min-h-screen relative pt-24">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8 animate-fade-in">Project Reflections</h1>
        
        <section className="bg-white/75 p-8 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Partner Collaboration</h2>
          <p>
            Throughout our project, our partner played a pivotal role in helping us contextualize the River Kelvin’s environmental issues. They provided direction during our early ideation phase and reviewed our drafts and prototypes, giving feedback that shaped our final outcome. These interactions ensured our solution was aligned with real-world needs.
          </p>
        </section>

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


          <section className="bg-white/75 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Challenges Overcome</h2>
            <p className="mb-4">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.
            </p>
            <p>
              Sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.
            </p>
          </section>

          <section className="bg-white/75 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Reflection</h2>
            <p className="mb-4">
              We are especially proud of the visual storytelling and emotional tone we were able to achieve in our video and website. The integration of real-world observations, interviews, and user-centered design was a testament to our collaborative spirit. 
            </p>
            <p>
              However, we acknowledge that with more time, we could have conducted broader community engagement to further validate our solutions. Despite the limitations, the final output reflects a sincere and dedicated team effort.
            </p>
          </section>

          <section className="bg-white/75 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Portfolio</h2>
            <ul className="list-disc list-inside text-blue-700">
              <li><a href="#" target="_blank" rel="noopener noreferrer">Weekly Pitch Videos</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Partner Communication Logs</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Daily Team Briefs</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">External Survey Results</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Public Interview Transcripts</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Reflection;
