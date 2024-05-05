export type candidate = {
  fullName: string;
  imgURL: string;
  email: string;
  score: {
    behavioural: number;
    commuication: number;
    "sitaution-handling": number;
  };
  about: string;
  experience: string;
  hobbies: string;
  introduction: string;
};
