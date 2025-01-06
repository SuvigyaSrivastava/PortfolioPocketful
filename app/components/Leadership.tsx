import Image from "next/image";

export function Leadership() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Leadership</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
            As a skilled React developer with proven leadership experience, I bring a blend of technical expertise, project management skills, and effective communication to deliver exceptional results. I have a strong track record of leading development teams, optimizing performance, and implementing industry best practices to ensure high-quality outcomes.

I have extensive experience managing teams and projects, including creating detailed project plans, maintaining timelines and budgets, and delivering results on time. My ability to foster open communication with team members and stakeholders ensures a collaborative environment where ideas are valued, challenges are addressed, and feedback is constructive.
            </p>
            <p className="text-gray-600 leading-relaxed">
            As a Department Lead at GDSC ABESEC, I organized workshops, mentored peers, and fostered a collaborative environment for tech enthusiasts. During my internship at Prodigal AI, I developed a MERN-based web application integrating AI-driven content generation, enhancing productivity and user engagement.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/prodigal.png"
              alt="Project Dashboard"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}