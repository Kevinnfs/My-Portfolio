import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <section id="home" className="max-w-6xl mx-auto mt-12 px-4 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col mt-12 md:mt-24 w-full md:w-1/2">
          <p className="text-lg font-semibold tracking-widest mt-3">
            Welcome to My Portfolio Website
          </p>
          <p className="text-3xl md:text-5xl font-bold tracking-widest mt-3">
            Front End
          </p>
          <p className="text-3xl md:text-5xl font-bold tracking-wider mt-2">
            Developer
          </p>
          <p className="text-md mt-6 leading-7 md:leading-8 opacity-70">
            A junior frontend developer who currently focused on Web
            Development. I also enjoy UX/UI and Mobile Development. Always eager
            to learn and open to new opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-max">
            <a
              href="/assets/tools/CV_Kevin_Firdaus_Siahaan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border bg-white border-slate-300 py-2 px-4 text-center text-sm text-black transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-slate-800 hover:border-white focus:text-white focus:bg-slate-800 focus:border-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Download CV
            </a>
            <a
              href="#about"
              className="rounded-md border bg-slate-800 border-slate-300 py-2 px-4 text-center text-sm text-white transition-all shadow-sm hover:shadow-lg hover:text-black hover:bg-white hover:border-slate-900 focus:text-black focus:bg-white focus:border-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              About Me
            </a>
          </div>
        </div>

        {/* gambar */}
        <div className="flex flex-col items-center bg-white shadow-sm border border-slate-200 rounded-lg w-full md:w-80 mt-6 md:mt-0">
          <div className="overflow-hidden rounded-md w-64 h-64 md:w-72 md:h-72 flex justify-center items-center mt-4">
            <img
              className="w-full h-full object-cover"
              src="/assets/tools/vinss.jpg"
              alt="profile-picture"
            />
          </div>
          <div className="p-4 md:p-6 text-center">
            <h4 className="mb-1 text-xl md:text-xl font-semibold text-slate-800">
              Kevin Firdaus Siahaan
            </h4>
            <p className="text-sm font-semibold text-slate-500 uppercase">
              Front End Developer
            </p>
          </div>

          {/* sm */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4">
            <a
              href="mailto:kevinsiahaan1811@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 p-2.5 text-slate-600 transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800"
            >
              <MdEmail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/kevinnfs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 p-2.5 text-slate-600 transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800"
            >
              <IoLogoLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/kevinnfs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 p-2.5 text-slate-600 transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800"
            >
              <IoLogoGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/kevinnfs._"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 p-2.5 text-slate-600 transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800"
            >
              <IoLogoInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
