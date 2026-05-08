"use client";
import Image from "next/image";
import { useState } from "react";
import { monthlyTableData } from "../data/AdmissionInfoData";
import type { monthlyTableDataType } from "../type";

const AdmssionInfoSection = () => {
  const [selectedState, setSelectedState] = useState<monthlyTableDataType>(
    monthlyTableData[0],
  );

  // const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedState(
  //     monthlyTableData.find((e) => e.class === event.target.value)!,
  //   );
  // };

  return (
    <div className="grid  gap-4">
      <div className=" rounded-md flex flex-col gap-4 p-2">
        <div className="flex flex-col gap-6">
          <div className="flex  gap-8  items-center ">
            <div className="flex-[1.5] flex flex-col  gap-4">
              <div className="w-full flex-2 ">
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

              <div className="flex flex-wrap ">
                {monthlyTableData.map(
                  (e: monthlyTableDataType, index: number) => (
                    <div
                      onClick={() => setSelectedState(e)}
                      className={`hover:cursor-pointer border  p-2  rounded-md  transition-all  hover:bg-hover duration-500 scale-90 ${e.class === selectedState.class ? "scale-95 bg-hover border-dark " : "scale-90 bg-surface border-border "} `}
                      key={index}
                    >
                      {e.class}
                    </div>
                  ),
                )}
              </div>

              {/* <div className="flex-[0.5] overflow-auto overflow-x-hidden flex flex-wrap  sm:h-56 scrollbar-custom">
                {monthlyTableData.map(
                  (e: monthlyTableDataType, index: number) => (
                    <div
                      onClick={() => setSelectedState(e)}
                      className={`hover:cursor-pointer border  p-4 rounded-md  transition-all  hover:bg-hover duration-500 scale-90 ${e.class === selectedState.class ? "scale-100 bg-hover border-dark " : "scale-90 bg-surface border-border "} `}
                      key={index}
                    >
                      {e.class}
                    </div>
                  ),
                )}
              </div> */}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full p-2 bg-surface  ">
              <label className="mb-2 inline-block underline">
                One Time Fee
              </label>
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

            <div className="w-full">
              <div className=" p-2 bg-surface">
                <label className="mb-2 inline-block text-right underline w-full">
                  Monthly Fee
                </label>
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

          {/* <div className="flex flex-col gap-4">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdmssionInfoSection;
