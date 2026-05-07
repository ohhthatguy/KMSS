"use client";
import Image from "next/image";
import { useState } from "react";
import { monthlyTableData } from "../data/AdmissionInfoData";
import type { monthlyTableDataType } from "../type";

const AdmssionInfoSection = () => {
  const [selectedState, setSelectedState] = useState<monthlyTableDataType>(
    monthlyTableData[0],
  );

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(
      monthlyTableData.find((e) => e.class === event.target.value)!,
    );
  };

  return (
    <div className="grid  gap-4">
      {/* <div className="border rounded-md flex flex-col gap-4 p-2">
        <h4>Filter</h4>
        <select
          onChange={(event) => handleFilter(event)}
          className={`hover:cursor-pointer border border-border accent-red-500  p-2 rounded-md  transition-all  hover:bg-hover duration-500  `}
        >
          {monthlyTableData.map((e: monthlyTableDataType, index: number) => (
            <option
              value={e.class}
              className={`hover:cursor-pointer   p-4 rounded-md  transition-all  hover:bg-hover duration-500 scale-95 ${e.class === selectedState.class ? "scale-100 bg-hover " : "scale-95 bg-surface "} `}
              key={index}
            >
              {e.class}
            </option>
          ))}
        </select>
     
      </div> */}
      <div className=" rounded-md flex flex-col gap-4 p-2">
        <div className="flex justify-between">
          <h4>Info</h4>

          <div>
            <select
              onChange={(event) => handleFilter(event)}
              className={`hover:cursor-pointer border border-border accent-red-500  p-2 rounded-md  transition-all  hover:bg-hover duration-500  `}
            >
              {monthlyTableData.map(
                (e: monthlyTableDataType, index: number) => (
                  <option
                    value={e.class}
                    className={`hover:cursor-pointer   p-4 rounded-md  transition-all  hover:bg-hover duration-500 scale-95 ${e.class === selectedState.class ? "scale-100 bg-hover " : "scale-95 bg-surface "} `}
                    key={index}
                  >
                    {e.class}
                  </option>
                ),
              )}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div>
              <div className="w-full h-56 relative">
                <Image
                  src={selectedState.imageUrl}
                  alt={`Image of ${selectedState.class}`}
                  priority
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              <div className="text-center">
                <label>{selectedState.class}</label>
              </div>
            </div>

            <p>{selectedState.description}</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className=" sm:w-11/12 p-2 bg-surface  ">
              <label className="mb-2 inline-block">One Time Fee:</label>
              {Object.entries(selectedState.fee.oneTimeFee).map(
                ([key, value], index: number) => (
                  <div
                    key={key}
                    className={`flex ${
                      index % 2 === 0 ? "bg-light" : "bg-transparent"
                    } p-2 justify-between `}
                  >
                    <label className=" capitalize text-left font-bold">
                      {key.replace(/([A-Z])/g, " $1")}
                    </label>

                    <label className="font-bold text-right">{value}</label>
                  </div>
                ),
              )}
            </div>

            <div>
              <div className=" sm:w-11/12 p-2 bg-surface">
                <label className="mb-2 inline-block">Monthly Fee:</label>
                {Object.entries(selectedState.fee.recurringFee).map(
                  ([key, value], index: number) => (
                    <div
                      key={key}
                      className={`flex p-2 justify-between ${index % 2 === 0 ? "bg-light" : "bg-surface"} `}
                    >
                      <label className=" capitalize text-left font-bold">
                        {key.replace(/([A-Z])/g, " $1")}{" "}
                      </label>

                      <label className="font-bold text-right">{value}</label>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmssionInfoSection;
