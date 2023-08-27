import { create } from "zustand";

type Result = {
  index: string;
  name: string;
  grade: string;
  rank: number;
  subjects: {
    name: string;
    grade: string;
  }[];
};

interface ResultState {
  results: Result[];
}

const useResultStore = create<ResultState>()(() => ({
  results: [
    {
      index: "20230201",
      name: "M.Nilukshan",
      grade: "10",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },
    {
      index: "20230202",
      name: "J.Hariprashan",
      grade: "10",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },
    {
      index: "20230203",
      name: "N.Thivagaran",
      grade: "10",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230204",
      name: "J.Johnkishan",
      grade: "10",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },
    {
      index: "20230205",
      name: "T.Manoj",
      grade: "10",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },
    {
      index: "20230206",
      name: "T.Arun",
      grade: "10",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230207",
      name: "M.Harigaran",
      grade: "10",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230208",
      name: "S.Jagathishvaran",
      grade: "10",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230209",
      name: "S.Thanushan",
      grade: "10",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },
    {
      index: "20230210",
      name: "C.Kirushoth",
      grade: "10",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230211",
      name: "R.Navanithan",
      grade: "10",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230212",
      name: "A.lakshika",
      grade: "10",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230213",
      name: "P.Nilushini",
      grade: "10",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230214",
      name: "S.Sashina",
      grade: "10",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230215",
      name: "Y.Uthayashini",
      grade: "10",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230216",
      name: "P.Nishaptha",
      grade: "10",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230217",
      name: "S.Shalini",
      grade: "10",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230218",
      name: "K.Roshika",
      grade: "10",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230219",
      name: "Y.Piriyavathani",
      grade: "10",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230220",
      name: "V.Akshan",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230221",
      name: "K.Diroshan",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230222",
      name: "R.Pavithiran",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230223",
      name: "K.Sanjevankanth",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230224",
      name: "V.Moharish",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230225",
      name: "P.Thivankumar",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230226",
      name: "M.Thanushkar",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230227",
      name: "K.Arun",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230228",
      name: "S.Thanush",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230229",
      name: "S.Sriraj",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230230",
      name: "V.Kabishek",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230231",
      name: "V.Thanojan",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230232",
      name: "M.Haricharan",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230233",
      name: "V.Thilukshika",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230234",
      name: "R.Thilrukshi",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230235",
      name: "J.Piravina",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230236",
      name: "S.Rishanthini",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230237",
      name: "C.Kirishanthika",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230238",
      name: "M.Nathushika",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230239",
      name: "B.Yugatharshini",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230240",
      name: "E.Manoransani",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230241",
      name: "K.Abisha",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230242",
      name: "S.Sathurshika",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230243",
      name: "S.Thanushiya",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230244",
      name: "K.Mathushiya",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },

    {
      index: "20230245",
      name: "S.Kobika",
      grade: "11",
      rank: 0,
      subjects: [
        {
          name: "Mathematics",
          grade: "",
        },
      ],
    },
  ],
}));

export default useResultStore;
