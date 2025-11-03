import { IoListSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full backdrop-blur-md z-50 shadow-md flex items-center justify-between px-6 py-3  ">
      <div className="logo flex items-center  ">
        <img className="w-16 h-16" src="/assets/tools/logon.png" alt="logo" />
        <h1 className=" font-bold tracking-widest">Kevin Firdaus Siahaan</h1>
      </div>
    </div>
  );
}
