export default function Experience() {
  const experiences = [
    {
      year: "Jan 2023 - Maret 2023",
      title: "Front-End Web Developer Intern",
      company: "PT. Nadapdap Tour & Travel",
      description:
        "Developed and maintained responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap. Focused on writing clean, structured code and ensuring cross-device compatibility. Collaborated with the design team to transform creative layouts into fully functional, user-friendly, and visually consistent websites.",
    },
    {
      year: "Jan 2024 - Nov 2024",
      title: "Fulltime Front-End Developer",
      company: "Seindo Travel",
      description:
        "Built web and mobile interfaces using Next.js, TypeScript, Tailwind CSS, and React Native/Expo. Ensured responsiveness and interactivity, collaborated on API integration, optimized front-end components, and maintained clean code with Git/GitHub. Also updated existing company websites for better functionality and look.",
    },
    {
      year: "Sep 2024 - Nov 2024",
      title: "App Developer Student Project",
      company: "Medan State University",
      description:
        "Developed a learning media in the form of an Android application for teaching Informatics at SMK Negeri 13 Medan using React Native and Expo. Designed interactive and user-friendly interfaces and handled all development to ensure smooth functionality.",
    },
    {
      year: "2024",
      title: "Dosen Project Contributor",
      description:
        "Contributed to the development of the web interface for the project 'Mobile Learning Application for Modifying Behavior of Children with Special Needs'. Assisted in designing wireframes and preparing research reports.",
    },
    {
      year: "Jun 2025 - Sep 2025",
      title: "SIMHAKI Web Wireframe",
      company: "Universitas Negeri Medan",
      description:
        "Designed the wireframe for SIMHAKI (Intellectual Property Management Information System) and created research documentation to support system development.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-20 px-6 text-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-4">
          Experience
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A journey of learning, building, and creating meaningful digital
          experiences.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-gray-700">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 ml-6">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-gray-900"></div>
            <p className="text-blue-400 text-sm font-semibold">{exp.year}</p>
            <h3 className="text-xl font-semibold mt-1">{exp.title}</h3>
            <p className="text-gray-400 text-sm mb-1">{exp.company}</p>
            <p className="text-gray-300 leading-relaxed text-justify">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
