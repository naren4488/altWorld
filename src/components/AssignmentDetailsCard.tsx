import { FilesIcon, PencilIcon, ScanEye } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import candidateData from "./../mockDB/mockCandidateData.json";
import CandidateCard from "./CandidateCard";

const AssignmentDetailsCard = () => {
  return (
    <div className="flex-1">
      <Card>
        <CardContent className="py-2">
          <div className="mb-3 flex items-center justify-between font-semibold">
            <h3 className=" text-xl ">Sales BDE</h3>
            <div className="flex items-center gap-2">
              <p className=" text-green-600">Active</p>
              <span className=" rounded-md border p-1 shadow-sm hover:cursor-pointer">
                <PencilIcon size={12} />
              </span>
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-2 text-sm font-semibold text-gray-500">
            <div className="flex justify-between ">
              <p>Assignment Link</p>
              <a className=" text-blue-500" href="#">
                https://tiny.url/altworld/
              </a>
            </div>
            <div className="flex justify-between ">
              <p>Assignment Hour</p>
              <p>3 Hours</p>
            </div>
            <div className="flex justify-between ">
              <p>Assignment Ends At</p>
              <p>11 March 2024</p>
            </div>
          </div>
          <div className="mb-3 flex gap-4">
            <Button
              variant={"ghost"}
              className="flex gap-2 rounded-xl border bg-white text-xs font-bold  text-black shadow-md"
            >
              <ScanEye size={12} />
              <span>TO REVIEW</span>
            </Button>
            <Button
              variant={"ghost"}
              className="flex gap-2 rounded-xl border bg-white text-xs font-bold   text-black shadow-md"
            >
              <FilesIcon size={12} />
              <span>SHORTLISTED</span>
            </Button>
          </div>
          <div className="flex justify-between text-[10px] text-gray-500">
            <p>CANDIDATE</p>
            <p>SCORE</p>
          </div>
          <div className="">
            {candidateData.candidateData.map((candidate) => (
              <CandidateCard key={candidate.email} candidate={candidate} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssignmentDetailsCard;
