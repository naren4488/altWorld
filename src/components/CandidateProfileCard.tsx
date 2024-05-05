import { Card, CardContent } from "./ui/card";
import ScoreDetails from "./ScoreDetails";
import { Button } from "./ui/button";
import CandidateVideoCard from "./CandidateVideoCard";
import { candidate as TypeCandidate } from "@/types";

type Props = {
  currentCandidate: TypeCandidate | undefined;
};

const CandidateProfileCard = ({ currentCandidate }: Props) => {
  const getScore = (candidate: TypeCandidate): number => {
    const totalScore =
      candidate.score.behavioural +
      candidate.score.commuication +
      candidate.score["sitaution-handling"];
    return Math.ceil((totalScore / 30) * 100);
  };

  return (
    <div className="">
      <Card>
        {currentCandidate && (
          <CardContent className="flex gap-4 py-2">
            <div className=" flex flex-1 flex-col gap-5">
              <div className={`flex items-center justify-between py-2 `}>
                <div className="flex items-center gap-2">
                  <div className=" overflow-hidden rounded-xl">
                    <img
                      src={currentCandidate.imgURL}
                      alt={currentCandidate.fullName}
                      className=" size-12   object-cover"
                    />
                  </div>
                  <div className=" text-sm">
                    <p className=" font-semibold">
                      {currentCandidate.fullName}
                    </p>
                    <p className=" text-gray-400">{currentCandidate.email}</p>
                  </div>
                </div>
                <p
                  className={` text-lg font-semibold ${getScore(currentCandidate) < 50 ? " text-orange-400" : " text-green-500"}`}
                >
                  {getScore(currentCandidate)}%
                </p>
              </div>
              <div className=" flex flex-col gap-1">
                <ScoreDetails
                  scoreField="Behavioural"
                  scoreValue={currentCandidate.score.behavioural}
                />
                <ScoreDetails
                  scoreField="Communication"
                  scoreValue={currentCandidate.score.commuication}
                />
                <ScoreDetails
                  scoreField="Situation Handling"
                  scoreValue={currentCandidate.score["sitaution-handling"]}
                />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className=" text-sm font-semibold">About</p>
                  <p className=" text-xs text-gray-400">
                    {currentCandidate.about}
                  </p>
                </div>
                <div>
                  <p className=" text-sm font-semibold">Experience</p>
                  <p className=" text-xs text-gray-400">
                    {currentCandidate.experience}
                  </p>
                </div>
                <div>
                  <p className=" text-sm font-semibold">Hobbies</p>
                  <p className=" text-xs text-gray-400">
                    {currentCandidate.hobbies}
                  </p>
                </div>
                <div>
                  <p className=" text-sm font-semibold">Introduction</p>
                  <p className=" text-xs text-gray-400">
                    {currentCandidate.introduction}
                  </p>
                </div>
              </div>
              <Button
                variant={"ghost"}
                className={`mx-auto w-4/5  text-white  hover:text-white ${currentCandidate.shortlisted ? " bg-green-500 hover:bg-green-600" : "  bg-[#50D1C5] hover:bg-[#4ac1b5]"}`}
              >
                {currentCandidate.shortlisted
                  ? "SHORTLISTED ALREADY (Remove)"
                  : "SHORTLIST"}
              </Button>
            </div>
            <div className="flex-1 ">
              <CandidateVideoCard candidate={currentCandidate} />
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default CandidateProfileCard;
