"use client";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { monthlyTableData } from "../data/AdmissionInfoData";
import type { monthlyTableDataType } from "../type";

const AdmssionInfoSection = () => {
  const [selectedState, setSelectedState] = useState<monthlyTableDataType>(
    monthlyTableData[0],
  );

  const columns = [
    {
      name: "monthlyFee",
      selector: (row) => row.monthlyFee,
    },
    {
      name: "admissionFee",
      selector: (row) => row.admissionFee,
    },
    {
      name: "computerFee",
      selector: (row) => row.computerFee,
    },
    {
      name: "examinationFee",
      selector: (row) => row.examinationFee,
    },
    {
      name: "hostelMonthly",
      selector: (row) => row.hostelMonthly,
    },
    {
      name: "libraryFee",
      selector: (row) => row.libraryFee,
    },
    {
      name: "sportsFee",
      selector: (row) => row.sportsFee,
    },
    {
      name: "transportationFee",
      selector: (row) => row.transportationFee,
    },
    {
      name: "description",
      selector: (row) => row.description,
    },
  ];

  return (
    <div className="grid grid-cols-[1fr_2fr] gap-4">
      <div className="border rounded-md flex flex-col gap-4 p-2">
        <h4>Filter</h4>
        <div className="grid gap-4">
          {monthlyTableData.map((e: monthlyTableDataType, index: number) => (
            <p
              className={`hover:cursor-pointer border  p-4 rounded-md  transition-all  hover:bg-hover duration-500 scale-95 ${e.class === selectedState.class ? "scale-100 bg-hover " : "scale-95 bg-surface border-border"} `}
              key={index}
              onClick={() => setSelectedState(e)}
            >
              {e.class}
            </p>
          ))}
        </div>
      </div>
      <div className="border rounded-md flex flex-col gap-4 p-2">
        <h4>Info</h4>
        <DataTable
          columns={columns}
          data={[selectedState]}
          striped
          noHeader
          dense
        />
      </div>
    </div>
  );
};

export default AdmssionInfoSection;
