import { candidate } from "@/types";

type Props = {
  candidate: candidate;
};

const CandidateCard = ({ candidate }: Props) => {
  const getScore = (candidate: candidate): number => {
    const totalScore =
      candidate.score.behavioural +
      candidate.score.commuication +
      candidate.score["sitaution-handling"];
    return Math.ceil((totalScore / 30) * 100);
  };

  return (
    <div className="flex justify-between py-2">
      <div className="flex items-center gap-2">
        <div className=" overflow-hidden rounded-xl">
          <img
            src={candidate.imgURL}
            alt={candidate.fullName}
            className=" size-10  scale-150 object-cover"
          />
        </div>
        <div className=" text-xs">
          <p className=" font-semibold">{candidate.fullName}</p>
          <p className=" text-gray-400">{candidate.email}</p>
        </div>
      </div>
      <p
        className={` font-semibold ${getScore(candidate) < 50 ? " text-orange-400" : " text-green-500"}`}
      >
        {getScore(candidate)}%
      </p>
    </div>
  );
};

export default CandidateCard;
