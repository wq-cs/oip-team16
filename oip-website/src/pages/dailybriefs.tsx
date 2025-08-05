import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DailyBriefs: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        const anchor = location.hash?.substring(1);
        if (anchor) {
            const el = document.getElementById(anchor);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className="min-h-screen relative pt-24">
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <h1 className="text-4xl font-bold text-white mb-8">Daily Team Briefs</h1>

                <section className="bg-white/75 p-8 rounded-2xl shadow-lg mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Week 1</h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">22 July — Project Kickoff & Partner Research Alignment</h3>
                        <p className="text-gray-700 mb-4">
                            Our project officially commenced on the 22nd of July with a morning session dedicated to laying the groundwork for team dynamics and project expectations. The lecture introduced us to the broader objectives of the course, emphasizing the importance of human-centered design and contextual sensitivity, particularly for community-focused projects like River Kelvin Monitoring.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Following this, our team engaged in a contract exercise, where we discussed and agreed upon core working principles on how we would communicate, distribute tasks, resolve conflicts, and maintain accountability throughout the three-week sprint. This session not only clarified our collaborative workflow but also set a transparent foundation for trust within the team.
                        </p>
                        <p className="text-gray-700 mb-4">
                            With the team aligned, we shifted focus to preparing for our partner meeting with George from Friends of the River Kelvin (FORK) in the afternoon. Recognizing the importance of targeted and meaningful questions, we brainstormed as a group to craft a series of user-centric inquiries. These questions were designed to explore:
                            <ul className="list-disc list-inside ml-6 mt-2">
                                <li>How river condition information is currently accessed (or not) by the community.</li>
                                <li>The frustrations and gaps in existing information dissemination workflows.</li>
                                <li>Potential user groups who would benefit from improved river data (e.g., fishermen, dog walkers, swimmers).</li>
                                <li>How user-contributed observations could enrich and democratize river monitoring efforts.</li>
                            </ul>
                        </p>
                        <p className="text-gray-700 mb-4">
                            The meeting with George proved to be a critical eye-opener. He highlighted that the current data production and ownership heavily resides within FORK, creating bottlenecks in community access. George emphasized the need for a solution that not only democratizes access but also tailors information presentation for specific demographics.
                        </p>
                        <p className="text-gray-700">
                            The day ended with a shift in our perspective: from building a generic monitoring platform to envisioning a user-personalized, data-driven ecosystem that democratizes environmental insights while supporting community engagement and policy advocacy.
                        </p>
                    </div>

                   <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">23 July — Shared Mental Models & Ideation Deep Dive</h3>
                        <p className="text-gray-700 mb-4">On the 23rd of July, our team embarked on a critical reflection exercise known as the “Shared Mental Model” session. This activity was designed to align our individual perceptions of the project’s problem space, ensuring that the team would move forward with a unified understanding. Each team member took turns sharing their perspective on River Kelvin’s current monitoring challenges, what we believed were key pain points for the community, and how technology could bridge existing gaps.</p>
                        <p className="text-gray-700 mb-4">Through this exercise, we uncovered differing viewpoints: some of us emphasized environmental data accuracy while others stressed the need for community-friendly data visualizations. These conversations were instrumental in shaping a broader understanding of user needs, helping us recognize that our solution must balance both technical robustness and simplicity in user interaction.</p>
                        <p className="text-gray-700 mb-4">The afternoon was dedicated to brainstorming solution ideas for our Week 1 Pitch Video. Guided by feedback from our earlier partner meeting with FORK, we explored various concepts, including interactive dashboards, visual heatmaps for river conditions, and even a conversational chatbot that could answer user-specific queries about the river. We continuously iterated on these ideas, filtering out concepts that were either too complex for the project timeline or failed to address specific community pain points.</p>
                        <p className="text-gray-700">By the end of the day, we had finalized the content flow for our pitch, dividing speaking roles among team members, and determined that we would use a combination of slides with a voiceover, supported by early sketches of our proposed solution. This day solidified our team’s direction and ensured that everyone was on the same page moving forward into prototype development.</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">24 July — Sketching Concepts & Tutor Feedback</h3>
                        <p className="text-gray-700 mb-4">With our pitch structure in place, 24th July was dedicated to refining our initial solution sketches. We translated user needs into rough paper sketches, visualizing key features like simplified river condition indicators and easy-to-read charts. These low-fidelity sketches allowed us to rapidly iterate ideas without being bogged down by design tools.</p>
                        <p className="text-gray-700 mb-4">During tutor feedback sessions, we presented our paper mockups and received valuable critiques on simplifying user navigation and data presentation. The suggestion of color-coded visual cues (e.g., red/green indicators for safe/unsafe river conditions) emerged as a key design takeaway.</p>
                        <p className="text-gray-700">By the end of the day, our team had finalized a set of annotated sketches that would serve as visual aids for our Week 1 Pitch Video. This phase helped us bridge the gap between concept and communication, ensuring our ideas were clear and user-focused.</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">25 July — Prototyping & Pitch Video Production</h3>
                        <p className="text-gray-700 mb-4">On 25th July, the atmosphere was a mix of excitement and urgency. With the Week 1 Video Deadline looming, we divided roles for visual production and content recording. Half of the team focused on digitizing our sketches into simple visual slides that could represent the flow of our proposed solution.</p>
                        <p className="text-gray-700 mb-4">Simultaneously, the rest of the team worked on refining the video script, assigning speaking parts, and recording voiceovers. Given the 5-minute limit, we had to make tough choices on what content to prioritize. We focused on clearly presenting our reflections, highlighting what we had learned from partner interactions and how those insights shaped our prototype design.</p>
                        <p className="text-gray-700">The final hours were spent stitching together the recorded clips with the sketch-based visuals. Despite time constraints, the team collaborated efficiently and successfully submitted our pitch video before the deadline. This milestone marked a significant step in our project journey, capturing the essence of our initial solution direction and team synergy.</p>
                    </div>
                </section>

                {/* Week 1 Video Player */}
                <section id="week1-pitch" className="bg-white/75 p-8 rounded-2xl shadow-lg mb-8 scroll-mt-24">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Week 1 Pitch Video</h3>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                        <video
                            className="w-full h-full object-cover"
                            controls
                            playsInline
                        >
                            <source src="/videos/pitch_week1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>

                <section className="bg-white/75 p-8 rounded-2xl shadow-lg mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Week 2</h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">28 July — Design Discussions & Low-Fidelity Sketching</h3>
                        <p className="text-gray-700 mb-4">The second week kicked off with a full team brainstorming session, where we revisited our prototype direction and discussed how to translate our ideas into an intuitive user experience. We sketched out rough low-fidelity screen layouts of our app, focusing on how fishermen and other river users would navigate key features such as live river conditions, fish hotspots, and community updates. Simultaneously, we started drafting our poster template, experimenting with different visual arrangements to ensure clarity and visual appeal for the upcoming exhibition.</p>
                        <p className="text-gray-700">Our discussions also touched on incorporating partner feedback from George, ensuring that our design choices prioritized accessibility and practical usability for the diverse River Kelvin community.</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">29 July — Field Trip Along River Kelvin & Stakeholder Insights</h3>
                        <p className="text-gray-700 mb-4">In the morning, we attended a lecture on critical thinking frameworks like the Opposable Mind and Blue Card activity, which prepared us to challenge assumptions in our solution. In the afternoon, we embarked on a field trip, walking along the River Kelvin starting from Kelvinbridge station. The walk exposed us to the daily realities of the river, with sightings of dog walkers, anglers, and visible environmental issues like litter and pollutants.</p>
                        <p className="text-gray-700 mb-4">A highlight was engaging with two anglers, an older gentleman and an 18-year-old fishing enthusiast. They shared their concerns about the river's pollution, mentioning discarded needles, heroin paraphernalia, and sandbags and passionately spoke about their efforts to care for the environment. Their willingness to involve us in their fishing routine, teaching us knot-tying techniques and explaining fish species in the river, was an invaluable learning experience. Witnessing their catch-and-release of a baby salmon was a wholesome moment that underscored the importance of community-driven conservation.</p>
                        <p className="text-gray-700">This field trip reinforced the importance of tailoring our solution to real user behaviors and environments, highlighting that river users often possess deep, lived insights that technology should amplify, not overshadow.</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">30 July — Poster Design & Pitch Video 2 Production</h3>
                        <p className="text-gray-700 mb-4">Building on the insights from our field trip, we focused on producing assets for our second pitch video and exhibition poster. Using Canva, we drafted several poster layouts, aiming to create a visual narrative that effectively communicated our problem statement, solution concept, and field research findings.</p>
                        <p className="text-gray-700">Concurrently, we scripted and recorded content for Pitch Video 2, ensuring that it reflected both our technical solution iterations and the human stories gathered from the field. Our goal was to articulate how our design choices were rooted in real user interactions, making the video a blend of data-driven insights and emotional storytelling.</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">31 July — Partner Meeting & Solution Refinement</h3>
                        <p className="text-gray-700 mb-4">We reconvened with George from FORK for a second partner meeting to showcase our progress. George was impressed with our field trip findings and appreciated how our solution evolved to address practical user needs. He suggested we incorporate a physical dimension to our solution of installing signboards along the riverbank to display dynamic information such as fish species in specific spots, water quality alerts, and seasonal conditions. This was a valuable reminder that not all river users would be actively engaging with mobile apps during their activities.</p>
                        <p className="text-gray-700">Following the meeting, we revised our solution narrative to include a hybrid approach: a digital platform complemented by strategically placed physical information boards. This multi-channel strategy enhanced our proposal's feasibility and inclusivity.</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">1 August — Finalizing Poster & Pitch Video 2 Submission</h3>
                        <p className="text-gray-700 mb-4">The final day of Week 2 was a race against time to finalize our exhibition poster and submit Pitch Video 2. We fine-tuned the poster visuals, ensuring alignment with George's feedback and the insights gathered from our field trip. The poster was designed to tell a cohesive story, combining visual simplicity with key data points that would resonate with a general audience.</p>
                        <p className="text-gray-700">Meanwhile, the video editing team compiled all voiceovers, visuals, and field footage into a concise yet impactful 5-minute pitch. The team worked seamlessly to meet the submission deadline, marking the completion of a highly productive and rewarding week.</p>
                    </div>                </section>

                {/* Week 2 Video Player */}
                <section id="week2-pitch" className="bg-white/75 p-8 rounded-2xl shadow-lg mb-8 scroll-mt-24">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Week 2 Pitch Video</h3>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                        <video
                            className="w-full h-full object-cover"
                            controls
                            playsInline
                        >
                            <source src="/videos/pitch_week2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>

                <section className="bg-white/75 p-8 rounded-2xl shadow-lg mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Week 3</h2>
                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                        <li><strong>5 August:</strong> Data Analysis & Insights - Compiled survey responses, consolidated key findings.</li>
                        <li><strong>6 August:</strong> Prototype Finalization & Rehearsals - Completed prototype, conducted team mock presentations.</li>
                        <li><strong>7 August:</strong> Exhibition Setup - Prepared exhibition materials, dry-run at venue.</li>
                        <li><strong>8 August:</strong> Exhibition Day & Final Submission - Showcased project at GUU, submitted website and documentation.</li>
                    </ul>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">4 August — Adapting to Severe Weather Conditions</h3>
                        <p className="text-gray-700 mb-4">
                            Our team's adaptability was put to the test when Storm Floris, a severe weather system, swept through Glasgow. The Met Office had issued an amber weather warning, with forecasted wind speeds exceeding 75mph, prompting us to reassess our planned in-person meeting for survey response analysis.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Demonstrating our commitment to both safety and productivity, we swiftly transitioned to a virtual collaboration setup. Using our established online tools and communication channels, we successfully:
                        </p>
                        <ul className="list-disc list-inside ml-6 mb-4 text-gray-700">
                            <li>Organized and analyzed survey responses from river users</li>
                            <li>Consolidated key findings from our field research</li>
                            <li>Structured our insights into actionable recommendations</li>
                            <li>Maintained team momentum despite the weather disruption</li>
                        </ul>
                        <p className="text-gray-700 mb-4">
                            The severity of our decision was validated when the storm caused significant damage across campus, including the dramatic incident of windows being blown out of their hinges in one of our accommodation blocks. This experience, while challenging, showcased our team's resilience and ability to maintain project progress despite unexpected environmental challenges - a fitting parallel to our project's focus on environmental monitoring and adaptation.
                        </p>
                        <p className="text-gray-700">
                            The virtual session proved highly effective, allowing us to methodically process our research data while ensuring everyone's safety. This experience added an unexpected but valuable dimension to our project, highlighting the importance of flexible approaches and digital solutions in environmental monitoring and community engagement.
                        </p>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default DailyBriefs;
