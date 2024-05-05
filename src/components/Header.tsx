import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import DesktopSidebar from "./DesktopSidebar";

const Header = () => {
  return (
    <div className="mb-3 flex items-center justify-between">
      <div className="">
        <span className=" text-sm text-gray-500">
          Pages / <span className="text-black">Assignment</span>
        </span>
        <h4 className=" font-semibold">Sales BDE</h4>
      </div>
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon size={32} />
          </SheetTrigger>
          <SheetContent>
            <DesktopSidebar />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
