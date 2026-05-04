export type schoolClassDataType =
  | "montessory"
  | "nursery"
  | "class 1"
  | "class 2"
  | "class 3"
  | "class 4"
  | "class 5"
  | "class 6"
  | "class 7"
  | "class 8"
  | "class 9"
  | "class 10"
  | "class 11 (management)"
  | "class 12 (management)";

export type monthlyTableDataType = {
  class: schoolClassDataType;

  monthlyFee: number;
  admissionFee: number;
  sportsFee: number;
  examinationFee: number;
  computerFee: number;
  libraryFee: number;
  hostelMonthly: number;
  transportationFee: number;

  description: string;
};

export type filterSideDataType = Pick<
  monthlyTableDataType,
  "class" | "description"
>;
