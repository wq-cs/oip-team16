import React from "react";

const Reflection: React.FC = () => {
  return (
    <div className="min-h-screen relative pt-24">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8 animate-fade-in">Project Reflections</h1>

        <section className="bg-white/75 p-8 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Portfolio</h2>
          <ul className="list-disc list-inside text-blue-700">
            <li><a href="/dailybriefs#week1-pitch" onClick={(e) => {
              const element = document.getElementById('week1-pitch');
              if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: 'smooth' });
                window.location.href = '/dailybriefs#week1-pitch';
              }
            }} className="hover:underline">Week 1 Pitch Video</a></li>
            <li><a href="/dailybriefs#week2-pitch" onClick={(e) => {
              const element = document.getElementById('week2-pitch');
              if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: 'smooth' });
                window.location.href = '/dailybriefs#week2-pitch';
              }
            }} className="hover:underline">Week 2 Pitch Video</a></li>
            <li><a href="/dailybriefs" className="hover:underline" rel="noopener noreferrer">Daily Team Briefs</a></li>
            <li><a href="#interview-pain-points" onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('interview-pain-points');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }} className="hover:underline">Interview Pain Points</a></li>
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

        <div className="space-y-8 text-gray-600">
          <section className="bg-white/75 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Essays - Things we are proud/not proud of</h2>
            <p className="mb-4">
              One of the earliest turning points in our project was the realization that we couldn’t fully understand the River Kelvin’s condition through secondhand information alone. Reflecting on this gap, we decided to engage directly with the environment through an on-site visit. This hands-on approach proved invaluable. We encountered significant pollution ranging from broken glass to hazardous waste, and spoke with locals who expressed frustration and concern about the river’s declining state. This was a sobering moment that transformed our theoretical understanding into a deeply personal one.
            </p>
            <p className="mb-4">
              We are proud of how we responded to this realization. Our actions documenting real experiences, collecting stories, and adapting our project in response demonstrated initiative and a commitment to authenticity. This not only shaped the visual and narrative direction of our website and video but also allowed us to design more empathetically. Still, we acknowledge areas for growth. With more time, we would have expanded our engagement further, involving a broader spectrum of community voices to enrich the diversity and depth of our insights.
            </p>
          </section>

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
              As we look back on this project, we are proud of the depth of reflection, adaptability, and teamwork that defined our approach. The final video and website capture not only the challenges of the River Kelvin but also the resilience and voices of the people who live alongside it. We believe that our use of real images, community interviews, and personal narratives helped craft a story that is both impactful and emotionally resonant.
            </p>
            <p>
              That said, we’ve also learned a great deal about what we could have done better. With more time, we would have conducted broader public outreach and deeper engagement with policymakers or advocacy groups. Nevertheless, our final deliverables reflect a sincere and informed effort to elevate an under-discussed issue through responsible storytelling. We leave this project with a greater appreciation of environmental justice and the importance of co-creation with local stakeholders.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Reflection;
