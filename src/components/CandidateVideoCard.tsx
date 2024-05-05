import { candidate } from "@/types";
import { Button } from "./ui/button";
import { ChevronsLeft, ChevronsRight, PlayIcon } from "lucide-react";

type Props = {
  candidate: candidate;
};

const CandidateVideoCard = ({ candidate }: Props) => {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-xl border bg-[#E2E8F0]">
      <div className="relative h-full pt-10">
        <img
          src={candidate.imgURL}
          alt=""
          className=" h-full w-full object-cover brightness-75"
        />
        <div className=" absolute left-0 right-0 top-[240px] flex justify-center">
          <div className="w-fit rounded-full bg-white p-2 hover:cursor-pointer">
            <PlayIcon size={28} />
          </div>
        </div>
        <div className=" absolute bottom-0 w-full bg-gradient-to-b from-black/60 to-black/90 py-4  pt-2 text-white">
          <p className="text-center font-semibold">Tell me about yourself</p>
          <div className=" flex items-center justify-between px-2">
            <Button variant={"ghost"} className=" rounded-xl bg-[#718096]">
              <ChevronsLeft />
            </Button>
            <p className=" text-center font-semibold">Question 1 / 11</p>
            <Button variant={"ghost"} className=" rounded-xl bg-[#718096]">
              <ChevronsRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateVideoCard;
