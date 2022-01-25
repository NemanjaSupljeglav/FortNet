import React from "react";
import { NavLinks } from "../../components/NavLinks";
import MsterialTable from "material-table";
export function AttractinosContainer() {
  const data = [
    { name: "Ramo", age: 30 },
    { name: "Mihael", age: 27 },
    { name: "Sinisa", age: 35 },
    { name: "Vedran", age: 32 },
    { name: "Šuke", age: 27 },
    { name: "Mile", age: 25 },
    { name: "Andreja", age: 25 },
    { name: "Dane", age: 36 },
  ];
  const columns = [
    {
      title: "Name",
      field: "name",
    },
    {
      title: "Age",
      field: "age",
    },
  ];
  return (
    <div>
      <NavLinks />
      <div className="my-20">
        <MsterialTable
          title="Material Table"
          data={data}
          columns={columns}
        ></MsterialTable>
      </div>
    </div>
  );
}
