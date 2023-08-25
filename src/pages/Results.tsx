import { useState } from "react";
import { Button } from "../components/Button";
import Table from "../components/Table";
import Input from "../components/inputs/Input";
import useResultStore from "../store/resultStore";

const Results = () => {
  const [indexNumber, setIndexNumber] = useState("");
  const { results } = useResultStore();

  const [formattedResults, setFormattedResults] = useState<any>(null);
  const [student, setStudent] = useState<null | any>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const student = results.filter((r) => r.index === indexNumber)[0];

    setStudent(student || null);

    if (student) {
      const grades = student.subjects.map((sub) => [
        <div className="">{sub.name}</div>,
        <div className="flex items-center justify-center rounded-md bg-gray-100 py-2">
          {sub.grade}
        </div>,
      ]);
      setFormattedResults(grades);
    } else {
      setFormattedResults(null);
    }
  };

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center p-5">
      {/* background */}
      <div className="pointer-events-none absolute inset-x-0 h-full w-full [mask-image:linear-gradient(0deg,transparent,black)]">
        <div className="pattern -mt-1 h-full w-full opacity-10"></div>
      </div>
      <img
        src="./logo.png"
        className="aspect-square w-32 rounded-md bg-cover"
        alt=""
      />
      <h1 className="text-center text-4xl font-medium text-gray-800">
        லயத்துச் சிறகுகள்
      </h1>
      <p className="mt-3 text-center text-xs uppercase tracking-wider text-gray-600">
        Theivakantha Tamil Vidyalayam <br /> 2023
      </p>

      {!formattedResults && (
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex w-full max-w-lg flex-col items-center justify-center gap-3 md:flex-row"
        >
          <Input
            className="w-full bg-white/10"
            placeholder="Index Number"
            value={indexNumber}
            onChange={(e) => setIndexNumber(e.target.value)}
          />

          <Button
            type="submit"
            className={"w-full md:w-auto md:px-8 md:py-3.5"}
            variant={"primary"}
          >
            Find
          </Button>
        </form>
      )}

      <div className="mt-10">
        {formattedResults && (
          <Button
            onClick={() => {
              setFormattedResults(null);
              setStudent(null);
              setIndexNumber("");
            }}
            className={
              "p-0 text-gray-500 hover:bg-transparent hover:text-gray-600 data-[pressed]:bg-transparent md:p-0"
            }
            variant={"unstyled"}
          >
            Back
          </Button>
        )}
        {student && (
          <div className="mt-5">
            <h3 className="text-4xl font-medium text-gray-800">
              {student.name}
            </h3>
            <p className="text-base text-gray-600">{student.school}</p>
          </div>
        )}
        {/* table */}
        <Table
          className="mt-5"
          headings={["Subject", "Grade"]}
          datas={formattedResults}
        />
      </div>
    </section>
  );
};

export default Results;
