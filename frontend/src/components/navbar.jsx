import { Link } from "react-router-dom";
import { IoLibraryOutline } from "react-icons/io5";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { ImBooks } from "react-icons/im";
export default function Navbar() {
  return (
    <div className="sticky top-0 inset-x-0 flex flex-row justify-between items-center w-full px-4 py-2.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-[#F1F1F1]">
      {/* -------------------- HOME PAGE REDIRECTION -------------------- */}
      <Link to="/" className="flex flex-row justify-start items-center text-xl gap-1 font-semibold">
        <IoLibraryOutline size={28} />
        <p>E-Library</p>
      </Link>
      {/* -------------------- CREATE BUTTON && TOGGLE LIGHT MODE -------------------- */}
      <div className="flex flex-row justify-end items-center gap-2.5 text-3xl">
        <Link to="/create" className="p-2 shadow-lg shadow-pink-600">
          <MdOutlineLibraryAdd />
        </Link>
        <Link to="/" className="p-2 shadow-lg shadow-pink-600">
          <ImBooks />
        </Link>
      </div>
    </div>
  );
}
