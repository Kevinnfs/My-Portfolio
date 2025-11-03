import { IoListSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className=" flex items-center justify-between px-6 py-3  ">
      <div className="logo flex items-center  ">
        <img className="w-16 h-16" src="/assets/tools/logon.png" alt="logo" />
        <h1 className=" font-bold tracking-widest">Kevin Firdaus Siahaan</h1>
      </div>

      <IoListSharp size={24} className="font-medium mr-5" />
    </div>
  );
}
