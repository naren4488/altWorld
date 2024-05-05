import { FilesIcon, PencilIcon, ScanEye } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import candidateDataBase from "./../mockDB/mockCandidateData.json";
import CandidateCard from "./CandidateCard";
import { useEffect, useState } from "react";
import { candidate } from "@/types";

type Props = {
  selectedCandidateEmail: string;
  setSelectedCandidateEmail: (newSelectedCandidateEmail: string) => void;
};

const AssignmentDetailsCard = ({
  selectedCandidateEmail,
  setSelectedCandidateEmail,
}: Props) => {
  const [currentTab, setCurrentTab] = useState("review");

  const getCandidatesAsPerTabSelection = (candidateData: candidate[]) => {
    if (currentTab === "review") {
      return candidateData;
    } else {
      const localshortList = localStorage.getItem("shortlistedCandidates");
      if (localshortList) {
        const localshortListEmails = JSON.parse(localshortList);
        if (localshortListEmails.length > 0) {
          const shortlistedCandidates = candidateData.filter((candidate) =>
            localshortListEmails.includes(candidate.email),
          );
          return shortlistedCandidates;
        }
      } else {
        return [];
      }
    }
  };

  const [candidateList, setCandidateList] = useState(
    getCandidatesAsPerTabSelection(candidateDataBase.candidateData),
  );

  useEffect(() => {
    const candidateList = getCandidatesAsPerTabSelection(
      candidateDataBase.candidateData,
    );
    if (candidateList) {
      setSelectedCandidateEmail(candidateList[0].email);
      setCandidateList(candidateList);
    } else {
      setSelectedCandidateEmail("");
      setCandidateList([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab]);

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
              onClick={() => setCurrentTab("review")}
              variant={"ghost"}
              className={`flex gap-2 rounded-xl   bg-white text-xs  font-bold text-black ${currentTab === "review" && "border shadow-md"}`}
            >
              <ScanEye size={12} />
              <span>TO REVIEW</span>
            </Button>
            <Button
              onClick={() => setCurrentTab("shortlist")}
              variant={"ghost"}
              className={`flex gap-2 rounded-xl   bg-white text-xs  font-bold text-black  ${currentTab === "shortlist" && "border shadow-md"}`}
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
            {candidateList ? (
              candidateList.length ? (
                candidateList.map((candidate) => (
                  <CandidateCard
                    key={candidate.email}
                    candidate={candidate}
                    selectedCandidateEmail={selectedCandidateEmail}
                    onSelect={setSelectedCandidateEmail}
                  />
                ))
              ) : (
                <p className="  text-orange-500">No shortlisted candidates</p>
              )
            ) : (
              <p className=" text-orange-500">No shortlisted candidates</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssignmentDetailsCard;
