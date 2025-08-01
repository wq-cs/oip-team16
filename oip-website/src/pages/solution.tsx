import React from "react";

const Solution: React.FC = () => {
  return (
    <div className="min-h-screen relative pt-24">

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-600 mb-8 animate-fade-in">Our Solution</h1>

        <div className="space-y-8 text-gray-600">
          <section className="bg-white/75 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Overview</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>
            <p className="mb-4">
              Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.
            </p>
          </section>

          <section className="bg-gradient-to-r from-blue-600/75 to-teal-400/75 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 bg-white/90 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Real-time Monitoring</h3>
                <p>Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.</p>
              </div>
              <div className="space-y-2 bg-white/90 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Data Analytics</h3>
                <p>Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas.</p>
              </div>
              <div className="space-y-2 bg-white/90 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Alert System</h3>
                <p>Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.</p>
              </div>
              <div className="space-y-2 bg-white/90 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">User Interface</h3>
                <p>Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora.</p>
              </div>
            </div>
          </section>

          <section className="bg-white/75 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Implementation Plan</h2>
            <p className="mb-4">
              Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti.
            </p>
            <p>
              Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Solution;
