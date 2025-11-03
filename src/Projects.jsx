// import image1 from "../assets/tools/1.jpg";
// import image2 from "../assets/tools/2.jpg";
// import image3 from "../assets/tools/3.png";

export default function Projects() {
  const projects = [
    {
      name: "Learning Media Android App",
      image: "/assets/tools/1.jpg",
      tools: ["React Native", "Expo"],
      description:
        "An Android application for teaching Informatics at SMK Negeri 13 Medan. Developed interactive and user-friendly interfaces and handled all development independently.",
    },
    {
      name: "Mobile Learning App for Special Needs",
      image: "/assets/tools/2.jpg",
      tools: ["React js", "Tailwind CSS"],
      description:
        "Contributed to the web interface of a project for children with special needs, including designing layouts and preparing documentation.",
    },
    {
      name: "SIMHAKI Web Wireframe",
      image: "/assets/tools/3.png",
      tools: ["Figma", "Wireframe Design"],
      description:
        "Designed the wireframe for SIMHAKI (Intellectual Property Management System) at Universitas Negeri Medan, creating detailed layouts and research documentation.",
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto mt-20 px-6 text-white">
      {/* Hdr */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-4">
          Projects
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Here are some of my notable projects, including tools used and my
          contributions.
        </p>
      </div>

      {/* prjk*/}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
