import Image from "next/image";
import { managementDataType } from "../type";

const ManagementCard = ({ data }: { data: managementDataType }) => {
  return (
    <div className=" w-56  flex flex-col  items-center bg-light ">
      <div className="relative w-56 h-56">
        <Image
          src={data.imgLink}
          fill
          alt={data.name}
          className="object-cover "
        />
      </div>

      <div className="bg-dark rounded-b-md p-4 h-22 xs:h-28 grid palce-items-center w-full">
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
    // <div className=" w-44 h-66 gap-8  flex flex-col  items-center bg-light p-4 rounded-2xl">
    //   <div className="relative h-38 w-38">
    //     <Image
    //       src={data.imgLink}
    //       fill
    //       alt={data.name}
    //       className="object-cover rounded-2xl"
    //     />
    //   </div>

    //   <div className="">
    //     <p className="text-center">{data.name}</p>
    //     <div className="text-center">
    //       <label
    //         className=" font-semibold italic
    //       "
    //       >
    //         {data.position}
    //       </label>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ManagementCard;
