export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto mt-20  text-white">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-4">
          About Me
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Want to learn more about my background, experience, and future goals?
          I’ll share it all here.
        </p>
      </div>

      {/* Who Am I & My Approach */}
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-16 px-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-l-4 border-blue-500 pl-3 inline-block">
            Who Am I
          </h2>
          <p className="text-gray-300 leading-8 text-justify">
            I’m a passionate{" "}
            <span className="text-blue-400 font-medium">
              Front-End Developer
            </span>{" "}
            with hands-on experience from internships and professional work,
            turning creative ideas into functional and user-friendly web and
            mobile applications. My background in Informatics and Computer
            Education helps me learn quickly, adapt easily, and always find ways
            to deliver useful solutions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 border-l-4 border-blue-500 pl-3 inline-block">
            My Approach
          </h2>
          <p className="text-gray-300 leading-8 text-justify">
            My approach focuses on real-world experience and clear results. From
            internships and professional projects, I emphasize writing clean
            code while building intuitive and responsive interfaces. I
            prioritize collaboration, flexibility, and continuous learning to
            ensure every project delivers real quality and impact.
          </p>
        </div>
      </div>

      {/* Personal Info */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-8 border-l-4 border-blue-500 pl-3 inline-block">
          Personal Info
        </h2>
        <div className="flex justify-center">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-300 max-w-4xl">
            <div>
              <p className="font-semibold text-white">Name:</p>
              <p>Kevin Firdaus Siahaan</p>
            </div>
            <div>
              <p className="font-semibold text-white">Place of Birth:</p>
              <p>Bandung, Indonesia</p>
            </div>
            <div>
              <p className="font-semibold text-white">Date of Birth:</p>
              <p>November, 08-2002</p>
            </div>
            <div>
              <p className="font-semibold text-white">Education:</p>
              <p>Universitas Negeri Medan</p>
            </div>
            <div>
              <p className="font-semibold text-white">Email:</p>
              <p>kevinsiahaan1811@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold text-white">Phone:</p>
              <p>+62 812 6406 4661</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
