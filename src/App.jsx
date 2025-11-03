import { Button } from "@material-tailwind/react";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function App() {
  return (
    <div className="max-w-6xl mx-auto mt-12 ">
      <div className="flex justify-between gap-2 ">
        <div className="flex flex-col px-12 mt-24">
          <p className="text-lg font-semibold tracking-widest mt-3">
            Welcome to My Portfolio Website
          </p>
          <p className="text-5xl font-bold tracking-widest mt-3">Front End</p>
          <p className="text-5xl font-bold tracking-wider mt-2">Developer</p>
          <p className="text-md mt-8 leading-8 opacity-70">
            A junior frontend developer who currently focused on Web
            Development. Other than that, I also interested in UX/UI and Mobile
            Development. I love to learn new things and always open to new
            opportunities.
          </p>

          <div className="flex w-max gap-4">
            <a
              href="#"
              className="rounded-md mt-6 border bg-white border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-black hover:text-white hover:bg-slate-800 hover:border-white focus:text-white focus:bg-slate-800 focus:border-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Download CV
            </a>
            <a
              href="#"
              className="rounded-md mt-6 border bg-slate-800 border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-white hover:text-black hover:bg-white  hover:border-slate-900  focus:text-black focus:bg-white focus:border-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              About Me
            </a>
          </div>
        </div>

        <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6  ml-auto ">
          <div className=" m-2.5 overflow-hidden rounded-md w-72 flex justify-center items-center ">
            <img
              className="w-full h-72 object-cover "
              src="/assets/tools/vinss.jpg"
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-1 text-xl font-semibold text-slate-800">
              Kevin Firdaus Siahaan
            </h4>
            <p className="text-sm font-semibold text-slate-500 uppercase">
              Front End Developer
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 mb-3">
            <a
              href="#"
              className="rounded-full border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              <MdEmail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="rounded-full border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              <IoLogoLinkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="rounded-full border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              <IoLogoGithub className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="rounded-full border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              <IoLogoInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
