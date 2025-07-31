import React from "react";

const Problem: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 animate-fade-in">Understanding the Challenge</h1>
        
        <div className="space-y-8 text-gray-600">
          <section className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Background</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
            </p>
            <p className="mb-4">
              Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Challenges</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>Etiam ultrices. Suspendisse in justo eu magna luctus suscipit.</li>
              <li>Sed lectus. Integer euismod lacus luctus magna.</li>
              <li>Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem.</li>
              <li>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Impact Assessment</h2>
            <p className="mb-4">
              Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a.
            </p>
            <p>
              Vestibulum ullamcorper mauris at ligula. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Aenean imperdiet. Etiam ultricies nisi vel augue.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Problem;
