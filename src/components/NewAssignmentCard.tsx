import { PlusIcon } from "lucide-react";

const NewAssignmentCard = () => {
  return (
    <div className=" rounded-xl bg-[#50D1C5] p-3 text-white ">
      <div className=" mb-4 w-fit rounded-xl bg-white p-2 hover:cursor-pointer hover:bg-gray-50">
        <PlusIcon className="  text-gray-500" />
      </div>
      <p className=" my-2 font-semibold">New Assignment?</p>
      <p className=" mb-2 text-sm">
        Select from predefined questions to have a quick turnaround.
      </p>
      <button className=" w-full rounded-xl bg-white p-2 text-sm  font-semibold text-black hover:bg-gray-100">
        Create New Assignment
      </button>
    </div>
  );
};

export default NewAssignmentCard;
