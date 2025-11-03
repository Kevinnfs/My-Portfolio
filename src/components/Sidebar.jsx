import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaBriefcase,
  FaTools,
  FaEnvelope,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="hidden md:flex fixed z-40 border border-white h-[50vh] w-14 flex-col items-center justify-center gap-8 left-0 top-1/2 -translate-y-1/2 rounded-e-3xl bg-gray-900/60 backdrop-blur-md">
      <a
        href="#home"
        className="text-white hover:text-blue-400 transition-colors"
      >
        <FaHome size={24} />
      </a>
      <a
        href="#about"
        className="text-white hover:text-blue-400 transition-colors"
      >
        <FaUser size={24} />
      </a>
      <a
        href="#projects"
        className="text-white hover:text-blue-400 transition-colors"
      >
        <FaProjectDiagram size={24} />
      </a>
      <a
        href="#experience"
        className="text-white hover:text-blue-400 transition-colors"
      >
        <FaBriefcase size={24} />
      </a>
      <a
        href="#skills"
        className="text-white hover:text-blue-400 transition-colors"
      >
        <FaTools size={24} />
      </a>
      <a
        href="#contact"
        className="text-white hover:text-blue-400 transition-colors"
      >
        <FaEnvelope size={24} />
      </a>
    </div>
  );
}
