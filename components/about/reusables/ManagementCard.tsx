import Image from "next/image";
import { managementDataType } from "../type";

const ManagementCard = ({ data }: { data: managementDataType }) => {
  return (
    <div className="w-72  flex flex-col gap-8 justify-center items-center bg-light p-4 rounded-2xl">
      <div className="relative h-40 w-40">
        <Image
          src={data.imgLink}
          fill
          alt={data.name}
          className="object-cover rounded-2xl"
        />
      </div>

      <div className="">
        <p className="text-center">{data.name}</p>
        <div className="text-center">
          <label
            className=" font-semibold italic
          "
          >
            {data.position}
          </label>
        </div>
      </div>
    </div>
  );
};

export default ManagementCard;
