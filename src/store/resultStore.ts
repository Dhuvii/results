import { create } from "zustand";

type Result = {
  index: string;
  name: string;
  school: string;
  subjects: {
    name: string;
    grade: "A" | "B" | "C" | "D";
  }[];
};

interface ResultState {
  results: Result[];
}

const useResultStore = create<ResultState>()(() => ({
  results: [
    {
      index: "123",
      name: "Rishaban",
      school: "Theivakandha Tamil Vidyalam",
      subjects: [
        {
          name: "Mathematics",
          grade: "A",
        },
        {
          name: "Science",
          grade: "B",
        },
        {
          name: "ICT",
          grade: "B",
        },
      ],
    },
    {
      index: "124",
      name: "Jensan",
      school: "Theivakandha Tamil Vidyalam",
      subjects: [
        {
          name: "Mathematics",
          grade: "A",
        },
        {
          name: "Science",
          grade: "B",
        },
        {
          name: "ICT",
          grade: "B",
        },
      ],
    },
  ],
}));

export default useResultStore;
