import React from "react";

const Reflection: React.FC = () => {
  return (
    <div className="min-h-screen relative pt-24">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8 animate-fade-in">Project Reflections</h1>

        <section className="bg-white/75 p-8 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Portfolio</h2>
          <ul className="list-disc list-inside text-blue-700">
            <li>
              <a href="/oip-team16/dailybriefs#week1-pitch" className="hover:underline">
                Week 1 Pitch Video
              </a>
            </li>
            <li>
              <a href="/oip-team16/dailybriefs#week2-pitch" className="hover:underline">
                Week 2 Pitch Video
              </a>
            </li>
            <li>
              <a href="/oip-team16/dailybriefs" className="hover:underline" rel="noopener noreferrer">
                Daily Team Briefs
              </a>
            </li>
            <li>
              <a href="#interview-pain-points" className="hover:underline">
                Interview Pain Points
              </a>
            </li>
            <li>
              <a href="/oip-team16/dailybriefs#poster" className="hover:underline">
                Poster
              </a>
            </li>
          </ul>
        </section>

        <section className="bg-white/75 p-8 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Partner Collaboration</h2>
          <p className="mb-4">
            Throughout our project, our partner George from the Friends of the River Kelvin (FORK) played a pivotal role in helping us contextualize the environmental challenges faced by the local community. From our very first meeting, George generously shared his expertise and deep knowledge of the river's users, including anglers, families, students, and wildlife enthusiasts. He helped us identify areas of concern, such as neglected banks, pollution hotspots, and limited public awareness which gave us a clear direction to pursue.
          </p>
          <p>
            We reflected on this guidance and promptly organized a fieldwork visit to explore the river firsthand. During this visit, we documented the environmental degradation and spoke to local residents and anglers, which validated many of the issues George had raised. After compiling our findings, we reconnected with him to present what we had discovered. His feedback was constructive and affirming: he agreed with our observations and encouraged us to emphasize community storytelling in our solution. This feedback cycle not only refined our project but also reinforced the importance of working hand-in-hand with local voices.
          </p>
        </section>

        <div className="space-y-8 text-gray-800">
  <section className="bg-white/75 p-8 rounded-2xl shadow-lg">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Essays – Things we are proud / not proud of</h2>
    <p className="mb-4">
      The Overseas Immersion Programme has been one of the most enriching and transformative experiences for our team. As computing science students, we’ve spent years solving technical problems, building software, and working through requirements. But this project challenged us in new and unexpected ways. It wasn’t just about designing a solution. It was about designing with purpose, for people, and within the context of a real, living ecosystem.
    </p>
    <p className="mb-4">
      In the beginning, we weren’t sure what to expect. But the moment we met with our partner, George from the  Friends of the River Kelvin (FORK), something shifted. Suddenly, the project felt real. There was a community counting on us not just to design something functional, but to create something that could genuinely help. We gathered as a team and spent our early sessions doing what came most naturally to us: talking, debating, scribbling, questioning. We didn’t rush into solutions. We worked hard to understand the river’s users, the environment, and the invisible relationships between them. Every brainstorming session was filled with sketches, post-its, rough maps, and problem trees. We challenged each other’s assumptions with care, knowing that the best ideas often come from friction and collaboration.
    </p>
    <p className="mb-4">
      What we’re most proud of is how deeply we committed to this process. Instead of staying in the classroom or Googling answers, we stepped outside. We walked along the River Kelvin, asked questions, listened to stories, and learned from people whose lives are shaped by the river. One of the most memorable moments was speaking to two anglers, an older man and a younger boy, who spoke passionately about pollution, salmon habitats, and the history of the river. They even let us fish with them, teaching us how to tie knots and identify species. It was more than research. It was a connection. And it reminded us that real-world problems are layered, emotional, and sometimes messy. That moment transformed our thinking. Our solution was no longer just a tool. It became a means of storytelling, empowerment, and awareness.
    </p>
    <p className="mb-4">
      We also took great care in how we visualised our ideas. Rather than jumping straight into polished screens, we began with low-fidelity sketches. There was something beautifully liberating about putting pen to paper, about letting ideas flow freely. It allowed us to test quickly, get feedback, and evolve. We then transitioned into middle fidelity prototypes, slowly refining user flows and incorporating feedback from our partner, especially after our second meeting where we were encouraged to think beyond digital interfaces and consider physical solutions like riverside signboards.
    </p>
    <p className="mb-4">
      That said, not everything went smoothly. We struggled with time management in the early stages, often spending too long refining ideas instead of testing them. Looking back, we wish we had committed to a mid-fidelity prototype sooner. By the time we had something tangible to test, the deadline loomed too close for comfort. And while we gained rich insights from the anglers, we didn’t manage to engage other demographics like swimmers or casual walkers. This limited the diversity of our research and may have constrained the scope of our design.
    </p>
    <p>
      Even so, what this experience gave us was far more than a grade. It gave us confidence in our process, pride in our collaboration, and a deeper sense of empathy. We learned how to observe the world more closely, how to listen more intently, and how to turn stories into systems. Most importantly, we came away with the knowledge that good design isn’t just about solving problems. It’s about understanding people, caring about the outcome, and never settling for surface-level solutions.
    </p>
  </section>

  <div className="w-full flex justify-center mb-8">
    <img
      src={`${import.meta.env.BASE_URL}images/groupphoto.jpg`}
      alt="Team proud moment by the River Kelvin"
      className="rounded-2xl shadow-md max-w-full h-auto"
    />
  </div>


          <section className="bg-white/75 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4" id="interview-pain-points">Interview pain points</h2>
            <p className="mb-4">
              Through conversations with local residents and anglers, we uncovered several recurring pain points. Chief among them was the perception that the river had become a dumping ground, polluted by chemical runoff, litter, and neglect. Many mentioned the alarming presence of white foam floating on the surface, suspected to be the result of industrial or chemical waste. These environmental hazards not only threaten wildlife but also deter the community from engaging with the river as a public space.
            </p>
            <p>
              These interviews helped us frame our solution around awareness and accountability. By incorporating their voices into our content and reflecting their concerns visually, we aimed to ensure that our work remained grounded in lived experiences. The process of listening, reflecting, and integrating their stories into our output was a powerful lesson in community-centered design.
            </p>
          </section>

          <section className="bg-white/75 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Final reflection essay</h2>
            <p className="mb-4">
              As we close this chapter, we are proud of the journey we have taken together, one defined by listening, learning, and evolving as a team. This project stretched us beyond our technical skills, challenging us to think critically about ethics, community impact, and environmental responsibility. Our weekly videos, website, and fieldwork were not just deliverables. They were expressions of our growing commitment to co-creation and social relevance. What resonates most is how our storytelling through real images, community voices, and personal interviews helped amplify underrepresented concerns. We believe our final outcome strikes a balance between informative and emotional, showcasing not just the river’s problems but also the resilience of those who care for it.
            </p>
            <p className="mb-4">
              There were still many perspectives we would have liked to explore further, such as engaging with swimmers, families, or advocacy groups who experience the river differently. These opportunities present room for future iteration and expansion. Yet throughout, our dedication to responsible storytelling, thoughtful design, and empathy-driven decisions remained constant. We leave this experience not only with pride in what we have created but also with a deeper appreciation for environmental justice, community collaboration, and the role design can play in shaping meaningful change.
            </p>
            <p className="mb-4">
             In essence, this project became more than an academic challenge. It was a journey of empathy, creativity, and purpose. We learned to design not just for users, but with them by listening to real stories, responding to real needs, and adapting with humility. The River Kelvin became our classroom, and its community our teachers. What we take away is not just a finished solution, but a renewed sense of responsibility to create technology that uplifts and respects the lives it touches.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Reflection;
