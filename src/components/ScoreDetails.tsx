import { Progress } from "./ui/progress";

type Props = {
  scoreField: string;
  scoreValue: number;
};
const ScoreDetails = ({ scoreField, scoreValue }: Props) => {
  return (
    <div className="flex justify-between text-sm ">
      <p className=" font-semibold text-gray-500">{scoreField}</p>
      <div className="flex  w-3/5 items-center gap-4">
        <Progress
          indicatorColor={`${scoreValue < 7 ? " bg-orange-400" : " bg-green-500"}`}
          className="h-2 bg-gray-300 "
          value={scoreValue * 10}
        />{" "}
        <p
          className={` font-semibold ${scoreValue < 7 ? " text-orange-400" : " text-green-500"}`}
        >
          {scoreValue}/10
        </p>
      </div>
    </div>
  );
};

export default ScoreDetails;
