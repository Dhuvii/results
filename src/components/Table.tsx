import { Fragment } from "react";
import { cn } from "../utilities/cn";

interface ITable
  extends React.DetailedHTMLProps<
    React.TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  headings: string[];
  datas: (
    | React.FC<
        React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLDivElement>,
          HTMLDivElement
        >
      >
    | JSX.Element
  )[][];
}
const Table = ({ headings, datas, className }: ITable) => {
  // if (headings.length !== (datas && datas[0].length))
  //   throw new Error("Headings and data length mismatch.");
  return (
    <>
      {datas && (
        <div
          className={`${cn(
            `relative overflow-auto rounded-xl border border-gray-300 shadow-md`,
            className,
          )}`}
        >
          <table className="w-full text-left text-sm text-gray-800">
            <thead className="border-b border-gray-300 text-xs uppercase text-gray-800">
              <tr>
                {headings.map((heading, idx) =>
                  heading?.includes("_") ? (
                    <Fragment key={`${idx}_${heading}`}></Fragment>
                  ) : (
                    <th
                      key={`${idx}_${heading}`}
                      scope="col"
                      className="px-6 py-3"
                    >
                      {heading}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody className="">
              {/* only border-b for not last ele */}
              {datas.map((rows, row_idx) => (
                <tr
                  key={`table_row_${row_idx}`}
                  className={`${
                    row_idx < datas.length - 1 && `border-b border-gray-300`
                  } `}
                >
                  {rows.map((Data, data_idx) =>
                    headings[data_idx].includes("_") ? (
                      <td
                        key={`table_col_${row_idx}_${data_idx}`}
                        className="px-6 py-4 text-right"
                      >
                        {typeof Data === "function" ? <Data /> : Data}
                      </td>
                    ) : data_idx === 0 ? (
                      <th
                        key={`table_col_${row_idx}_${data_idx}`}
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-800"
                      >
                        {typeof Data === "function" ? <Data /> : Data}
                      </th>
                    ) : (
                      <td
                        key={`table_col_${row_idx}_${data_idx}`}
                        className="px-6 py-4 text-gray-800"
                      >
                        {typeof Data === "function" ? <Data /> : Data}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Table;
