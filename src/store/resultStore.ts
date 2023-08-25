import { create } from "zustand";

type Result = {
  index: string;
  name: string;
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
