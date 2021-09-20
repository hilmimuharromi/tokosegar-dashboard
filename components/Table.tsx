interface TableProps {
  headers: any[];
  data: any[];
}

export default function Table(props: TableProps) {
  const { headers, data } = props;

  const headerHandler = (item: any, index: number) => {
    if (item.hide) {
      return (
        <th key={index.toString()} scope="col" className="relative px-6 py-3">
          <span className="sr-only">{item.title}</span>
        </th>
      );
    } else {
      return (
        <th
          key={index.toString()}
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium  text-white uppercase tracking-wider"
        >
          {item.title}
        </th>
      );
    }
  };

  const getData = (item: any, h: any) => {
    const keyData = h.key.split(".");
    if (keyData.length > 1) {
      const innerData = item[keyData[0]];
      return <>{innerData[keyData[1]]}</>;
    } else return <>{item[keyData[0]]}</>;
  };

  const rowHandler = (item: any, index: number) => {
    return (
      <tr key={index.toString()}>
        {headers.map((h, index) => {
          if (h.render)
            return (
              <td
                key={index.toString()}
                className="px-6 py-4 whitespace-nowrap"
              >
                {h.render(item)}
              </td>
            );
          else
            return (
              <td key={index.toString()} className="px-6 py-4 whitespace-wrap">
                {getData(item, h)}
              </td>
            );
        })}
      </tr>
    );
  };

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="table-auto min-w-full divide-y divide-gray-200">
              <thead className="bg-primary">
                <tr>
                  {headers.map((item, index) => headerHandler(item, index))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, index) => rowHandler(item, index))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
