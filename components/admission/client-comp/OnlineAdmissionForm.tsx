"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { admissionSchema } from "../type";

type OnlineAdmissionFormDataType = z.infer<typeof admissionSchema>;

const OnlineAdmissionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OnlineAdmissionFormDataType>({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      address: "",
      grade: "",
      message: "",
    },
  });

  const onSubmit = async (data: OnlineAdmissionFormDataType) => {
    console.log("Form Data:", data);
    // Add your API call here
  };

  return (
    <div className="xs:flex flex-col justify-center items-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 lg:w-10/12 md:p-6 mt-2 border border-border rounded-2xl"
      >
        <div className="flex flex-col xs:flex-row xs:justify-between gap-4 xs:gap-8 ">
          <div className="w-full">
            <label className="block mb-1">Student Name</label>
            <input
              placeholder="Bhaskar Thakulla"
              {...register("fullName")}
              className="border p-2 w-full rounded"
            />
            {errors.fullName && (
              <div className="text-red-500 text-sm">
                {errors.fullName.message}
              </div>
            )}
          </div>

          <div className="w-full">
            <label className="block mb-1">phoneNumber</label>
            <input
              placeholder="9800000000"
              type="text"
              {...register("phoneNumber")}
              className="border p-2 w-full rounded"
            />
            {errors.phoneNumber && (
              <div className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </div>
            )}
          </div>
        </div>

        <div className="grid xs:grid-cols-[0.5fr_2fr] gap-4 xs:gap-8">
          <div>
            <label className="block mb-1">grade</label>
            <input
              placeholder="Class 1"
              type="text"
              {...register("grade")}
              className="border p-2 w-full rounded"
            />
            {errors.phoneNumber && (
              <div className="text-red-500 text-sm">
                {errors.grade?.message}
              </div>
            )}
          </div>
          <div>
            <label className="block mb-1">email</label>
            <input
              placeholder="thakullabhaskar456@gmail.com"
              type="text"
              {...register("email")}
              className="border p-2 w-full rounded"
            />
            {errors.phoneNumber && (
              <div className="text-red-500 text-sm">
                {errors.email?.message}
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block mb-1">address</label>
          <input
            type="text"
            placeholder="Nayabasti, Tikapur - 1 - Kailali "
            {...register("address")}
            className="border p-2 w-full rounded"
          />
          {errors.phoneNumber && (
            <div className="text-red-500 text-sm">
              {errors.address?.message}
            </div>
          )}
        </div>

        <div>
          <label className="block mb-1">message</label>
          <textarea
            placeholder="Any messages for teacher..."
            rows={5}
            {...register("message")}
            className="border p-2 w-full rounded"
          />
          {errors.phoneNumber && (
            <div className="text-red-500 text-sm">
              {errors.message?.message}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          {isSubmitting ? "Submitting..." : "Submit Admission"}
        </button>
      </form>
    </div>
  );
};

export default OnlineAdmissionForm;
