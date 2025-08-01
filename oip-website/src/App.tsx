import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Problem from "./pages/problem";
import Solution from "./pages/solution";
import Journey from "./pages/journey";
import About from "./pages/about";
import Reflection from "./pages/reflection";
import Dailies from "./pages/dailies";

function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 bg-[url('/images/RK.jpg')] bg-top bg-repeat-y bg-cover">
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400 py-8 mb-6 animate-fade-in">
            River Kelvin Monitoring
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Transforming river safety through innovative IoT solutions and real-time analytics.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/problem" className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
              Learn More
            </Link>
            <Link to="/journey" className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Our Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-20 px-4 bg-white/75 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Problem Statement</h2>
            <p className="text-gray-600 leading-relaxed">
              River Kelvin's condition changes unpredictably, posing safety risks to the community.
              Our mission is to address these challenges through innovative monitoring solutions.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Solution</h2>
            <p className="text-gray-600 leading-relaxed">
              A comprehensive real-time monitoring system that leverages IoT technology and advanced
              analytics to provide accurate, accessible data about river conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/75 to-teal-400/75 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Impact & Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <p className="text-white/90">Real-time Monitoring</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <p className="text-white/90">Data Points Collected Daily</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <p className="text-white/90">Key Metrics Tracked</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/75 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">⏰ Real-time Monitoring</h3>
              <p className="text-gray-600">
                Continuous tracking of water levels, flow rates, and environmental conditions for immediate awareness.
              </p>
            </div>
            <div className="bg-white/90 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">📊 Data Analytics</h3>
              <p className="text-gray-600">
                Advanced analysis of historical data to predict potential risks and patterns in river behavior.
              </p>
            </div>
            <div className="bg-white/90 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">🚨 Community Alerts</h3>
              <p className="text-gray-600">
                Timely notifications and updates to keep the local community informed about river conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/75 to-teal-400/75 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Us in Protecting River Kelvin</h2>
          <p className="text-xl text-white/90 mb-8">
            Learn more about our innovative approach to river monitoring and how it benefits our community.
          </p>
          <Link to="/about" className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors inline-block">
            Discover More
          </Link>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 z-[-1]">
          <div className="w-full h-full bg-[url('/images/RK.jpg')] bg-repeat-y bg-top bg-cover" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/about" element={<About />} />
          <Route path="/reflection" element={<Reflection />} />
          <Route path="/dailies" element={<Dailies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
