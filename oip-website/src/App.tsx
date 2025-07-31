import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Problem from "./pages/problem";
import Solution from "./pages/solution";
import Journey from "./pages/journey";
import Message from "./pages/message";
import Reflection from "./pages/reflection";

function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400 mb-6 animate-fade-in">
            River Kelvin Monitoring
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
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
      <section className="py-20 px-4 bg-white">
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
    </main>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/message" element={<Message />} />
        <Route path="/reflection" element={<Reflection />} />
      </Routes>
    </Router>
  );
}

export default App;
