import type { scholarShipDataType } from "../type";

const ScholarshipCard = ({
  key,
  data,
}: {
  key: number;
  data: scholarShipDataType;
}) => {
  return (
    <section
      key={key}
      className="border border-border scale-95 hover:scale-100 hover:cursor-pointer transition-transform duration-500 p-4 rounded-2xl bg-light grid gap-4"
    >
      <h4>{data.title}</h4>

      <p className="text-justify">{data.description}</p>

      <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 ">
        <div className="border border-border p-2 rounded-md text-sm grid place-items-center gap-2 bg-surface">
          <div className="">Distributed: </div>
          <div className=" sm:text-lg">{data.time}</div>
        </div>

        <div className="border border-border p-2 rounded-md text-sm grid place-items-center gap-2 bg-surface">
          <div className="">Amount: </div>
          <div className=" sm:text-lg">{data.amount}</div>
        </div>

        <div className="border border-border p-2 rounded-md text-sm grid place-items-center gap-2 bg-surface">
          <div className="">Eligibility: </div>
          <div
            className={
              data.title === "KMSS Special scholarship"
                ? "sm:text-sm text-center"
                : "sm:text-lg text-center"
            }
          >
            {data.eligibility}
          </div>
        </div>

        {/* <div className="border border-border p-2 rounded-md text-sm">
          Amount: {data.amount}
        </div>
        <div className="border border-border p-2 rounded-md text-sm">
          Eligibility: {data.eligibility}
        </div> */}
      </div>
    </section>
  );
};

export default ScholarshipCard;
