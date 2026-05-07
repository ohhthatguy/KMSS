import z from "zod";

export const admissionSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  phoneNumber: z.string().regex(/^[0-9+]{10,15}$/, "Invalid phone number"),
  email: z.email("Invalid email address").optional(),
  address: z.string().min(5, "Please provide a complete address"),
  grade: z.string().min(1, "Please select a grade"),
  message: z.string().max(500, "Message is too long").optional(),
});

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
  fee: {
    oneTimeFee: {
      admissionFee: number;
      sportsFee: number;
      examinationFee: number;
      computerFee: number;
      libraryFee: number;
    };
    recurringFee: {
      monthlyFee: number;
      hostelMonthlyFee: number;
      transportationFee: number;
    };
  };

  imageUrl: string;
  description: string;
};

export type filterSideDataType = Pick<
  monthlyTableDataType,
  "class" | "description"
>;
