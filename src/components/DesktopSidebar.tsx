import logo from "./../assets/logo.svg";
import homeIcon from "./../assets/home-icon.svg";
import { Separator } from "./ui/separator";
import NewAssignmentCard from "./NewAssignmentCard";

const DesktopSidebar = () => {
  return (
    <div className="  ">
      <div className="mb-4 mt-1 flex items-center gap-3 hover:cursor-pointer">
        <img src={logo} alt="" className=" size-5" />
        <span className="text-lg font-semibold">Hi, AltWorld</span>
      </div>
      <Separator />
      <div className="mt-6 flex items-center gap-2 rounded-xl p-2 hover:cursor-pointer hover:bg-gray-200">
        <div className="rounded-lg bg-white p-1">
          <img src={homeIcon} alt="" className="  size-5" />
        </div>
        <span className="font-semibold">Dashboard</span>
      </div>
      <div className="mt-6">
        <NewAssignmentCard />
      </div>
    </div>
  );
};

export default DesktopSidebar;
