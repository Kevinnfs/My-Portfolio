export default function Skills() {
  const languagesFrameworks = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Tailwind CSS",
    "Bootstrap",
  ];

  const toolsTechnologies = [
    "Git",
    "GitHub",
    "Figma",
    "Canva",
    "Postman",
    "VS Code",
    "Expo",
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto pt-20 px-6 text-white">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-4">
          Skills & Expertise
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Here are some of my technical skills and tools I work with regularly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Language*/}
        <div>
          <h2 className="text-2xl font-semibold mb-6 border-l-4 border-blue-500 pl-3 inline-block">
            Languages & Frameworks
          </h2>
          <div className="flex flex-wrap gap-3 mt-4">
            {languagesFrameworks.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tool */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 border-l-4 border-blue-500 pl-3 inline-block">
            Tools & Technologies
          </h2>
          <div className="flex flex-wrap gap-3 mt-4">
            {toolsTechnologies.map((tool, index) => (
              <span
                key={index}
                className="bg-blue-400 text-white px-4 py-2 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
