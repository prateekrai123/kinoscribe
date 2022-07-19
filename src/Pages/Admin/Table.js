import "./Table.css";

const Table = ({ data, column }) => {
  return (
    <table>
      <thead>
        <tr>
          {column.map((item, index) => (
            <TableHeadItem item={item} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow item={item} column={column} />
        ))}
      </tbody>
    </table>
  );
};

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
const TableRow = ({ item, column, onClick }) => (
  <tr
    onClick={() => {
      window.location.href = `/singleOrder?id=${item._id}`;
    }}
  >
    {column.map((columnItem, index) => {
      if (columnItem.value.includes(".")) {
        const itemSplit = columnItem.value.split(".");
        return <td>{item[itemSplit[0]][itemSplit[1]]}</td>;
      }

      return <td>{item[`${columnItem.value}`]}</td>;
    })}
  </tr>
);

export default Table;
