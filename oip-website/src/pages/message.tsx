import React from "react";

const Message: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 animate-fade-in">Project Updates</h1>
        
        <div className="space-y-8">
          <section className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Latest Messages</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800">Project Milestone Achievement</h3>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                </p>
                <div className="flex items-center text-sm text-blue-600">
                  <span>Development Team</span>
                </div>
              </div>

              <div className="border-b pb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800">Research Phase Complete</h3>
                  <span className="text-sm text-gray-500">5 days ago</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                </p>
                <div className="flex items-center text-sm text-blue-600">
                  <span>Research Team</span>
                </div>
              </div>

              <div className="pb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800">Community Feedback Update</h3>
                  <span className="text-sm text-gray-500">1 week ago</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <div className="flex items-center text-sm text-blue-600">
                  <span>Community Engagement Team</span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Statistics</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <p className="text-gray-600">Project Completion</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24</div>
                <p className="text-gray-600">Team Updates</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
                <p className="text-gray-600">Milestones Reached</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Message;
