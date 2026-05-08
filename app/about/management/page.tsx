import { managementData } from "@/components/about/data/managementData";
import ManagementCard from "@/components/about/reusables/ManagementCard";
const page = () => {
  return (
    <section className="bg-surface grid gap-14">
      <div className="grid gap-14">
        <div className="grid gap-2">
          <div className="">
            <label className="border border-border flex items-center gap-2 rounded-md px-1 py-1 w-fit">
              <span className="inline-block w-3 h-3 rounded-full bg-accent"></span>
              <div>
                KMSS <span className="text-blue-500">Board Management</span>
              </div>
            </label>
          </div>

          <h4 className="leading-tight">
            BOT/School Management Committee, 2082
          </h4>
        </div>

        <div className=" grid gap-8">
          <div className="flex justify-center items-center gap-14">
            <ManagementCard data={managementData[0]} />
            <ManagementCard data={managementData[1]} />
          </div>

          <div className="flex justify-center items-center gap-14">
            <ManagementCard data={managementData[2]} />
            <ManagementCard data={managementData[3]} />
            <ManagementCard data={managementData[4]} />
          </div>
        </div>
      </div>

      <div className="grid gap-14">
        <div className="grid gap-2">
          <div className="">
            <label className="border border-border flex items-center gap-2 rounded-md px-1 py-1 w-fit">
              <span className="inline-block w-3 h-3 rounded-full bg-accent"></span>
              <div>
                KMSS <span className="text-blue-500">School Team</span>
              </div>
            </label>
          </div>

          <h4 className="leading-tight">School Teachers, 2082</h4>
        </div>

        <div className=" grid gap-8">
          <div className="flex justify-center items-center gap-14">
            <ManagementCard data={managementData[0]} />
            <ManagementCard data={managementData[1]} />
          </div>

          <div className="flex justify-center items-center gap-14">
            <ManagementCard data={managementData[2]} />
            <ManagementCard data={managementData[3]} />
            <ManagementCard data={managementData[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
