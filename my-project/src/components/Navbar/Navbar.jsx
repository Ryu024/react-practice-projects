import Profile from "../../assets/profile.png";
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
  return (
    <div className="py-4">
      <div className="container flex justify-between items-center">
        {/* Logo sections  */}
        <div className="">
          <p className="text-5xl font-semibold">
            FOOD <span className="text-red-500">EAT</span>
          </p>
        </div>
        {/* Menu Section */}
        <div className="flex items-center gap-8">
          <ul className="gap-4 hidden sm:flex cursor-pointer text-xl">
            <li className="hover:border-b-2 border-primary">Home</li>
            <li className="hover:border-b-2 border-primary">Menu</li>
            <li className="hover:border-b-2 border-primary">About</li>
          </ul>
          <div className="flex items-center gap-5 ">
            <img src={Profile} alt="profile" className="w-11 rounded-full" />
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
