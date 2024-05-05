import CandidateCard from "./CandidateCard";
import { Card, CardContent } from "./ui/card";
import candidateDataBase from "./../mockDB/mockCandidateData.json";
import ScoreDetails from "./ScoreDetails";
import { Button } from "./ui/button";
import CandidateVideoCard from "./CandidateVideoCard";

const CandidateProfileCard = () => {
  const mydata = candidateDataBase.candidateData[0];
  return (
    <div className="">
      <Card>
        <CardContent className="flex gap-4 py-2">
          <div className=" flex flex-1 flex-col gap-5">
            <CandidateCard candidate={mydata} />
            <div className=" flex flex-col gap-1">
              <ScoreDetails
                scoreField="Behavioural"
                scoreValue={mydata.score.behavioural}
              />
              <ScoreDetails
                scoreField="Communication"
                scoreValue={mydata.score.commuication}
              />
              <ScoreDetails
                scoreField="Situation Handling"
                scoreValue={mydata.score["sitaution-handling"]}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className=" text-sm font-semibold">About</p>
                <p className=" text-xs text-gray-400">{mydata.about}</p>
              </div>
              <div>
                <p className=" text-sm font-semibold">Experience</p>
                <p className=" text-xs text-gray-400">{mydata.experience}</p>
              </div>
              <div>
                <p className=" text-sm font-semibold">Hobbies</p>
                <p className=" text-xs text-gray-400">{mydata.hobbies}</p>
              </div>
              <div>
                <p className=" text-sm font-semibold">Introduction</p>
                <p className=" text-xs text-gray-400">{mydata.introduction}</p>
              </div>
            </div>
            <Button
              variant={"ghost"}
              className=" mx-auto w-4/5 bg-[#50D1C5] text-white hover:bg-[#4ac1b5] hover:text-white"
            >
              SHORTLIST
            </Button>
          </div>
          <div className="flex-1 ">
            <CandidateVideoCard candidate={mydata} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CandidateProfileCard;
