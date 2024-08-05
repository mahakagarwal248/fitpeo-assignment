function TableComp({ data }) {
  const keys = Object.keys(data[0]);
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b-2 border-b-blackColorLighter">
          {keys.map((key, index) => (
            <th key={index} className="capitalize px-1 py-3">
              {key.replace(/([a-z](?=[A-Z]))/g, "$1 ")}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row) => (
          <tr className="border-b-2 border-b-blackColorLighter">
            {keys.map((key, index) => (
              <td key={index} className="px-1 py-3">
                {row[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComp;
