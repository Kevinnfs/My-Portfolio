import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "kevinsiahaan1811@gmail.com",
      color: "bg-blue-500",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+62 812-6406-4661",
      color: "bg-green-500",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Medan, Indonesia",
      color: "bg-purple-500",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/kevinnfs",
      color: "text-blue-500",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/kevinnfs",
      color: "text-white",
    },
  ];

  return (
    <section id="contact" className="max-w-6xl mx-auto mt-20 px-6 text-white">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-4">
          Contact Me
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Want to collaborate or just say hi? Here's how you can reach me.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-8 rounded-xl shadow-xl bg-gray-800 hover:scale-105 transition-transform duration-300`}
          >
            <div className={`text-3xl p-4 rounded-full mb-4 ${item.color}`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
            <p className="text-gray-300 text-center">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-8">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-4xl ${social.color} hover:scale-125 transition-transform duration-300`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
